import { everyRequired } from "@/libs/utils/helper"
import User from "../models/User"

export const createUser = async({name,email,oAuthInfo}:{name:string,email:string,oAuthInfo:object})=>{
    await everyRequired({name,email,oAuthInfo})
    return await User.create({
        name,
        email,
        oAuthInfo,
    })    
}