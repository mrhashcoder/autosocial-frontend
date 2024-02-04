import React from "react";
import HeadingText from "@/components/heading-text";
import VideoDataForm from "@/components/elements/video-data-form";

export const metadata = {
    title: "Create",
};

function page() {
    return (
        <>
            <main className="container flex flex-col items-center py-6">
                <div className="items-left flex flex-col space-y-2 text-center sm:items-center">
                    <HeadingText subtext="Create Video Content on Click of a Button">
                        Create Video
                    </HeadingText>
                </div>
                <VideoDataForm />
            </main>
        </>
    );
}

export default page;
