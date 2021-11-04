const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();
app.use(express.json());
const userRoute=require('./routes/user');
mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log('connected Sucessfully!!');
})
.catch((err)=>
{
    console.log('err');
})
app.get("/",(req,res)=>
{
    res.send("Server is working!")
})

app.use("/api/v1",userRoute);

app.listen(3000,(err)=>
{
    console.log('Server is listening on Port 3000');
});
