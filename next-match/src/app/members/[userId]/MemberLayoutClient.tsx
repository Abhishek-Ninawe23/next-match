'use client';

import { ReactNode } from "react";
import { Card } from "@heroui/react";
import MemberSidebar from "../MemberSidebar";
import { Member } from "@prisma/client";

type Props = {
    member: Member;
    children: ReactNode;
};

export default function MemberLayoutClient({ member, children }: Props) {
    return (
        <div className="grid grid-cols-12 gap-5 h-[80vh]" >
            <div className="col-span-3" >
                <MemberSidebar member={member} />
            </div>
            <div className="col-span-9" >
                <Card className="w-full mt-10 h-[80vh]" >
                    {children}
                </Card>
            </div>
        </div>
    );
}
