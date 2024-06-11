import express from 'express'
const app=express();
import dotenv from 'dotenv'

import authRoutes from "./routes/authroutes.js"
import connectToMongoDB from './db/connectMongoDB.js';

dotenv.config();
const PORT=process.env.PORT || 5000;

app.use(express.json());

app.get('/',(req,res)=>{
    //? root routes http://localhost:5000
    res.send("Hello World");
});

app.use('/api/auth',authRoutes)


app.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`App Server Running on Port ${PORT}`)
});