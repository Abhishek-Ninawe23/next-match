'use client';
import { Member } from "@prisma/client"
import { Tab, Tabs } from "@heroui/react";
import { Key, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import MemberCard from '../members/MemberCard'
import LoadingComponent from "@/components/LoadingComponent";

type Props = {
    members: Member[];
    likeIds: string[]
}

const ListTab = ({ members, likeIds }: Props) => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const tabs = [
        { id: 'source', label: 'Members I have Liked' },
        { id: 'target', label: 'Members that Liked Me' },
        { id: 'mutual', label: 'Mutual Likes' }
    ]


    function handleTabChange(key: Key) {
        startTransition(() => {
            const params = new URLSearchParams(searchParams);
            params.set('type', key.toString());
            router.replace(`${pathname}?${params.toString()}`);
        })
    }

    return (
        <div className="flex w-full flex-col mt-10 gap-5">
            <Tabs
                area-label='Like tabs'
                items={tabs}
                color='secondary'
                onSelectionChange={key => handleTabChange(key)}
            >
                {(item) => (
                    <Tab key={item.id} title={item.label} >
                        {isPending ? (
                            <div>
                                <LoadingComponent label="Loading..." />
                            </div>
                        ) : (
                            <>
                                {members.length > 0 ?
                                    (<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
                                        {members.map(member => (
                                            <MemberCard key={member.id} member={member} likeIds={likeIds} />
                                        ))}
                                    </div>)
                                    :
                                    (<div> No members for this filter</div>)
                                }
                            </>
                        )}

                    </Tab>
                )}
            </Tabs>
        </div >
    )
}
export default ListTab