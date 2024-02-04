import { atomFamily, selectorFamily } from "recoil";
import fetchContentData from "../api/fetchContentDataById";

const contentDataAtomFamily = atomFamily({
    key: "contentDataAtomFamily",
    default: selectorFamily({
        key: "contentSelectorFamily",
        get:
            (id) =>
            async ({ get }) => {
                const contentCardData = await fetchContentData(id);
                return contentCardData;
            },
    }),
});

export default contentDataAtomFamily;
