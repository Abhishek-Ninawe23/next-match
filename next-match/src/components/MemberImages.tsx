import { Photo } from "@prisma/client"
import { CldImage } from "next-cloudinary";
import Image from "next/image";

type Props = {
    photo: Photo | null;
}

const MemberImages = ({ photo }: Props) => {
    return (
        <div>

            {photo?.publicId ? (
                <CldImage
                    alt="Image of Member"
                    src={photo.publicId}
                    width={300}
                    height={300}
                    crop='fill'
                    gravity="faces"
                    className="rounded-2xl"
                />
            ) : (
                <Image
                    src={photo?.url || "/images/user.png"}
                    alt="Image of Member"
                    width={300}
                    height={300}
                    unoptimized
                    className="rounded-2xl object-cover aspect-square"
                />

            )}

        </div>
    )
}
export default MemberImages