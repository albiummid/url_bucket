import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process?.env, {
    MONGO_DB_URI: str(),
    FIREBASE_API_KEY: str(),
    FIREBASE_AUTH_DOMAIN: str(),
    FIREBASE_PROJECT_ID: str(),
    FIREBASE_STORAGE_BUCKET: str(),
    FIREBASE_MESSAGING_SENDER_ID: str(),
    FIREBASE_APP_ID: str(),
});
