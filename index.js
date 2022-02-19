const express = require('express');

// initiaizing express
const app = express();


app.get('/', (req, res)=> {
   res.send("This API is working")
});


app.listen(8080, () => {
   console.log('Server started on Port 8080...');
});