const errorField = ((resStatus, errMsg, next)=>{
  const err = new Error(errMsg);
  err.status=resStatus;
  err.isOperational = true;
  next(err)
})
module.exports = errorField;