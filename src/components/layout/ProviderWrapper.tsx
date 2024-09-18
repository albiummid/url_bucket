"use client";
import { useAuthState } from "@/lib/zustand";
import { supabaseClient } from "@/utils/supabase/client";
import { createTheme, MantineProvider } from "@mantine/core";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export default function ProviderWrapper({
    children,
    data,
}: PropsWithChildren & { data: any }) {
    const {
        setUser,
        setIsAuthenticated,
        setIsLoading,
        setBrowserInfo,
        // browserInfo,
    } = useAuthState();
    const router = useRouter();
    const theme = createTheme({
        /** Put your mantine theme override here */
    });
    useEffect(() => {
        supabaseClient.auth.onAuthStateChange(async (event, session) => {
            if (event === "SIGNED_IN") {
                setUser(session?.user.user_metadata);
                setIsAuthenticated(true);
                router.push("/dashboard");
            } else if (event === "SIGNED_OUT") {
                setUser(null);
                setIsAuthenticated(false);
            }
            setIsLoading(false);
            setBrowserInfo(data.browserInfo);
        });
    }, []);

    return (
        <MantineProvider theme={theme}>
            <div className="">{children}</div>
        </MantineProvider>
    );
}
