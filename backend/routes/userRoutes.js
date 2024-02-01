const express = require('express');
const userRouter = express.Router();
const zod = require('zod');
const { User } = require('../models/userModel');
const { SECRET_KEY } = require('../config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const signupBody = zod.object({
    name:zod.string(),
    userName:zod.string(),
    email:zod.string().email(),
    password:zod.string()
})

const signinBody = zod.object({
    email:zod.string().email(),
    password:zod.string()
})

const postSignup = async(req,res) => {
    try{
        const {success} = await signupBody.safeParse(req.body);
        if(!success){
            res.json({
                message:"Credential filling by you are incorrect!"
            })
        }
        const {name, userName, email, password} = req.body;
        // console.log(1);
        const existingUser = await User.findOne({email, userName});
        if(existingUser){
            res.json({
                message:"User with this credential are already exist!"
            })
        }
        // console.log(2);

        // Hashing the password using bcrypt
        const hashPassword = await bcrypt.hashSync(password, 10);

        const user = await User.create({
            name, 
            userName,
            email,
            password:hashPassword
        })

        const userId = user._id.toString();
        const token = jwt.sign({userId, name, userName, email}, SECRET_KEY);

        res.json({
            message:"User will added to the databases!",
            token:token,
            _id:user._id
        })

    }catch(error){
        res.json({
            message:error.message
        })
    }
}

const postSignin = async (req, res)=>{
    try{
        const {success} = signinBody.safeParse(req.body);
        if(!success){
            res.json({
                message:"Credential are wrong!"
            })
        }
    
        const user = await User.findOne({email:req.body.email});
    
        if(!user){
            res.json({
                message:"User with this email does not exist!"
            })
        }
        // console.log('vin1')
        const checkPassword = await bcrypt.compareSync(req.body.password,user.password);

        // console.log('vin1')
        if(!checkPassword){
            res.json({
                message:"Your password is wrong!"
            })
        }
        // console.log('vin1')

        const userId = user._id;
        const userName = user.userName;
        const name = user.name;
        const email = user.email;
        token = jwt.sign({userId, userName, name, email}, SECRET_KEY);

        res.json({
            message:"User is login",
            token:token,
            _id:user._id
        })
        
    }catch(error){
        res.json({
            message:error.message
        })
    }
}


userRouter
    .route('/signup')
    .post(postSignup)
userRouter
    .route('/signin')
    .post(postSignin)

userRouter
    .route('/checkUser')
    .post(checkUser)
   
module.exports={
    userRouter
}    
