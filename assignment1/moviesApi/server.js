/*********************************************************************************
 * WEB422 – Assignment 1
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Jay Pravinkumar Chaudhari Student ID: 147268205 Date: 09/15/2022
 * Cyclic Link: _______________________________________________________________
 *
 ********************************************************************************/

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
  if (req.body) {
    db.addNewMovie(req.body)
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(500).json({ message: err.message }));
    console.log("Post Created");
  } else {
    res.status(400).json({ message: "ERROR: Bad Request req.body is empty" });
  }
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
      .catch((err) => res.status(500).json({ message: err.message }));
  }
});

//UPDATE
app.put("/api/movies/:id", (req, res) => {
  if (req.params.id) {
    db.updateMovieById(req.body, req.params.id)
      // Here the json data will not be displayed because of the 204 status code
      .then((data) => res.status(204).json({ message: "Updated Successfully" }))
      .catch((err) => res.status(500).json({ message: err.message }));
  }
});

//DELETE
app.delete("/api/movies/:id", (req, res) => {
  if (req.params.id) {
    db.deleteMovieById(req.params.id)
      .then((data) => res.status(200).json({ message: "Deleted Successfully" }))
      .catch((err) => res.status(500).json({ message: err.message }));
  }
});

app.use((req, res) => {
  res
    .status(404)
    .json({ message: "404 unable to find the requested resource" });
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
