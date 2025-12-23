'use client';
import { addImage } from "@/app/actions/userActions";
import ImageUploadButton from "@/components/ImageUploadButton";
import MemberPhotos from "@/components/MemberPhotos";
import { CardHeader, Divider, CardBody } from "@heroui/react"
import { Member } from "@prisma/client";
import { CloudinaryUploadWidgetResults } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Photo = {
    id: string;
    url: string;
    publicId: string | null;
    memberId: string;
};

type Props = {
    photos: Photo[];
    member: Member
};

const PhotosPageClient = ({ photos, member }: Props) => {

    const router = useRouter();

    const onAddImage = async (result: CloudinaryUploadWidgetResults) => {
        if (result.info && typeof result.info === 'object') {
            await addImage(result.info.secure_url, result.info.public_id);
            router.refresh();
        } else {
        }
    }
    return (
        <>
            <CardHeader className="text-2xl font-semibold text-secondary flex flex-row justify-between items-center">
                <div className="text-2xl font-semibold text-secondary">
                    Edit  Profile
                </div>
                <ImageUploadButton onUploadImage={onAddImage} />

            </CardHeader>
            <Divider />
            <CardBody>

                <MemberPhotos photos={photos} editing={true} mainImageUrl={member?.image} />
            </CardBody>
        </>
    )
}
export default PhotosPageClient