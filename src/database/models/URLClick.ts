import mongoose, { Schema } from "mongoose";

const modelName = "URLClick";

const schema = {
    bucketURLId:{
        type:mongoose.Schema.ObjectId,
        ref:"BucketURL",
        required:true
    },
    clickedBy:{
        type:Object,
        required:true
    }
};


export default mongoose.models[modelName]?? mongoose.model(modelName,new Schema(schema,{
    timestamps:true
}))