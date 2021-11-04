const User=require('../models/User');
const cryptoJS=require('crypto-js');

// Add Admin or User
const addUser= async (req,res)=>
{    
   const newUser=new User(
       {
        name:req.body.name,
        username:req.body.username,
        password:cryptoJS.AES.encrypt(req.body.password, process.env.crypto_js_key),
       }
   )
   try {
       
       const savedUser=await newUser.save();
       res.status(200).json({savedUser})
       } catch (error) {
       res.status(500).json(error);
   }
  
}

//  View User
const viewUser=async (req,res)=>
{
        try {
            const foundedUser= await User.findOne({name:req.body.name});
             const {password,...others}=foundedUser._doc;
                res.status(200).json(others);
         }

catch (error) {
        console.log(error)
       res.status(500).json(error); 
    }      
}

// 

// Update User: please passname in parameter
const updateUser=async (req,res)=>
{
 User.updateOne({name:req.params.name},{$set:req.body},(err,doc)=>{
     if(!err)
     res.status(200).json(doc);
 });
 }
 
// Delete User : please pass name in json object
const deleteUser=async (req,res)=>
{
    try {
        User.findOneAndDelete({name:req.body.name},(err,data)=>
        {
            res.status(200).json(" Deleted Sucessfully!");

        })
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports=({addUser,updateUser,viewUser,deleteUser})