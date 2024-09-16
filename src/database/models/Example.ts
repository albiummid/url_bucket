import mongoose, { Schema } from "mongoose";

const modelName = "Example";

const schema = {
    
};


export default mongoose.models[modelName]?? mongoose.model(modelName,new Schema(schema,{
    timestamps:true
}))