'use client';

import { Button, Navbar, NavbarBrand, NavbarContent } from "@heroui/react"
import Link from "next/link"
import { GiMatchTip } from "react-icons/gi"
import NavLink from "./NavLink"

const TopNav = () => {
    return (
        <Navbar
            maxWidth="xl"
            className="bg-gradient-to-r from-red-700 to-slate-500"
            classNames={{
                item: [
                    'text-xl',
                    'text-white',
                    'uppercase',
                    'data-[active=true]:text-black'
                ]
            }}
        >
            <NavbarBrand>
                <GiMatchTip size={40} />
                <div className="font-bold text-3xl flex-wrap">
                    <span className="text-black">Next</span>
                    <span className="text-gray-200">Match</span>
                </div>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavLink href='/members' label="Matches" />
                <NavLink href='/lists' label="Lists" />
                <NavLink href='/messages' label="Messages" />
            </NavbarContent>
            <NavbarContent justify="end">
                <Button as={Link} href="/auth/login" variant="bordered" className="text-white">Login</Button>
                <Button as={Link} href="/auth/register" variant="bordered" className="text-white">Register</Button>
            </NavbarContent>
        </Navbar>
    )
}
export default TopNav