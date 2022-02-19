const uuid = require("uuid");
var Book = require("../models/BookModel");
 

/**
 * Get a list of all the Books
 */
const getAllBooks = async (req, res) => {
   try {
       const books = await Book.findAll();
       res.send(books);
   } catch (error) {
      console.error(error.message);
      res.status(500).json({message: error.message})
   }
}

/**
 * Get a book by it's id
 */
const getBookById = async (req, res) => {
   try {
       const book = await Book.findAll({
           where: {
               id: req.params.id
           }
       });

       if(book.length > 0){
         res.send(book[0]);
       } else {
         res.status(404).json({message: `Book with id ${req.params.id} not found`})
       }
   } catch (error) {
      console.error(error.message);
      res.status(500).json({message: error.message})
   }
}

/**
 * Create and save a new Book
 */
const addBook = async (req, res) => {

   // Validations
   if (!req.body.title) {
      res.status(400).send({
            message: "Title of the book can't be empty !"
      })
      return;
   }

   try {
       const book = await Book.create(req.body);
       console.log(book);
       res.status(201).json({
           "message": "Book Created",
           book
       });
   } catch (error) {
      console.error(error.message);
      res.status(500).json({message: error.message})
   }
}

/**
 * Update an existing book based on it's id
 */
const updateBookById = async (req, res) => {
   
   // Validations
   if (!req.body.title) {
      res.status(400).send({
            message: "Title of the book can't be empty !"
      })
      return;
   }

   try {
       const book = await Book.update(req.body, {
           where: {
               id: req.params.id
           }
       });
       if(book[0] === 0){
         res.status(404).json({message: `Book with id ${req.params.id} not found`})
       } 
       else {
         res.json({
            "message": `Book Id: ${ req.params.id } Updated`
         }); 
       }
       
   } catch (error) {
      console.error(error.message);
      res.status(500).json({message: error.message})
   }
}

/**
 * Delete an existing book based on it's id
 */
const deleteBookById = async (req, res) => {
   try {
       await Book.destroy({
           where: {
               id: req.params.id
           }
       });
       res.json({
           "message": `Book Id: ${ req.params.id } Deleted`
       });
   } catch (error) {
      console.error(error.message);
      res.status(500).json({message: error.message})
   }
}

module.exports = { getAllBooks, getBookById, addBook, updateBookById, deleteBookById } 