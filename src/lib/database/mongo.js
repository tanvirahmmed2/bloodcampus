import mongoose from "mongoose";
import { MONGO_URL } from "./secret";

const connectDB=async()=>{
    
        try {
            if(!MONGO_URL) return console.log('NO URL FOUND')
                await mongoose.connect(MONGO_URL)
            console.log('DATABASE IS CONNECTED')
        } catch (error) {
            console.log(error)
        }
}

export default connectDB