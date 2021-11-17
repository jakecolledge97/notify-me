const express = require('express');
//get api db
const db = require('./db/db.json')

const PORT = 3001;

const app = express();

//uses the public folder
app.use(express.static('public'))

//gets index page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
//gets notes page
app.get('/notes.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))

})
//gets api info
app.get('/api/notes', (req,res) => res.json(db));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);