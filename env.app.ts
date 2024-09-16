import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env,{
    MONGO_DB_URI:str({default:'mongodb://127.0.0.1:27017/url_bucket'})
})