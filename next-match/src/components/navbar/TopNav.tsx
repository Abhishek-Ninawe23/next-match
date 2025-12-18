import { auth } from "@/auth";
import TopNavClient from "./TopNavClient";

export default async function TopNavServer() {
    const session = await auth();
    return <TopNavClient session={session} />;
}
