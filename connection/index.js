const mongoose = require('mongoose');
// const dotenv = require('dotenv');
mongoose.connect('mongodb://localhost:27017/hotel')
  .then(() => console.log('database connect'))
  .catch(() => console.log('database disconnect'));