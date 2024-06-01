import mongoose, { mongo } from "mongoose";

const MONGODB_URI="mongodb+srv://farisubuntu:Isaisa123@cluster0.58vavxj.mongodb.net/mydata?retryWrites=true&w=majority&appName=Cluster0"

const connection={};

export const connectMongoDB = async () => {

    try {
        if(connection.isConnected) return;
        const db=await mongoose.connect(MONGODB_URI);
        connection.isConnected=db.connections[0].readyState;
        console.log("Connected to mongodb");
        

    } catch(error) {
        console.log("Error connecting to mongodb: ", error)
    }
}