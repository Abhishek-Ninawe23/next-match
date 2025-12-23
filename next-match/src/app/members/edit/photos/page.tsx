import { getAuthUserId } from "@/app/actions/authActions"
import PhotosPageClient from "./PhotosPageClient"
import { getMemberByUserId, getMemberPhotosByUserId } from "@/app/actions/memberAction";

const PhotosPage = async () => {

    const userId = await getAuthUserId();
    const member = await getMemberByUserId(userId);
    const photos = await getMemberPhotosByUserId(userId);

    if (!member) return null;

    return (
        <>
            <PhotosPageClient photos={photos ?? []} member={member} />
        </>
    )
}
export default PhotosPage