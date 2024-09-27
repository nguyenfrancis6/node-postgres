const { Pool } = require("pg");
require('dotenv').config();

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: process.env.HOST, // or wherever the db is hosted
  user: process.env.DB_USERNAME,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DBPORT // The default port
});
