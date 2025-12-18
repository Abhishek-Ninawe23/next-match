"use client";

import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@heroui/react";
import Link from "next/link";
import { Session } from "next-auth";
import { signOutUser } from "@/app/actions/authActions";

type Props = {
    user: Session["user"];
};

export default function UserMenu({ user }: Props) {
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name={user?.name || "user avatar"}
                    size="sm"
                    src={user?.image || "/images/user.png"}
                />
            </DropdownTrigger>

            <DropdownMenu variant="flat">
                <DropdownSection showDivider>
                    <DropdownItem isReadOnly as="span" className="h-14" key='signInAs'>
                        Signed in as {user?.name}
                    </DropdownItem>
                </DropdownSection>

                <DropdownItem as={Link} href="/members/edit" key='EditProfile'>
                    Edit Profile
                </DropdownItem>

                <DropdownItem color="danger" onPress={() => signOutUser()} key='Logout'>
                    Log out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
