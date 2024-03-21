const mongoose = require('mongoose');
// const dotenv = require('dotenv');
mongoose.connect('mongodb://127.0.0.1:27017/hotel')
  .then(() => console.log('database connect'))
  .catch(() => console.log('database disconnect'));