const Sequelize = require("sequelize");
// import connection 
const db = require("../configs/database");
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Users = db.define('users', {
  username: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
module.exports= Users;