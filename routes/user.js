const router=require('express').Router();
const controllers = require('../controllers/controller');
router.post("/",controllers.addUser)
router.put("/:name",controllers.updateUser);
router.get("/",controllers.viewUser);
router.delete("/",controllers.deleteUser);
router.get("/test",(req,res)=>
{
    const obj={
        name:"Bhavnesh",
        fname:"Bhupendra sharma",
        mname:"PRemvati"
    }
    const {name,...others}=obj;
    res.send(others);
})

module.exports=router;