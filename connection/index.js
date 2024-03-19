const mongoose = require('mongoose');
// const dotenv = require('dotenv');
mongoose.connect()
  .then(() => console.log('database connect'))
  .catch(() => console.log('database disconnect'));