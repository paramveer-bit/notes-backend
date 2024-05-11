const Note = require('../models/note')

const Insert = async (req,res)=>{
    // Get the sent in data from request body
    const title = req.body.title
    const body = req.body.body

    // Create a note
    const note = await Note.create({
        title:title,
        body : body
    })

    // Respond with the new note 
    res.json({note : note})
}

const getAll = async (req,res)=>{
    //Find notes
    const notes = await Note.find();
    //Sending notes
    res.json({notes : notes});
}

const getById = async (req,res)=>{
    //Get id 
    const id = req.params.id;
    //Find Note using Id
    const notes = await Note.findById(id);
    // Send response
    res.json({notes : notes})
}

const update = async (req,res)=>{
    //get Id
    const id = req.params.id
    // Get the data to be updated
    const title = req.body.title
    const body = req.body.body

    //Find an update
    await Note.findByIdAndUpdate(id,{
        title : title,
        body : body
    });

    // Find upadated
    const note = await Note.findById(id)
    //response
    res.json({note : note})
}

const deleteId = async (req,res)=>{
    //Getting Id 
    const id = req.params.id
    // Delete id
    await Note.deleteOne({_id:id})

    //Response
    res.json({success: "Response Deleted"})

}


module.exports = {Insert,getAll,getById,update,deleteId}