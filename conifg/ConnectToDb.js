const mongoose = require('mongoose')

async function ConnectToDb(){
    try{
        await mongoose.connect("mongodb+srv://coderbuddy01:Pg100904@cluster0.dpplfgk.mongodb.net/")
        console.log("Connected To Db")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = ConnectToDb