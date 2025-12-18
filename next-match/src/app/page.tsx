import { auth } from "@/auth";
import HomeClient from "./HomeClient";

export default async function Home() {
  const session = await auth(); // ✅ server-safe
  return <HomeClient session={session} />;
}
