const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: "No related user to this Log"
  },
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  logName: {
    type: String,
    enum: ['signup','login','consult' ],
    required: 'Log name most be defined'
  }
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Log', LogSchema);