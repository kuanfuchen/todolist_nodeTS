const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  createdAt:{
    type:Date,
    default:Date.now
  },
  content:{
    type:String,
    require:[true, 'content缺失']
  },
  image:{
    type:String
  },
  name:{
    type:String,
    require:[true, '名稱']
  }
});
const Post = mongoose.model('post', schema);
module.exports = Post;
