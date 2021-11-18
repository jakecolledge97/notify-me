const express = require('express');
const path = require('path');
//get api db
const api = require('./routes/index.js')

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api)
//uses the public folder
app.use(express.static('public'))

//gets index page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
//gets notes page
app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))

})

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);