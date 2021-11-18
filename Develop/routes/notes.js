const notes = require('express').Router();
const noteFile = require('../db/db.json')
const fs = require('fs')
const path = "../db/db.json"

notes.get('/', (req,res) => {
    res.send(noteFile)
})

notes.post('/', (req, res) => {
    console.log(req.body);
    fs.readFile(require('path').resolve(__dirname, '../db/db.json'), 'utf8', (err,data) => {
        if(err){
            console.log(err)
        } else {
            console.log(data)
            const parsedData = JSON.parse(data);
            console.log(parsedData);
            parsedData.push(req.body)
            fs.writeFile(require('path').resolve(__dirname, '../db/db.json'), JSON.stringify(parsedData, null, 4))
        }
    })
})

module.exports = notes;