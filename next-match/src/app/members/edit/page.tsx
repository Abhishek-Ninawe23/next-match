import { getAuthUserId } from "@/app/actions/authActions"
import EditPageClient from "./EditPageClient"
import { getMemberByUserId } from "@/app/actions/memberAction";
import { notFound } from "next/navigation";


const MemberEditPage = async () => {

    const userId = await getAuthUserId();
    const member = await getMemberByUserId(userId);

    if (!member) return notFound();

    return (
        <EditPageClient member={member} />
    )
}
export default MemberEditPage