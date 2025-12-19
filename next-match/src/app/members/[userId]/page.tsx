import { getMemberByUserId } from "@/app/actions/memberAction";
import { notFound } from "next/navigation";
import MemberDescription from "./MemberDescription";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type Props = {
    params: { userId: string };
};

const MemberDetailedPage = async ({ params }: Props) => {
    const { userId } = await params;
    const member = await getMemberByUserId(userId);

    if (!member) return notFound();

    return <MemberDescription member={member} />;
}

export default MemberDetailedPage