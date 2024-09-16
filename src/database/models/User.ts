import mongoose, { Schema } from "mongoose";

const modelName = "User";

const schema = {
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
};


export default mongoose.models[modelName]?? mongoose.model(modelName,new Schema(schema,{
    timestamps:true
}))