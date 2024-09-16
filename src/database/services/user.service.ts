import { everyRequired } from "@/libs/utils/helper"
import User from "../models/User"
import Bucket from "../models/Bucket"

export const createUser = async({name,email,oAuthInfo}:{name:string,email:string,oAuthInfo:object})=>{
    await everyRequired({name,email,oAuthInfo})
    const user =  await User.create({
        name,
        email,
        oAuthInfo,
    })    
    await Bucket.create({
        name:'Default',
        userId:user._id,
    })

    return user
}


export const getUserById = async(id:string)=>{
    return await User.findById(id);
}
