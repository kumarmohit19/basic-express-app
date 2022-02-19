const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/BookRoutes')

// initiaizing express
const app = express();

/**
 * Using the body-parser middleware
 * 
 * Using for parsing the request. 
 * Parsing the request of the type json and convert that to object
 * */
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

app.get('/', (req, res)=> {
   res.send("This API is working")
});

// book routes to handle all api starting with /books
app.use('/books', bookRoutes);

app.listen(8080, () => {
   console.log('Server started on Port 8080...');
});