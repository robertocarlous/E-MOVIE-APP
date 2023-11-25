const { isObjectIdOrHexString } = require("mongoose");
const movieModel = require("../model/movie.model");
const userModel = require("../model/movie.model");

async function getMovie(req, res) {
  try {
    const movie = await movieModel.find({});
    return res.status(200).json({
      success: true,
      data: movie,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
async function getMovieById(req, res) {
  try {
    const id = req.params.movieId;
    if (!isObjectIdOrHexString(id))
      return res.status(400).json({
        message: "Invalid movie id",
      });
    const movie = await movieModel.findOne({ _id: id });
    if (!movie) return res.status(400).json({ message: "Movie does not exist " });
    return res.status(200).json({
      success: true,
      data: movie,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function saveMovie(req, res) {
  try {
    const user = req.user;
    const data = req.body;
    if (!data.movieId)
      return res.status(400).json({
        message: "Movie id is required",
      });
    if (!isObjectIdOrHexString(data.movieId))
      return res.status(400).json({
        message: "Invalid movie id",
      });
    const movie = await movieModel.findOne({ _id: data.movieId });
    if (!movie) return res.status(400).json({ message: "movie does not exist " });
    const isMovieSaved = user.movie.includes(data.movieId);
    if (isMovieSaved)
      return res.status(400).json({ message: "movie already saved " });
    await userModel.updateOne(
      { _id: user._id },
      { $push: {movies: movie._id } }
    );

    return res.status(200).json({
      success: true,
      message: "movie saved successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getMovie,
  getMovieById,
  saveMovie,
};