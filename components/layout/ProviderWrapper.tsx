"use client";
import { useAuthState } from "@/lib/store";
import { useSession } from "next-auth/react";
import { PropsWithChildren, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner";

export default function ProviderWrapper({
    children,
    data,
}: PropsWithChildren & { data: any }) {
    const {
        setUser,
        setIsAuthenticated,
        setIsLoading,
        setBrowserInfo,
        isLoading,
        // browserInfo,
    } = useAuthState();

    const session = useSession();
    useEffect(() => {
        if (session.status === "authenticated") {
            setIsAuthenticated(true);
            setUser(session.data.user);
        } else if (session.status === "unauthenticated") {
            setUser(null);
            setIsAuthenticated(false);
        }

        if (session.status === "loading") {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }

        setBrowserInfo(data.browserInfo);
    }, [session, data]);

    return <LoadingSpinner isOpen={isLoading}>{children}</LoadingSpinner>;
}
