import React from "react";

import HeadingText from "@/components/heading-text";

export const metadata = {
    title: "Generated Content",
};

function page() {
    return (
        <>
            <main className="container flex flex-col items-center py-8">
                <div className="flex flex-col items-center space-y-2 text-center">
                    <HeadingText subtext="">Generated Content</HeadingText>
                </div>
            </main>
        </>
    );
}

export default page;
