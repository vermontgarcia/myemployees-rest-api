const express = require('express');
const logRouter = express.Router();

const Log = require('../models/Log');


logRouter.post('/log', (req, res) => {

  console.log(req.body);

  Log.create(req.body)
    .then(log =>{
      console.log(log);
      res.status(200).json({msg: 'Log created succesfully', log});
    })
    .catch(err => {
      res.status(500).json({err, msg:'Log not recorded'});
    });
});

module.exports = logRouter;