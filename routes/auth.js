const express = require('express');
const authRouter = express.Router();

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// GET & POST & PATCH routes

authRouter.post('/signup', (req, res)=>{
  // Password validation, encryption, user creation on data base and token creation
  if(req.body.password !== req.body.confirm) return res.status(500).json({msg: 'Password missmatch'});

  const salt = bcrypt.genSaltSync(256);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  req.body.password = hashedPassword;
  
  let user = {}
  Object.keys(req.body).forEach(key => {
    user[key] = req.body[key];
  });

  User.create(user)
  .then(user => {
    const token = jwt.sign({id: user._id}, process.env.SECRET);
    delete user._doc.password;
    res.status(200).json({msg: 'User created succesfully', user, token});
  })
  .catch(err => {
    console.log('User SingUp Error =====>', err);
    res.status(500).json({err, msg: 'User already registered'});
  });
});

