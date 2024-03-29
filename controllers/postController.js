const Post = require('../models/poatModels.js');
const handleSuccess = require('../services/handleSuccess.js');
const handleError = require('../services/handleError.js');
const errorField = require('../services/errorField.js');
const postControllers = {
  getPostTodolistData:async(req, res, next) => {
    // const searchContent = req.query.search !== undefined && req.query.search !== null ? {'content':new RegExp(req.query.search)} :{};
    // const timeStamp = req.query.timeStamp === 'asc' ? 'createAt' : '-createAt';
    const data = await Post.find();
    handleSuccess(res, data);
  },
  addPostTodolistData:  handleError(async(req, res, next)=>{
    const data = req.body;
    if(data.name && data.content){
      const returnInfo = await Post.create(data);
      handleSuccess(res, returnInfo)
    }else{
      errorField(401, '資料不完全或是輸入錯誤')
    }
  }),
  // 65fba2165e9ac4dc806ee3ff
  deleteTodolistData: handleError(async(req,res,next)=>{
    const id = req.params.id;
    console.log(id);
    const handleDeleted = await Post.findByIdAndDelete(id);
    if(handleDeleted === null){
      errorField(402, '沒有這筆資料')
    }else{
      const successData = {
        message:'資料已經刪除'
      }
      handleSuccess(res, successData)
    }
  }),
  updatePosts: handleError(async(req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    if( id && data.name && data.content ){
      const fixData = await Post.findByIdAndUpdate(id, data, {new:true, runValidators:true });
      handleSuccess(res, fixData)
    }else{
      errorField(403, '缺少需要變更必須的資訊')
    }
  })
}
module.exports = postControllers;