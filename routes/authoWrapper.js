const router = require('express').Router();

router.post('/register',(req,res)=>{
res.send('Your have registered successfully');
})

module.exports = router;