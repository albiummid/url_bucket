"use client";
import Image from "next/image";
// import logo_dark from '@/assets/images/logo_dark.svg'
import logo_light from "@/assets/images/logo_light.svg";
import { logout } from "@/lib/firebase-functions";
import { useAuthState } from "@/lib/zustand";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Button } from "../ui/button";
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
                                    logout();
                                }
                            });
                        }}
                        variant={"destructive"}
                    >
                        Logged in as {String(user?.displayName)}
                    </Button>
                ) : (
                    <Button
                        onClick={() => {
                            router.push("/auth/login");
                        }}
                        variant={"destructive"}
                    >
                        Login
                    </Button>
                )}
            </div>
        </Container>
    );
}
