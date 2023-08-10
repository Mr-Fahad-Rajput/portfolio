const express = require('express');
const router = express.Router();
const authenticate = require('./middleware/authenticate');
const Users = require('./Models/userSchema');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');



// Registration
router.post('/register', require('./routes/register'));

//Login
router.post('/login', require('./routes/login') );

// Message
router.post('/message', require('./routes/message'));

//Logout
router.get('/logout', require('./routes/logout'))

//authentication Middleware
router.get('/auth', authenticate, (req, res)=>{

})

router.get('/',(req,res) => {

    res.send("I Feel Good");
})


module.exports = router;