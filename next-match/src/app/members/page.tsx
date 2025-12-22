import { fetchCurrentUserLikeIds } from "../actions/likeActions";
import { getMember } from "../actions/memberAction"
import MemberCard from "./MemberCard";

const MembersPage = async () => {

    const members = await getMember();

    const likeIds = await fetchCurrentUserLikeIds();

    return (
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
            {
                members && members?.map(member => (
                    <MemberCard member={member} key={member.id} likeIds={likeIds} />
                ))
            }
        </div>
    )
}
export default MembersPage