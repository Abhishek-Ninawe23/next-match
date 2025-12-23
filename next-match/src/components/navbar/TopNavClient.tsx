"use client";
//HeroUI uses createContext internally
//createContext ONLY works in Client Components
//hence need to create this as client component

import { Button, Navbar, NavbarBrand, NavbarContent } from "@heroui/react";
import Link from "next/link";
import { GiMatchTip } from "react-icons/gi";
import NavLink from "./NavLink";
import UserMenu from "./UserMenu";

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    session: any,
    userInfo: {
        image: string | null;
        name: string | null;
    }
}

export default function TopNavClient({ session, userInfo }: Props) {
    return (
        <Navbar
            maxWidth="xl"
            className="bg-gradient-to-r from-red-700 to-slate-500"
            classNames={{
                item: [
                    "text-xl",
                    "text-white",
                    "uppercase",
                    "data-[active=true]:text-black",
                ],
            }}
        >
            <NavbarBrand>
                <GiMatchTip size={40} />
                <Link href="/" className="font-bold text-3xl flex-wrap">
                    <span className="text-black">Next</span>
                    <span className="text-gray-200">Match</span>
                </Link>
            </NavbarBrand>

            <NavbarContent justify="center">
                <NavLink href="/members" label="Matches" />
                <NavLink href="/lists" label="Lists" />
                <NavLink href="/messages" label="Messages" />
            </NavbarContent>

            <NavbarContent justify="end">
                {
                    userInfo ? (
                        <UserMenu userInfo={userInfo} />
                    ) : (
                        <>
                            <Button as={Link} href="/login" variant="bordered" className="text-white">
                                Login
                            </Button>
                            <Button as={Link} href="/register" variant="bordered" className="text-white">
                                Register
                            </Button>
                        </>
                    )
                }
            </NavbarContent>
        </Navbar>
    );
}
