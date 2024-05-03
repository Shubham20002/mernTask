const express=require('express');
const mongoose = require('mongoose');
const port=4000;
// const User=require('../api/model/user.model.js');
const authrouter=require('../api/routes/auth.router.js');

const app=express();
app.use(express.urlencoded());
app.use(express.json());
app.listen(port,(err)=>{
    if(err){
        console.log("error while server starting");
    }
    else{
        console.log("server start on port no:",port);
    }
});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://shubham992284:shubham@cluster0.mwirbhd.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use('/api',authrouter);

