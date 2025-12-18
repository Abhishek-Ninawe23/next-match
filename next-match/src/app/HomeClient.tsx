"use client";

import { Button } from "@heroui/react";
import { FaRegSmile } from "react-icons/fa";
import { signOut } from "next-auth/react";

export default function HomeClient({ session }: { session: any }) {
    return (
        <div>
            <h1 className="text-3xl">Hello app!</h1>

            <h3 className="text-2xl pt-5 font-semibold">User session data:</h3>
            {session ? (
                <>
                    <pre>{JSON.stringify(session, null, 2)}</pre>
                    <Button
                        onPress={() => signOut()}
                        color="primary"
                        variant="bordered"
                        startContent={<FaRegSmile size={20} />}
                    >
                        Sign out
                    </Button>
                </>
            ) : (
                <div>Not Signed in</div>
            )}
        </div>
    );
}
