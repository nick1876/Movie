const express=require('express');
const Movies = require('../models/Movie');
const router=express.Router();

router.get('/allMovies',async (req,res)=>{
    try{
        let allMovies=await Movies.find({});
        res.status(200).json(allMovies);
    }
    catch(e){
        res.status(400).json({msg:"Something went wrong"});
    }
})

router.post('/addMovies' , async(req,res)=>{
    let {author,text,name} = req.body;
    await Movies.create({author,text,name});
    res.status(201).json({msg:"new movies created successfully"})
})


router.get('/movies/:id',async(req,res)=>{
    let {id}=req.params;
    const movie=await Movies.findById(id);
    res.status(200).json(movie);
})

router.patch('/movies/:id',async(req,res)=>{
    let {id}=req.params;
    let{author,text,name}=req.body;
    await Movies.findByIdAndUpdate( id , {author,text,name});
    res.status(200).json({msg:"Movie edited successfully"});
})


router.delete('/delete/:id',async(req,res)=>{
    let{id}=req.params;
    await Movies.findByIdAndDelete(id);
    let allMovies=await Movies.find({});
    res.status(200).json(allMovies);
})
module.exports=router;
