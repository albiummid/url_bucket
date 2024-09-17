"use client";
import { credentialSignIn, googleSignIn } from "@/utils/supabase/functions";
import { Button, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function LoginPage() {
    const [error, setError] = useState("");
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },
        validate: {
            email: (value) => {
                if (!value) return "Fill with valid email address.";
            },
            password: (value) => {
                if (!value) return "Password field can't be empty";
            },
        },
    });

    const handleCredentialSignIn = useCallback(
        async ({ email, password }: { email: string; password: string }) => {
            try {
                console.log(email, password);
                const { data, error } = await credentialSignIn(email, password);
                if (error) {
                    if (error.code === "invalid_credentials") {
                        setError("Wrong email or password .");
                    } else {
                        setError(error.message);
                    }
                }
                if (data) {
                    console.log(data);
                }
            } catch (err) {
                console.log(err);
            }
        },
        []
    );
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="w-full  md:grid my-auto  md:grid-cols-2 ">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <form
                        onSubmit={form.onSubmit((values) => {
                            handleCredentialSignIn(values);
                        })}
                        className="grid gap-2"
                    >
                        <TextInput
                            type="email"
                            withAsterisk
                            {...form.getInputProps("email")}
                            label="Email"
                            placeholder="m@example.com"
                        />
                        <TextInput
                            label="Password"
                            placeholder="**** *** ***"
                            type="password"
                            required
                            {...form.getInputProps("password")}
                        />

                        {error.length > 0 && (
                            <Text className="text-center" color="red" size="xs">
                                {error}
                            </Text>
                        )}
                        <Link
                            href="/auth/forgot-password"
                            className="ml-auto inline-block text-sm underline"
                        >
                            Forgot your password?
                        </Link>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                        <Button
                            onClick={handleGoogleSignIn}
                            variant="outline"
                            className="w-full"
                        >
                            Login with Google
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/auth/sign-up" className="underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted md:block bg-white my-auto ">
                <Image
                    src={require("@/assets/images/happy_freelancer.svg")}
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="  dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    );
}
