// utils/atoms.js

import { atom } from "recoil";

const contentIDListState = atom({
    key: "contentIDListState",
    default: [],
});

export default contentIDListState;
