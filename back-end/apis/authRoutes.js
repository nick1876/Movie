const express=require('express');
const router=express();
const bcrypt=require('bcrypt');
const User=require('../models/User');
const generateAuthToken = require('../jwtTokenGenerator');
 
//Sign Up
router.post('/register',async(req,res)=>{
    let user=req.body;
    console.log(user);
    let Email=await User.findOne({email:user.email});
    if(Email){
        res.send("Bhai mail pahle se ocuupied h ");
    }else{
        // console.log(user.password);
        user.password=await bcrypt.hash(user.password,10); //10 specifies the salt round
        // console.log(user.password); //Hashed password
        let dbUser=new User({
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            password:user.password
        })
       await dbUser.save();
       res.send("Hogaya Signup Poora");
    }
    // res.send("Sign Up karlo")
})


//login
router.post('/login',async(req,res)=>{
    let userFormData=req.body;
    console.log(userFormData);
    let userDbInfo=await User.findOne({email:userFormData.email})
    if(!userDbInfo){
        return res.send("Signup karke aao");
    }

    let validatePass=await bcrypt.compare(userFormData.password,userDbInfo.password) //returns true or false accordingly
    if(!validatePass){
        return res.send("Incorrect password");
    }


    //JWT
    const token=generateAuthToken(userDbInfo);
    console.log("Token is");
    console.log(token);
    res.status(200).json({token});

})



module.exports=router;