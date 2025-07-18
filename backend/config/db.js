import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI); 
        console.log(`MongoDB is connected ${conn.connection.host}`)

    } catch (error) {
        console.error(error);
        process.exit(1); //Process code 1 means exit with failure, 0 means success
    }
};