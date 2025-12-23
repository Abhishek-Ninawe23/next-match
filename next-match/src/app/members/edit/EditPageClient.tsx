'use client';
import { CardHeader, Divider, CardBody } from "@heroui/react"
import EditForm from "./EditForm"
import { Member } from "@prisma/client";
type Props = {
    member: Member,
}

const EditPageClient = ({ member }: Props) => {
    return (
        <>
            <CardHeader className="text-2xl font-semibold text-secondary">
                Edit  Profile
            </CardHeader>
            <Divider />
            <CardBody>
                <EditForm member={member} />
            </CardBody>
        </>
    )
}
export default EditPageClient