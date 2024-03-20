const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('./connection/index.js');

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();
//
process.on('uncaughtException',err=>{
  console.log(err, 'uncaught exception');
  process.exit(1)
})
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', indexRouter);
// app.use('/users', usersRouter);
app.use((req,res)=>{
  res.status(404).json({
    status:'error',
    message:'404路徑錯誤'
  })
});
process.on('unhandledRejection',(err, promise)=>{
  console.log('rejection', promise, 'err', err)
})
module.exports = app;
