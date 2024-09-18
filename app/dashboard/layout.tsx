"use client";
import { icons } from "@/assets";
import { useAuthState } from "@/lib/store";
import { Drawer, Flex, NavLink, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren, useCallback } from "react";
import { MdMenuOpen } from "react-icons/md";

const dashlinks = [
    {
        label: "Analytics",
        icon: icons.analytic,
        href: "/dashboard/analytics",
    },
    {
        label: "Admin",
        icon: icons.admin,
        href: "/dashboard/admin",
        children: [
            {
                label: "overview",
                icon: icons.ads,
                href: "/dashboard/admin/overview",
            },
            {
                label: "Ads",
                icon: icons.ads,
                href: "/dashboard/admin/ads",
            },
            {
                label: "User Management",
                icon: icons.users,
                href: "/dashboard/admin/user-management",
            },
        ],
    },
    {
        label: "Bucket",
        icon: icons.connection,
        href: "/dashboard/bucket",
    },
];

export default function LayoutPage(props: PropsWithChildren) {
    const { isLoading, isAuthenticated } = useAuthState();
    const [opened, { toggle }] = useDisclosure();
    const router = useRouter();
    const pathname = usePathname();

    // useEffect(() => {
    //     if (isLoading) return;
    //     if (!isAuthenticated) {
    //         Swal.fire({
    //             title: "Unauthorize access !",
    //             text: "You have entered restricted route.\nNow you will be redirected to home page",
    //             icon: "warning",
    //             showConfirmButton: false,
    //             timer: 1500,
    //         }).then(() => {
    //             router.replace("/");
    //         });
    //     }
    // }, [isLoading, isAuthenticated, router]);

    const renderList = useCallback(
        (list) => {
            return list.map((x) => {
                if (x.children) {
                    return (
                        <NavLink
                            key={x.href}
                            label={x.label}
                            active={pathname.includes(x.href)}
                            leftSection={
                                <Image
                                    width={x.icon.width}
                                    height={x.icon.height}
                                    src={x.icon.src}
                                    alt=""
                                    className="h-6 w-6"
                                />
                            }
                        >
                            {renderList(x.children)}
                        </NavLink>
                    );
                }
                return (
                    <NavLink
                        key={x.href}
                        onClick={() => {
                            router.push(x.href);
                        }}
                        label={x.label}
                        active={pathname.includes(x.href)}
                        leftSection={
                            <Image
                                width={x.icon.width}
                                height={x.icon.height}
                                src={x.icon.src}
                                alt=""
                                className="h-6 w-6"
                            />
                        }
                    />
                );
            });
        },
        [pathname, router]
    );

    if (isLoading) return <div>Loading....</div>;
    if (!isLoading && !isAuthenticated) return null;

    return (
        <Flex className="flex-col md:flex-row">
            <Flex gap={20} w={250} className=" p-2 md:hidden">
                {/* MOBILE DEVICES */}
                <MdMenuOpen
                    onClick={toggle}
                    size={40}
                    className=" border cursor-pointer active:opacity-50  rounded-lg p-2"
                />
                <Text className="text-center select-none font-bold text-xl py-2">
                    Dashboard
                </Text>
                <Drawer opened={opened} onClose={toggle}>
                    <Stack className="h-[80vh]">{renderList(dashlinks)}</Stack>
                </Drawer>
            </Flex>
            <Stack w={250} className=" hidden md:block ">
                <Text className="text-center font-bold text-xl py-2">
                    Dashboard
                </Text>
                <Stack className="h-[80vh]">{renderList(dashlinks)}</Stack>
            </Stack>

            <Stack flex={1} className="border min-h-screen m-2 p-5 rounded-lg">
                {props.children}
            </Stack>
        </Flex>
    );
}
