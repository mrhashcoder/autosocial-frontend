"use client"
import React from "react"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { useRecoilValue } from "recoil"
import { alertState } from "@/atoms/AlertAtom"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

function AlertBox() {
  const alertData = useRecoilValue(alertState)

  if (alertData.type == "") {
    return <div></div>
  }

  return (
    <Alert variant={alertData.type}>
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>{alertData.title}</AlertTitle>
      <AlertDescription>{alertData.description}</AlertDescription>
    </Alert>
  )
}

export default AlertBox
