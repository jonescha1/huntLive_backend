require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_DEV,
    host: process.env.HOST,
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_TEST,
    host: process.env.HOST,
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_PROD,
    host: process.env.HOST,
    dialect: "postgres",
  },
};
