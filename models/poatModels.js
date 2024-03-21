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
},{
  versionKey:0
});
const Post = mongoose.model('Post', schema);
module.exports = Post;
// const mongoose = require('mongoose');
// const schema = new mongoose.Schema({
//   name:{
//     type:String,
//     required:[true,'name未填寫']
//   },
//   content:{
//     type:String,
//     required:[true,'content未填寫']
//   },
//   tags:[
//     {
//       type:String,
//       required:[true,'需要tag']
//     }
//   ],
//   type:{
//     type:String,
//     required:[true,'type未填寫']
//   },
//   likes:{
//     type:Number,
//     default:0
//   },
//   comments:{
//     type:Number,
//     default:0
//   }
// },
// {
//   versionKey:0
// });
// const Post = mongoose.model('Post',schema);
// module.exports = Post;
