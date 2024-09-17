import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process?.env, {
    NEXT_PUBLIC_SUPABASE_URL: str(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: str(),
});
