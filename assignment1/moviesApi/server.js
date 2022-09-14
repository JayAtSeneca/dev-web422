const express = require("express");
const cors = require("cors");
require("dotenv").config();
const MoviesDB = require("./modules/moviesDB.js");
const app = express();
const db = new MoviesDB();
const HTTP_PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.json({ message: "API Listening" });
});

//CREATE
app.post("/api/movies", (req, res) => {
    db.addNewMovie(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//READ
app.get("/api/movies", (req, res) => {

    db.getAllMovies(req.query.page, req.query.perPage, req.query.title)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

app.use((req, res) => {
    res.status(404).send('Resource not found');
  });

db.initialize(process.env.MONGODB_CONN_STRING)
  .then(() => {
    app.listen(HTTP_PORT, () => {
      console.log(`server listening on: ${HTTP_PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
