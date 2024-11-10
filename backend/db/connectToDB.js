import mongoose from 'mongoose';

const connectToMongoDB = async (req , res) =>{
    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URI) ;
        console.log(`Connected to MongoDB : ${conn.connection.host} : ${conn.connection.port}`);
        
    } catch (error) {
        console.error("Error connecting MongoDB : " ,error.message);
    }
}

export default connectToMongoDB ;