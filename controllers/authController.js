const config = require("../configs/authConfig");
const Users = require("../models/userModel");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const register = (req, res) => {
    console.log("Inside register method");
    
    // Save User to Database
    Users.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    })
      .then(user => {
        console.log("User Created");
        res.send({ message: "User registered successfully!" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

const login = (req, res) => {
   Users.findOne({
      where: {
        username: req.body.username
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
  
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
  
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
  
        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400 // 24 hours
        });
  
          res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            accessToken: token
          });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  

module.exports= { login, register }