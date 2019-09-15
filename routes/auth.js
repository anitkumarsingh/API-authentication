const router = require('express').Router();

router.post('/register',(req,res)=>{
    res.send('Registered successfully');
})


module.exports = router;