const userModel= require('../models/usermodel')
const bcrypt = require('bcryptjs');

// login callback

const LoginController =async(res,req)=>{};

// register callback
const RegisterController = async(res,req)=>{

    try {

         const exisitingUser = await  userModel.findOne({email:req.body.email});

         if(exisitingUser){

            return res.status(200).send({message:`user  already exists` , success:false})
         }

         password =req.body.password;
        
    } catch (error) {

        console.log(error);

        res.status(500).send({ success: false, message : ` Register  controller ${error.message}` });
        
    }
}

;

module.exports = {LoginController,RegisterController};