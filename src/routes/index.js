const express = require('express');
const router = express.Router();


//Auth and authentication
    //registration
router.post('/register',(req, res, next)=>{
    res.json({
        result: "register page",
        message: "Success",
        meta: null
    })
})
router.get('/verify-token/:token', (req, res, next)=>{

})
router.post('/set-password/:token', (req, res, next)=>{

})

    //login
router.post('/login', (req, res, next)=>{  //for checking if user is logged in or not

}, (req, res, next)=>{ //for login

});

router.get('/me',(req, res, next)=>{

}, (req, res, next)=>{

});
router.post('/logout', (req, res, next)=>{

}, (req, res, next)=>{

})


//routes

//route for classes
router.route('/classes')
.get((req, res, next)=>{

})
.post((req, res, next)=>{

})

router.route('/classes/:id')
.get((req, res, next)=>{

})
.put((req, res, next)=>{

})
.delete((req, res, next)=>{

})


module.exports = router;