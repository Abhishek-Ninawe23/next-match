'use client';
import { CldUploadButton, CloudinaryUploadWidgetResults } from 'next-cloudinary'
import { HiPhoto } from 'react-icons/hi2'

type Props = {
    onUploadImage: (result: CloudinaryUploadWidgetResults) => void;
}

const ImageUploadButton = ({ onUploadImage }: Props) => {
    return (
        <div>
            <CldUploadButton
                options={{ maxFiles: 1 }}
                onSuccess={onUploadImage}
                signatureEndpoint='/api/sign-image'
                uploadPreset='nm-demo'
                className='text-xl flex items-center gap-2 border-2 border-secondary text-secondary rounded-lg px-1 hover:bg-secondary/10'
            >
                <HiPhoto size={28} />
                Upload new Image
            </CldUploadButton>
        </div>
    )
}
export default ImageUploadButton