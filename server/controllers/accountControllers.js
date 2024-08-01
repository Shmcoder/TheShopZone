
const mongoose=require('mongoose');
const User = require('../models/user');
const jwt=require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const Seller = require('../models/Seller');



exports.createUser=async(req,res)=>{
    const data=req.body;
    const email=data.email;
    if(await User.findOne({email:email})){
        res.status(400).json({
            error:"User is already exists"
        })
    }
    // const person={
    //     name:data.displayName,
    //     email:data.email,
    //     password:


    // }
    
    try {
        let newUser=new User(data)


        newUser=await newUser.save();

        const accessToken=jwt.sign(data,process.env.SECKERT_ACCESS_TOKEN,{
            expiresIn:'1m'
        });

        const refreshToken=jwt.sign(data.process.env.REFRESH_ACCESS_TOKEN);

        res.status(200).json({message:'user Created successfully',accessToken:accessToken,refreshToken:refreshToken})
    } catch (error) {
        console.log(error)
    }
}


exports.createSeller=async(req,res)=>{
    console.log('hitted server')
    const {name,email,password,phone}=req.body.data;

    console.log(req.body)
    console.log(name)

    if(await User.findOne({email:email})){
        res.status(400).json({message:'Email id Already registered'});
    }
    else{

    const hashedPassword = await bcrypt.hash(password, 10);

    const data={
        name:name,
        email:email,
        password:hashedPassword,
        phone:phone
    }

    const seller=new Seller(data);
    try {
        await seller.save();
        res.status(201).json({message:'Account created Successfully'})
    } catch (error) {
        res.status(400).json({message:'Something error occoured '})
    }
}
    

}

exports.isPersonAvailable=async(req,res)=>{
    const email=req.body.mail;
    await Users.findOne({email:email}).then((user) => {
        res.send(true);
    }).catch((value) => {
        res.send(false);
    })
    
    
}