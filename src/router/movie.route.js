
const { Router } = require("express");
const {getMovie, getMovieById, saveMovie} = require("../controller/movie.controller");
const{verifyAuthToken} = require("../middleware/authenticate")


const movieRouter = Router();
//No authorization needed to access movies. 
movieRouter.get("/", getMovie);

// authorization needed to access Saved Books - AUTH Token
movieRouter.post("/saveMovie", verifyAuthToken, saveMovie);
movieRouter.get("getMovieById", verifyAuthToken,getMovieById )

module.exports = movieRouter;



