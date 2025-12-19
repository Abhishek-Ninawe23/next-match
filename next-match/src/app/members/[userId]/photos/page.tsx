import { getMemberPhotosByUserId } from "@/app/actions/memberAction";
import MemberPhotosClient from "./MemberPhotosClient";

type Props = {
    params: Promise<{ userId: string }>;
};

export default async function PhotosPage({ params }: Props) {
    const { userId } = await params;           // ✅ REQUIRED in Next 16
    const photos = await getMemberPhotosByUserId(userId); // ✅ await

    return (
        <>
            <MemberPhotosClient photos={photos ?? []} />
        </>
    );
}
