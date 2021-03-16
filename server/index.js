const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();

app.use(cors())
app.use(bodyParser.json())

// ROUTES
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
  res.send(`Homepage`)
})

// connect toDB
mongoose.connect(
  process.env.DB_CONNECTION
  , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, }
  , () => console.log('connect to DB!'))

const PORT = 5000;
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});