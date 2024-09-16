import mongoose, { Model, Schema } from "mongoose";

const modelName = "User";

export interface IUser {
    name:string;
    email:string;
    password:string
    oAuthInfo?:object
}

export interface IUserDocument extends IUser {
    createdAt:Date;
    updatedAt:Date;
} 


const schema ={
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:false,
        default:'',
        select:false,
    },
    oAuthInfo:{
        type:Object,
        required:true
    }
}

export default  mongoose.models[modelName] as Model<IUserDocument> || mongoose.model(modelName,new Schema<IUserDocument>(schema,{timestamps:true}));



