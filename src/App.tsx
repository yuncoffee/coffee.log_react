import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import PageHeader from "./components/Layout/PageHeader"
import Main from "./components/Layout/Main"
import ErrorPage from "./components/ErrorPage/ErrorPage"
import AssetsPage from "./components/AssetsPage/AssetsPage"
import AssetsItem from "./components/AssetsPage/AssetsItem"
import { useRecoilState } from "recoil"

import { coreThemeAtom } from "./recoils/CommonAtoms"

function App() {
	// eslint-disable-next-line
	const [coreTheme, setCoreTheme] = useRecoilState(coreThemeAtom)

	useEffect(() => {
		const body = document.querySelector("body")
		if (coreTheme && typeof coreTheme.theme === "string") {
			body?.setAttribute("data-theme", coreTheme.theme)
		}
	})

	return (
		<div className="App">
			<PageHeader />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/" element={<Main />}>
					<Route path="assets/*" element={<AssetsPage />}>
						<Route path=":id" element={<AssetsItem />} />
					</Route>
				</Route>
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</div>
	)
}

export default App
