const express = require('express');
const Employee = require('../models/User')

const employeeRouter = express.Router();

employeeRouter.get('/list', (req, res) => {

  // Get the list of all employees

  Employee.find()
    .then(list=>{
      list.forEach(employee => {
        delete employee._doc.password
      })
      res.status(200).json({list, msg: 'List retrieved succesfully'});
    })
    .catch(err=>{
      res.status(500).json({err, msg:'Something went grong. List not retrieved'})
    });
});

module.exports = employeeRouter;