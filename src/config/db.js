const mongoose = require("mongoose"); //mongoose module from package.json 
//const {importMovieToDB} = require("../script/moviescript");    
const uri = process.env.URI


async function connectDB() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database connected!");
   //We don't need to import movies to DB every time we start the server
  //await importMovieToDB();
}

module.exports = connectDB;
