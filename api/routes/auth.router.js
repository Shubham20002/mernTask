const express=require('express');
const router=express.Router();
const signincontroller=require('../controller/usercontroller')

router.get('/signin',signincontroller.signin);
router.post('/signup',signincontroller.signup);

module.exports=router;