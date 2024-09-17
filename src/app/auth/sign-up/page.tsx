"use client";
import Container from "@/components/layout/Container";
import { credentialSignUp, googleSignIn } from "@/utils/supabase/functions";
import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";

export default function LoginForm() {
    const form = useForm({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validate: {
            firstName: (v) => !v && "First name is required !",
            email: (v) => !v && "Email is required !",
            password: (v) => !v && "Password is required !",
            confirmPassword: (v, all) =>
                (!v || all.password !== v) &&
                "Confirm password doesn't match with passowrd",
        },
    });

    const handleCredentialSignUp = form.onSubmit((v) => {
        credentialSignUp(v);
    });
    async function handleGoogleSignUp() {
        await googleSignIn();
    }

    return (
        <Container className="mx-auto max-w-sm">
            <form onSubmit={handleCredentialSignUp} className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <TextInput
                        withAsterisk
                        label="First Name"
                        placeholder="Muhammad"
                        {...form.getInputProps("firstName")}
                    />
                    <TextInput
                        label="Last Name "
                        placeholder="Tanvir"
                        {...form.getInputProps("lastName")}
                    />
                </div>
                <div className="grid gap-2">
                    <TextInput
                        label="Email"
                        type="email"
                        placeholder="muhammad.tanvir@gmail.com"
                        {...form.getInputProps("email")}
                    />
                    <TextInput
                        label="Email"
                        type={"password"}
                        placeholder="*** **** ***"
                        {...form.getInputProps("password")}
                    />
                    <Button type="submit" className="w-full">
                        Create an account
                    </Button>
                    <Button
                        onClick={handleGoogleSignUp}
                        variant="outline"
                        className="w-full"
                    >
                        Sign up with Google
                    </Button>
                </div>
            </form>
            <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="#" className="underline">
                    Sign in
                </Link>
            </div>
        </Container>
    );
}
