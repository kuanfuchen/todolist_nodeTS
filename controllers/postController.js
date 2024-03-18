const Post = require('../models/poatModels');
const handleSuccess = require('../services/handleSuccess');
const handleError = require('../services/handleError');
const errorField = require('../services/errorField');
const postControllers = {
  getPostTodolistData:(req, res, next) => {
    const searchContent = req.query.search !== undefined && req.query.search !== null ? {'content':new RegExp(req.query.search)} :{};
  }
}