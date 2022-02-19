const uuid = require("uuid");
var books = require("../models/BookModel");
 
/**
 * Create and save a new Book
 */
const addBook = (req, res) => {
   const book = req.body;
 
   // Validations
   if (!book.title) {
      res.status(400).send({
            message: "Title of the book can't be empty !"
      })
      return;
   }

   try {
      const newBook = {
         id: uuid.v4(),
         title: book.title,
         author: book.author || "",
         published: book.published || new Date().toLocaleDateString(),
         publisher: book.publisher || ""
      }

      books.push(newBook);
      res.status(201).json(newBook);
   } catch (error) {
      console.error(error.message);
      res.status(500).json({message: error.message})
   }
}

/**
 * Get a list of all the Books
 */
const findAllBooks = (req, res) => {
   try {
      res.status(200).json(books);
   } catch (error) {
      console.error(error.message);
      res.status(500).json({message: error.message})
   }
}

/**
 * Get a book by it's id
 */
const findBookById = (req, res) => {
   const bookId = req.params.id;

   try {
      const book = books.find((book) => book.id === bookId);

      if(book){
         res.json(book);
      } else {
         res.status(404).json({ message: 'Book Not Found'});
      }

   } catch (error) {
      console.error(error.message);
      res.status(500).json({message: error.message})
   }
}


/**
 * Update an existing book based on it's id
 */
const updateBookById = (req, res) => {
   const updbook = req.body;
   const bookId = req.params.id

   // Validations
   if (!updbook.title) {
      res.status(400).send({
            message: "Title of the book can't be empty !"
      })
      return;
   }

   try {
      const book = books.find((book) => book.id === bookId);
      if(book){
         books = books.map((book) => {
            if(book.id === bookId){
               return {
                  ...book,
                  title: updbook.title,
                  author: updbook.author || book.author,
                  published: updbook.published || book.published,
                  publisher: updbook.publisher || book.publisher
               }
            } else {
               return book;
            }
         })
         res.status(200).json({ message: `Book Id ${bookId} details Updated`});
      } else {
         res.status(404).json({ message: 'Book Details Not Found'});
      }
   } catch (error) {
      console.error(error.message);
      res.status(500).json({message: error.message})
   }
}
/**
 * Delete an existing book based on it's id
 */
const deleteBookById = (req, res) => {
   const bookId = req.params.id;

   try {
      const book = books.find((book) => book.id === bookId);

      if(book){
         books = books.filter((book) => book.id !== bookId)

         res.status(200).json({ message: `Book Id ${bookId} details Deleted`});
      } else {
         res.status(404).json({ message: 'Book Not Found'});
      }

   } catch (error) {
      console.error(error.message);
      res.status(500).json({message: error.message})
   }
}
module.exports = { findBookById, addBook, deleteBookById, updateBookById, findAllBooks } 