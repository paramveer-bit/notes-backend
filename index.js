// Env variables
require("dotenv").config();

// Import
const express = require('express')
const ConnectToDb = require('./conifg/ConnectToDb')
const Note = require('./models/note')
const controll = require('./COntrolls/notesControl')
const cors = require('cors')

// Create an app
const app = express();

// Connect Database
ConnectToDb();

//Config. Express as express can't responde in json
app.use(express.json())
app.use(cors())

//Routing 
app.get('/',(req,res)=>{
    res.json({hello : "World"})
});


app.post('/notes',controll.Insert)
app.get('/notes', controll.getAll)
app.get('/notes/:id', controll.getById)
app.put('/notes/:id', controll.update)
app.delete('/notes/:id',controll.deleteId)


//Start
app.listen(process.env.PORT);