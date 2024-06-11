import express from 'express'
import {login,signup,logout} from '../controlers/authcontrolers.js'
const router=express.Router();


//! Route for signup
router.post('/signup',/*function should be imported from controlers*/signup)

//! Route for login
router.post('/login',/*function should be imported from controlers*/login);

// ! Route for logout
router.post('/logout',/*function should be imported from controlers*/logout)


export default router;
