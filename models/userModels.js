const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name:{
    type:String,
    require:[true, '補上名字']
  },
  email:{
    type:String,
    select:false,
    require:[true, '補上email']
  }
})
const User = mongoose.model('user', schema);
module.exports = User;