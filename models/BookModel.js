const Sequelize = require("sequelize");
// import connection 
const db = require("../configs/database");
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Books = db.define('books', {
  
  // Define attributes
  title: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DOUBLE
  },
  author: {
    type: DataTypes.STRING
  },
  authorId: {
    type: DataTypes.INTEGER
  },
  published: {
    type: DataTypes.DATEONLY
  },
  publisher: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
module.exports= Books;