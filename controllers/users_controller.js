//  DEPENDENCIES
// const { create } = require("domain");
// const { Op } = require("sequelize");
const users = require("express").Router();
const db = require("../models");
const { User, Profile, Address, Image_File } = db;
const bcrypt = require("bcrypt");
const user_address = require("../models/user_address");
const user = require("../models/user");
const saltRounds = 10;
const multer = require("multer");
const image_file = require("../models/image_file");

// CREATE MULTER OBJECT
const imageUpload = multer({
  dest: "images",
});

// GET ALL USERS
users.get("/", async (req, res) => {
  try {
    const foundUsers = await User.findAll({
      include: [
        {
          model: Profile,
          include: [
            {
              model: Address,
            },
            {
              model: Image_File,
            },
          ],
        },
      ],
    });
    res.status(200).json(foundUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE A NEW USER
users.post("/", imageUpload.single("image"), async (req, res) => {
  const {
    username,
    password,
    first_name,
    last_name,
    date_of_birth,
    gender,
    email,
    phone,
    active,
    address,
    city,
    state,
    zipcode,
  } = req.body;
  const { filename, mimetype, size } = req.file;
  const filepath = req.file.path;
  try {
    const createProfile = await Profile.create({
      first_name,
      last_name,
      date_of_birth,
      gender,
      email,
      phone,
      active,
    });

    const newUser = await User.create({
      username,
      password,
    });

    const createAddress = await Address.create({
      address,
      city,
      state,
      zipcode,
    });

    const addImage = await Image_File.create({
      filename,
      filepath,
      mimetype,
      size,
    });

    await createProfile.setUser(newUser);
    await createProfile.setAddress(createAddress);
    await addImage.setProfile(createProfile);

    res.status(200).json({
      message: "Successfully created a new user",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

users
  .route("/:id")
  // SHOW USER BY ID
  .get(async (req, res) => {
    try {
      const foundUser = await User.findOne({
        where: { id: req.params.id },
        include: {
          model: Profile,
          include: {
            model: Address,
          },
        },
      });
      res.status(200).json(foundUser);
      // console.log(foundUser.id);
    } catch (error) {
      res.status(500).json(error);
    }
  })
  // UPDATE USER BY ID
  .put(async (req, res) => {
    const {
      username,
      password,
      first_name,
      last_name,
      date_of_birth,
      gender,
      email,
      phone,
      active,
      address,
      city,
      state,
      zipcode,
      AddressId,
    } = req.body;

    try {
      const updateUser = await User.update(
        { username, password },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      const updateProfile = await Profile.update(
        {
          first_name,
          last_name,
          date_of_birth,
          gender,
          email,
          phone,
          active,
        },
        {
          where: {
            UserId: updateUser,
          },
        }
      );

      const updateAddress = await Address.update(
        {
          address,
          city,
          state,
          zipcode,
        },
        {
          where: {
            id: AddressId,
          },
        }
      );

      res.status(200).json({
        message: `Successfully updated user`,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  })
  // DELETE USER BY ID
  .delete(async (req, res) => {
    try {
      const deleteUser = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: `Successfully deleted user`,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// EXPORT
module.exports = users;
