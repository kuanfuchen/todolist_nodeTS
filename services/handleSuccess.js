const handleSuccess = (res, data)=>{
  res.status(200).send({
    status:'Success',
    data
  })
  res.end();
};
module.exports = handleSuccess;