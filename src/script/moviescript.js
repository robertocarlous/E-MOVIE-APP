
const movies = require("../data/movie.json");
const movieModel = require("../model/movie.model");

async function importMovieToDB() {
  console.log("Importing movies to DB");
  await movieModel.insertMany(movies);
  console.log("movies imported to DB");
}

module.exports = { importMovieToDB };