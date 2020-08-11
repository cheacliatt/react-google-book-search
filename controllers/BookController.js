const express = require("express");
const router = express.Router();
const books = require("../models/Book");

router.get("/api/books", function (req, res) {
  books.find({}).then((bookData) => {
    res.json(bookData);
  });
});

router.post("/api/books", function (req, res) {
  books.create(req.body).then((bookData) => {
    res.json(bookData);
  });
});

router.delete("/api/books/:id", function (req, res) {
  books.deleteOne({ _id: req.params.id }, req.body).then((bookData) => {
    res.json(bookData);
  });
});

module.exports = router;
