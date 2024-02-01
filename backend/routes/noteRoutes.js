const express = require('express');
const noteRouter = express.Router();
const zod = require('zod');
const Note = require('../models/noteModel.js');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config')

const noteBody=zod.object({
    heading:zod.string(),
    body:zod.string()
})

const noteUpdatedBody = zod.object({
    body:zod.string().optional(),
    header:zod.string().optional()
})

const addNote = (req, res) => {
    try{
        const {success} = noteBody.safeParse(req.body);
        if(!success){
            res.json({
                message:"Fill the form"
            })
        }
    
        // Extracting userId from the token
        const token = req.headers.authorization.split(' ')[1];
        console.log(token)
        const decodedToken = jwt.verify(token, JWT_SECRET);
        console.log(decodedToken)
        const userId = decodedToken.userId;

        const {header, body} = req.body;
    
        const noteCreated = noteRouter.create({
            userId,
            header,
            body
        })

        res.json({
            message:"Note created",
            noteCreated
        })
    }catch(error){
        res.json({
            message:error.message
        })
    }
}

const showNotes = (req, res) => {
    try{
        // Extracting the userId from the token which are present in header
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, SECRET_KEY);
        const userId = decodedToken.userId;

        // Now find all the notes in Note model 
        const notes = Note.find({userId});

        res.json({
            message:"Here are the all notes present of the given userId",
            notes
        })

    }catch(error){
        res.json({
            message:error.message
        })
    }
}

const updateNote = async(req, res) => {
    try{
        const {success} = noteUpdatedBody.safeParse(req.body);
        if(!success){
            res.json({
                message:"fields are required"
            })
        }

        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, SECRET_KEY);
        const userId = decodedToken.userId;

        const _id = req.headers._id;

        await Note.updateOne(req.body, {_id, userId})

        res.json({
            message:"Note has been updated"
        })

    }catch(error){
        res.json({
            message:error.message
        })
    }
}

const deleteNote = async(req, res) => {
    try{
        await Note.deleteOne({_id:req.headers._id})
        res.json({
            message:"This note has been deleted successfully"
        })
    }catch(error){
        res.json({
            message:error.message
        })
    }
}

noteRouter
    .route('/')
    .post(addNote)
    .get(showNotes)
    .put(updateNote)
    .delete(deleteNote)

module.exports = {
    noteRouter
}    

