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
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(500).json({ message: err }));
});

//READ
app.get("/api/movies", (req, res) => {
  if (req.query.page && req.query.perPage) {
    db.getAllMovies(req.query.page, req.query.perPage, req.query.title)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json({ message: err.message }));
  } else {
    res.status(400).json({ message: "ERROR: Bad Request" });
  }
});

//READ BY ID
app.get("/api/movies/:id", (req, res) => {
  if (req.params.id) {
    db.getMovieById(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json({ message: err }));
  }
});

//UPDATE
app.put("/api/movies/:id", (req, res) => {
  if (req.params.id) {
    db.updateMovieById(req.body, req.params.id)
      .then((data) => res.status(204).json({ message: "Updated Successfully" }))
      .catch((err) => res.status(500).json({ message: err }));
  }
});

//DELETE
app.delete("/api/movies/:id", (req, res) => {
  if (req.params.id) {
    db.deleteMovieById(req.params.id)
      .then((data) => res.status(204).json({ message: "Deleted Successfully" }))
      .catch((err) => res.status(500).json({ message: err }));
  }
});

app.use((req, res) => {
  res.status(404).send("Resource not found");
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
