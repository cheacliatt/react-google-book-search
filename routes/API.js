// const router = require("express").Router(); 
// const Books = require("../models/Book")
// // const booksController = require("../controllers/bookController")

// router.get("/api/books", function(req, res) {
//     Books.find({}).then(booksRetrieved =>{
//         res.json(booksRetrieved)
//     })
// })

// router.post("/api/books", function(req,res){
//     Books.create(req.body).then(newSave => {
//         res.json(newSave)
//     })
// })

// router.delete("/api/books/:id", function(req,res){
//     Books.findOneAndRemove({ _id: req.params.id })
//         .then(book => {
//             res.json(book)
//         })
// })

// module.exports = router;