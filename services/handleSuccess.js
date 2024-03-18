const handleSuccess = (res, data)=>{
  res.status(200).send({
    status:'Success',
    data
  })
};
module.exports = handleSuccess;