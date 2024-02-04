import React, { useState } from "react";
import contentDataFamily from "@/atoms/ContentCardAtomFamily";
import { useRecoilValue } from "recoil";
import Video from "next-video";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function ContentCard({ id }) {
    const contentCardData = useRecoilValue(contentDataFamily(id));
    const [isPlayed, setIsPlayed] = useState(false);
    // console.log(contentCardData);

    const creationDate = new Date(contentCardData.created_at);
    const month = (creationDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const day = creationDate.getDate().toString().padStart(2, "0");

    // Get time components
    const hours = creationDate.getHours().toString().padStart(2, "0");
    const minutes = creationDate.getMinutes().toString().padStart(2, "0");
    const seconds = creationDate.getSeconds().toString().padStart(2, "0");

    // Construct formatted date and time strings
    const formattedDate = `${month}/${day}`;
    const formattedTime = `${hours}:${minutes}`;

    let cardContent = null;
    if (isPlayed) {
        cardContent = (
            <AspectRatio ratio={9 / 16}>
                <video
                    controls
                    width="100%"
                    height="100%"
                    src={contentCardData.videoUrl}
                />
            </AspectRatio>
        );
    } else {
        console.log("HERE");
        cardContent = (
            <AspectRatio ratio={9 / 16}>
                <img src={contentCardData.thumbnailUrl} />
            </AspectRatio>
        );
    }

    const handlePlay = () => {
        setIsPlayed(true);
    };

    return (
        <div className="mt-10">
            <Card className="w-[300px]">
                <CardHeader>
                    <CardTitle>{contentCardData.title}</CardTitle>
                </CardHeader>
                <CardContent>{cardContent}</CardContent>
                <CardFooter className="flex justify-between">
                    <div className="block">
                        <p>Created At : {formattedTime} </p>
                        <p>{formattedDate}</p>
                    </div>
                    <Button onClick={handlePlay}>Play</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default ContentCard;
