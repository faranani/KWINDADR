const mongoose = require('mongoose');
const colors = require('colors');

const  connectDB= async() =>{

    try {

        await(mongoose.connect(process.env.MONGO_URL))

        console.log(`MongoDb Connected ${mongoose.connection.host}` .bgGreen.white)
        
    } catch (error) {

        console.log(`mongoose connect conecct ${error}`. bgRed.white)
        
    }
}

module.exports=connectDB