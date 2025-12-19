'use client';

import { CardHeader, Divider, CardBody } from "@heroui/react";
import Image from "next/image";

type Photo = {
    id: string;
    url: string;
};

type Props = {
    photos: Photo[];
};

export default function MemberPhotosClient({ photos }: Props) {
    console.log(photos);

    return (
        <div>
            <CardHeader className="text-2xl font-semibold text-secondary">
                Photos
            </CardHeader>
            <Divider />
            <CardBody>
                <div className="grid grid-cols-5 gap-3">
                    {photos.map(photo => (
                        <div key={photo.id}>
                            <Image
                                src={photo.url}
                                alt="Image of member"
                                width={300}
                                height={300}
                                unoptimized
                                className="rounded-2xl"
                            />
                        </div>
                    ))}
                </div>
            </CardBody>
        </div>
    );
}
