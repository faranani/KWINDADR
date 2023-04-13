const express = require('express')
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

console.log("fara")

// dotenv

dotenv.config(); 

// mongodb connection

connectDB();

 // reset object 
const app = express();

//middleware middle 
app.use(express.json());
app.use(morgan('dev'));

// routes 

app.use("/api/v1/user",require('./routes/UseRoutes'))


// port number
const port = process.env.PORT || 8080

app.listen(port,()=> {

    console.log(`server listening on port ${process.env.NODE_MODE} node on port ${process.env.PORT}`  .bgCyan.white  )
   
});
// listen 






