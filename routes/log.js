const express = require('express');
const logRouter = express.Router();

const Log = require('../models/Log');


logRouter.post('/log', (req, res) => {
  Log.create(req.body)
    .then(log =>{
      res.status(200).json({msg: 'Log created succesfully', log});
    })
    .catch(err => {
      res.status(500).json({err, msg:'Log not recorded'});
    });
});

logRouter.get('/log', (req, res) => {

  Log.find()
    .populate('userId', 'name')
    .populate('employeeId', 'name')
    .sort({created_at: 1})
    .then(logs => {
      res.status(200).json({logs, msg: 'Log retrieved succesfully'});
    })
    .catch(err => {
      res.status(500).json({err, msg:'Something went wrong. Log not retrieved'});
    });
})

module.exports = logRouter;