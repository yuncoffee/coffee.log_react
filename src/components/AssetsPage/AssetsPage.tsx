import React from "react"
import { Outlet } from "react-router-dom"
// eslint-disable-next-line
import AssetsItem from "./AssetsItem"
function AssetsPage() {
    return (
        <>
            <Outlet />
        </>
    )
}

export default AssetsPage
