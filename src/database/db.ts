import mongoose from "mongoose";
import { env } from "../../env.app";

let connection:{isConnected?:number} = {};

async function dbConnect() {
    if(connection.isConnected){
        return;
    }
    try{
        const db = await mongoose.connect(env.NEXT_PUBLIC_MONGO_DB_URI);
        connection={isConnected : db.connections[0].readyState}
        console.log(`⚡ DB_CONNECTED`)
    }catch(err){
        console.log(`DB_ERROR: Connection couldn't established.\nDetails: ${JSON.stringify(err)}`)
    }
}

export default dbConnect

export interface Timestamp {
    createdAt:Date;
    updatedAt:Date;
}

