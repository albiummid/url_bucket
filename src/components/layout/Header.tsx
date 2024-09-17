"use client";
import Image from "next/image";
// import logo_dark from '@/assets/images/logo_dark.svg'
import logo_light from "@/assets/images/logo_light.svg";
import { useAuthState } from "@/lib/zustand";
import { supabaseClient } from "@/utils/supabase/client";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Container from "./Container";
export default function Header() {
    const { isAuthenticated, user } = useAuthState();
    const router = useRouter();

    return (
        <Container className="">
            <div className="flex flex-row items-center justify-between">
                <Image
                    height={logo_light.height}
                    width={logo_light.width}
                    className=" w-40 md:w-60 h-full"
                    src={logo_light.src}
                    alt="logo-light"
                />
                {isAuthenticated ? (
                    <Button
                        onClick={() => {
                            Swal.fire({
                                text: "Do you want to logout ?",
                                icon: "question",
                                confirmButtonText: "Logout",
                                cancelButtonText: "No",
                                showCancelButton: true,
                            }).then((d) => {
                                if (d.isConfirmed) {
                                    router.push("/");
                                    supabaseClient.auth.signOut();
                                }
                            });
                        }}
                        // variant={"outline"}
                        color="red"
                        leftSection={
                            <Image
                                height={30}
                                width={30}
                                src={user?.picture}
                                alt=""
                                className="rounded-full"
                            />
                        }
                    >
                        Logout
                    </Button>
                ) : (
                    <Button
                        onClick={() => {
                            router.push("/auth/sign-in");
                        }}
                        variant={"outline"}
                        color="red"
                    >
                        Login
                    </Button>
                )}
            </div>
        </Container>
    );
}
