const express = require('express')
const fs = require('fs')
const port = 3000
const app = express()

const boxFile = './boxes.json'
const boxes = require(boxFile)

app.get('/boxes', (req, res) => {
    res.send(boxes)
});

app.get('/boxes/:ID', (req, res) => {
    let boxID = parseInt(req.params.ID)
    let foundBox = boxes.find((box) => box.id === boxID )

    if (!foundBox) return res.status(404).send('The requested box could not be found!')
    return res.send(foundBox)
})

app.post('/boxes', (req, res) => {
    let newList = boxes
    let newBox = {"id": boxes.length + 1, "color" : "pink", "size" : "tiny", "contains" : "Nocco"}
    newList.push(newBox)

    fs.writeFile(boxFile, JSON.stringify(newList), function writeJSON(err) {
        if (err) return console.error(err)
        console.log('test')
    })
    return res.send('La till ny box ' + JSON.stringify(newBox) )
})

 
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

app.put('/boxes/:ID', (req, res) => {
    let boxID = parseInt(req.params.ID)
    let foundBox = boxes.find((box) => boxes.id === BoxID)

    if(!foundBox) return res.status(404).send('The requested box could not be found!')

    let updatedBox = {"id": boxID, "color" : "idk green or something", "size" : "prob tiny", "contains" : "Nocco"}


})

// app.post

// server.delete