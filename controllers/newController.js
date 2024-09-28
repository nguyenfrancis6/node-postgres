const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  res.render("form");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function searchUsernameGet(req, res) {
  const { search } = req.query; // Extract 'search' from query parameters

  try {
    let searchResults = [];

    if (search) {
      // If there's a search term, query the database for matching usernames
      searchResults = await db.searchUsernames(search);
    }

    // Return the search results (or an empty array if no search was performed)
    res.send(
      "Usernames: " + searchResults.map((res) => res.username).join(", ")
    );
  } catch (error) {
    console.error("Error searching usernames:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deleteUsernamesGet(req, res) {
  try {
    await db.deleteUsernames();
    res.send("All usernames deleted!");
  } catch (error) {
    console.error("Error deleting usernames: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  searchUsernameGet,
  deleteUsernamesGet
};
