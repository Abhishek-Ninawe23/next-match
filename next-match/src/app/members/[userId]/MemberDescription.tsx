'use client';

import { CardBody, CardHeader, Divider } from "@heroui/react";
import { Member } from "@prisma/client";

type Props = {
    member: Member;
};

export default function MemberProfileClient({ member }: Props) {
    return (
        <>
            <CardHeader className="text-2xl font-semibold text-secondary">
                Profile
            </CardHeader>
            <Divider />
            <CardBody>
                {member.description}
            </CardBody>
        </>
    );
}
