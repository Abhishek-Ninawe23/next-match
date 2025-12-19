import { getMember } from "../actions/memberAction"
import MemberCard from "./MemberCard";

const MembersPage = async () => {

    const members = await getMember();

    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {
                members?.map(member => (
                    <MemberCard member={member} key={member.id} />
                ))
            }
        </div>
    )
}
export default MembersPage