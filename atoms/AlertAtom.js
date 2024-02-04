// atoms/alertAtom.js
"use client";
import { atom } from "recoil";

export const alertState = atom({
    key: "alertState",
    default: {
        title: "",
        type: "",
        description: "",
    },
});
