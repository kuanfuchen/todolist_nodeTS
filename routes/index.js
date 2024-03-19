const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  postController.getPostTodolistData(req,res,next)
});
router.post('/', (req, res, next) => {
  postController.addPostTodolistData(req,res, next)
});
router.delete(':id',(req, res, next) => {
  postController.deleteTodolistData(req,res)
});
router.patch(':id', (req, res, next)=>{
  postController.updatePosts(req,res,next)
})
module.exports = router;
