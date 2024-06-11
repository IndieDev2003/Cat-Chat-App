import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config();

const connectToMongoDB =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected To MongoDB Database")
    } catch (error) {
        console.log("Error Connnecting To MongoDB Database : ",error)
    }
}


export default connectToMongoDB;