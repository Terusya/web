const express = require('express')
const path = require("path")
const fs = require("fs")
const app = express()
const port = 3000

//app.use(express.static("E:\\VS\\web\\static")); 
app.use(express.static(__dirname + '/static'));

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('*', (req, res) => {
    //res.sendFile("HTMLPage1.html", { root: path.join(__dirname, "static")})
    //res.sendFile("E:\\VS\\web\\static\\HTMLPage1.html")
    //res.sendFile("HTMLPage1.html". {"/static})
    //res.sendFile("E:\\VS\\web\\static\\HTMLPage1.html")
    res.sendFile("HTMLPage1.html", { root: path.join(__dirname, "./static") })
})

app.post("/reg-data", (req, res) => {
    console.log(">>>>>>>>>", req.body)
    fs.appendFile("data.txt", JSON.stringify(req.body) + "\n", (err) => {
        if (err) {
            res.status(500).send("User not added")
        } else {
            res.status(201).send("User added")
        }
    })
})


/*app.get('/hello', (req, res) => {
    res.send('Hello')
})

app.get('/hi', (req, res) => {
    res.status(200).send('Hi! Get')
})

app.post('/hi', (req, res) => {
    res.status(201).send('Hi! Post')
})

app.put('/hi', (req, res) => {
    res.status(202).send('Hi! Put')
}) */


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
