import { auth } from "@/auth";
import TopNavClient from "./TopNavClient";
import { getUserInfoForNav } from "@/app/actions/userActions";

export default async function TopNavServer() {
    const session = await auth();
    const userInfo = session?.user && await getUserInfoForNav()

    if (!userInfo) return null

    return <TopNavClient session={session} userInfo={userInfo} />;
}
