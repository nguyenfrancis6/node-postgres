const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function searchUsernames(input) {
  const query = "SELECT username FROM usernames WHERE username ILIKE '%' || $1 || '%'";
  const { rows } = await pool.query(query, [input]);
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteUsernames() {
  const result = await pool.query("DELETE FROM usernames");
  return result;
}

module.exports = {
  getAllUsernames,
  insertUsername,
  searchUsernames,
  deleteUsernames
};
