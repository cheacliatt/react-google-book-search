const express = require("express");
const router = express.Router();
const db = require("../models");

// Find all books
router.get("/api/books", (req, res) => {
  db.Book.find({})
    .then(bookData => {
      res.json({
        error: false,
        data: bookData,
        message: "Successfully retrieved all book data.",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Error retrieving excursion data.",
      });
    });
});

// Find a specfic book
router.get("/api/books/:id", (req, res) => {
  db.Book.findOne({ _id: req.params.id })
    .then(bookData => {
      res.json({
        error: false,
        data: bookData,
        message: "Successfully retrieved all book data.",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Error retrieving excursion data.",
      });
    });
});

// Create new book
router.post("/api/books", (req, res) => {
  db.Excursion.create(req.body)
    .then(newExcursionData => {
      res.json({
        error: false,
        data: newExcursionData,
        message: "Successfully added new excursion.",
      });
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Error adding new excursion to database.",
      });
    });
});

router.delete("/api/books/:id", (req, res) => {
    db.Book.deleteOne({ _id: req.params.id }, req.body)
      .then((bookData) => {
        res.json({
          error: false,
          data: bookData,
          message: "Successfully deleted book data.",
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: true,
          data: null,
          message: "Error deleting book data.",
        });
      });
  });

module.exports = router;
