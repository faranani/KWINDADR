const userModel= require('../models/usermodel')
const bcrypt = require('bcryptjs');

// login callback

const LoginController =async(res,req)=>{};

// register callback
const RegisterController = async(res,req)=>{

    try {
        
    } catch (error) {

        console.log(error);

        res.status(500).send({ success: false, message : ` Register  controller`})
        
    }
}

;

module.exports = {LoginController,RegisterController};