const Books = require("../models/bookModel");

const validateBookRequest = (req, res, next) => {

   /**
    * Validation of the request body
    */

   if (!req.body.title) {
       res.status(400).send({
           message: "Title of the book can't be empty !"
       })
       return;
   }
   next();

}

const validateBookOwner = (req, res, next) => {

    /**
    * Validate if the book belongs to the user 
    * before update or delete request
    */

    Books.findAll({
    where: {
        id: req.params.id,
        authorId: req.user
    }
    })
    .then((result) => {
        if(result.length <= 0){
            res.status(401).json({message: `Book with id ${req.params.id} not found for user ${req.user}`})
            return;
        } 
        next();
    })
    .catch((error) => {
        console.error(error.message);
        res.status(500).json({message: error.message})
    })

}

module.exports = { validateBookRequest, validateBookOwner }