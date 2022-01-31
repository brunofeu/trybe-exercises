const connection = require("./connection");

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection.execute(
    "INSERT INTO movies (title, directed_by, release_year) VALUES (?, ?, ?)",
    [title, directedBy, releaseYear]
  );

  return {
    id: result.insertId,
  };
};

const getAll = async () => {
  const [movies] = await connection.execute("SELECT * FROM movies");

  return movies;
};

module.exports = {
  create,
  getAll,
};
