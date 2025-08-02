import mongoose, { mongo } from "mongoose";


const connectToDB = async() => {
    mongoose.set('strictQuery', true);
    console.log("connected")
    // if(isConnected){
    //     console.log("MongoDB is already connected");
    //     return;
    // }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "noktua",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
 
        // isConnected = true;
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.log(error);
    }
}

export default connectToDB;