const router=require('express').Router();
const userManager=require('../manager/userManager')


router.post('/register', async(req,res)=>{
    const {email,password}=req.body;
    try {
       const result= await userManager.register({email,password});

        res.json(result)
    } catch (error) {
       res.status(400).json({
        message:error.message
       })
    }
});

router.post('/login',async (req,res)=>{
    try {
         const result=await userManager.login(req.body);
         res.json(result);
    } catch (error) {
        res.status(400).json({
            message:error.message
           })
    }
});

router.get('/logout', (req,res)=>{
    res.end()
})
module.exports=router;