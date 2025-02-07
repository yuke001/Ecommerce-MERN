import mongoose from 'mongoose';

async function db() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDB : ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1); //process  1 code means exit with failure, 0 means success
    }
    
}
export default db;