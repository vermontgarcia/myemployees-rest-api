const express = require('express');
const logRouter = express.Router();

const Log = require('../models/Log');


logRouter.post('/log', (req, res) => {
  Log.create(req.body)
    .then(log =>{
      res.status(200).json({msg: 'Log created succesfully', log});
    })
    .catch(err => {
      res.status(500).json({err, msg:'Log not registered'});
    });
});

logRouter.get('/log', (req, res) => {

  let page = parseInt(req.body.page)
  let size = parseInt(req.body.size)
  let query = {};
  let totalPages = 1;
  
  if(page < 0 || page === 0) {
    return res.status(500).json({msg: 'Invalid page number, should start from page 1'});
  }
  query.skip = size * (page - 1)
  query.limit = size

  Log.countDocuments()
    .then(total => {
      totalPages = Math.ceil(total / size)

      Log.find({},{},query)
      .populate('userId', 'name position department profilePicture')
      .populate('employeeId', 'name position department profilePicture')
      .sort({created_at: 1})
      .then(logs => {
        res.status(200).json({logs, pages: totalPages, msg: 'Log retrieved succesfully'});
      })
      .catch(err => {
        res.status(500).json({err, msg:'Something went wrong. Log not retrieved'});
      });
    }); 
})

module.exports = logRouter;