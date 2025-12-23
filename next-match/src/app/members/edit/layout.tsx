import { ReactNode } from "react";
import { getMemberByUserId } from "@/app/actions/memberAction";
import { notFound } from "next/navigation";
import MemberLayoutClient from "../[userId]/MemberLayoutClient";
import { getAuthUserId } from "@/app/actions/authActions";

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

type Props = {
    children: ReactNode;
};

const Layout = async ({ children }: Props) => {

    const userId = await getAuthUserId();
    const member = await getMemberByUserId(userId)
    if (!member) return notFound();

    const basePath = `/members/edit`
    const navLinks = [
        { name: 'Edit Profile', href: `${basePath}` },
        { name: 'Update Photos', href: `${basePath}/photos` }
    ]

    return (
        <MemberLayoutClient member={member} navLinks={navLinks}>
            {children}
        </MemberLayoutClient>
    );
}

export default Layout