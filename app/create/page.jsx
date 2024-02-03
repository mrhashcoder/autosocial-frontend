import React from "react"
import HeadingText from "@/components/heading-text"
import VideoDataForm from "@/components/elements/video-data-form"

export const metadata = {
  title: "Create",
}

function page() {
  return (
    <>
      <main className="container flex flex-col items-center py-8">
        <div className="flex flex-col items-center space-y-2 text-center">
          <HeadingText subtext="Create Video Content on Click of a Button">
            Contact
          </HeadingText>
        </div>
        <VideoDataForm />
      </main>
    </>
  )
}

export default page
