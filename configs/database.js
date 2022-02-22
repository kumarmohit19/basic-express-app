// import sequelize
const Sequelize = require("sequelize");
 
// create connection
const db = new Sequelize('books_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
 
// export connection
module.exports= db;