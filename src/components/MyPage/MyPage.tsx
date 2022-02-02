import React from "react"
import { Outlet } from "react-router-dom"
// eslint-disable-next-line
import MyItem from "./MyItem"

function MyPage() {
	return (
		<>
			<Outlet />
		</>
	)
}

export default MyPage
