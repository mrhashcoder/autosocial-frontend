"use client";
import React from "react";
import { ExclamationTriangleIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { useRecoilValue } from "recoil";
import { alertState } from "@/atoms/AlertAtom";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function AlertBox() {
    const alertData = useRecoilValue(alertState);

    if (alertData.type == "") {
        return <div></div>;
    }

    return (
        <Alert variant={alertData.type}>
            {alertData.type === "destructive" ? (
                <ExclamationTriangleIcon className="h-6 w-6" />
            ) : (
                <StarFilledIcon className="h-6 w-6" />
            )}
            <AlertTitle>{alertData.title}</AlertTitle>
            <AlertDescription>{alertData.description}</AlertDescription>
        </Alert>
    );
}

export default AlertBox;
