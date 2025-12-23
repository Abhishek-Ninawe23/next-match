"use client";

import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@heroui/react";
import Link from "next/link";
import { Session } from "next-auth";
import { signOutUser } from "@/app/actions/authActions";
import { fransformImageUrl } from "@/lib/util";

type Props = {
    userInfo: {
        name: string | null;
        image: string | null
    } | null;
};

export default function UserMenu({ userInfo }: Props) {
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name={userInfo?.name || "user avatar"}
                    size="sm"
                    src={fransformImageUrl(userInfo?.image) || "/images/user.png"}
                />
            </DropdownTrigger>

            <DropdownMenu variant="flat">
                <DropdownSection showDivider>
                    <DropdownItem isReadOnly as="span" className="h-14" key='signInAs'>
                        Signed in as {userInfo?.name}
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
