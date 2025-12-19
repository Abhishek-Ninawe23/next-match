import { ReactNode } from "react";
import { getMemberByUserId } from "@/app/actions/memberAction";
import { notFound } from "next/navigation";
import MemberLayoutClient from "./MemberLayoutClient";

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

type Props = {
    children: ReactNode;
    params: { userId: string };
};

const Layout = async ({ children, params }: { children: ReactNode, params: Promise<{ userId: string }> }) => {

    const { userId } = await params;
    const member = await getMemberByUserId(userId)
    if (!member) return notFound();

    return (
        <MemberLayoutClient member={member}>
            {children}
        </MemberLayoutClient>
    );
}
export default Layout