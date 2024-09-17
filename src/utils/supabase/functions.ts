import { supabaseClient } from "./client";

export const googleSignIn = async () => {
    return await supabaseClient.auth.signInWithOAuth({
        provider: "google",
        options: {
            queryParams: {
                access_type: "offline",
                prompt: "consent",
            },
        },
    });
};

export const credentialSignIn = async (email: string, password: string) => {
    return await supabaseClient.auth.signInWithPassword({ email, password });
};

export const userSignOut = async () => {
    await supabaseClient.auth.signOut();
};

export const credentialSignUp = async ({
    email,
    password,
    firstName,
    lastName,
}) => {
    return await supabaseClient.auth.signUp({
        email,
        password,
        options: {
            data: {
                firstName,
                lastName,
                name: firstName + " " + lastName,
                photo: "",
            },
        },
    });
};
