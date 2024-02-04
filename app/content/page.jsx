import React from "react";

import HeadingText from "@/components/heading-text";
import ContentBox from "../../components/elements/content-box";

export const metadata = {
    title: "Generated Content",
};

function page() {
    return (
        <>
            <main className="container flex flex-col items-center py-8">
                <div className="flexitems-center space-y-2 text-center">
                    <HeadingText subtext="">Generated Content</HeadingText>
                </div>

                <ContentBox />
            </main>
        </>
    );
}

export default page;
