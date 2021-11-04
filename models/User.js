const mongoose=require('mongoose');
const userSchema=new mongoose.Schema(
    {
        name:{type:String,required:true,unique:true},
        username:{type:String,required:true,unique:true},
        password:{type:String,required:true,unmodifiable: true},
    },
    {
        timestamps:true,
    }
)
module.exports=mongoose.model("User",userSchema);