"use client";
import React, { useEffect } from "react";
import contentIDListState from "@/atoms/ContentIdListAtom";
import { useRecoilState } from "recoil";
import fetchContentIdList from "@/api/fetchContentIdList";
import ContentCard from "./content-card";

function ContentBox() {
    const [contentIdList, setContentIdList] =
        useRecoilState(contentIDListState);
    useEffect(() => {
        fetchContentIdList()
            .then((idList) => {
                const newIdList = Array.from(
                    new Set([...contentIdList, ...idList])
                );
                newIdList.sort((a, b) => a.id < b.id);
                setContentIdList(newIdList);
            })
            .catch((err) => {
                console.log(err);
                console.log("Error Fetching Content Id List");
            });
    }, []);

    const contentCardsHTML = contentIdList.map((contentId) => {
        return <ContentCard id={contentId} key={contentId} />;
    });

    return (
        <>
            <div>Size of List : {contentIdList.length}</div>
            <div className="m-auto flex flex-wrap items-center justify-center">
                {contentCardsHTML}
            </div>
        </>
    );
}

export default ContentBox;
