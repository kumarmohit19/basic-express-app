const Books = require("../models/BookModel");

/**
 * Get a list of all the Books
 */
const getAllBooks = async (req, res) => {
    
    Books.findAll()
        .then((books) => {
            res.send(books);
        })
        .catch(() => {
            console.error(error.message);
            res.status(500).json({message: error.message})
        })
        
}

/**
 * Get a book by it's id
 */
const getBookById = async (req, res) => {
    Books.findAll({
           where: {
               id: req.params.id
           }
        })
        .then((result) => {
            if(result.length > 0){
                res.send(result[0]);
            } else {
                res.status(404).json({message: `Book with id ${req.params.id} not found`})
            }
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({message: error.message})
        })
}

/**
 * Create and save a new Book
 */
const addBook = async (req, res) => {

    Books.create(req.body)
        .then((result) => {
            res.status(201).json({
                "message": "Book Created",
                "book": result
            });
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({message: error.message})
        })
}

/**
 * Update an existing book based on it's id
 */
const updateBookById = async (req, res) => {

    Books.update(req.body, {
           where: {
               id: req.params.id
           }
        })
        .then((result) => {
            if(result[0] === 0){
                res.status(404).json({message: `Book with id ${req.params.id} not found`})
            } 
            else {
                res.json({
                    "message": `Book Id: ${ req.params.id } Updated`
                }); 
            }
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({message: error.message})
        })
}

/**
 * Delete an existing book based on it's id
 */
const deleteBookById = async (req, res) => {
    
    Books.destroy({
           where: {
               id: req.params.id
           }
        })
        .then((result) => {
            res.json({
                "message": `Book Id: ${ req.params.id } Deleted`
            });
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({message: error.message})
        })
}

module.exports = { getAllBooks, getBookById, addBook, updateBookById, deleteBookById } 