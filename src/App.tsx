import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import PageHeader from "./components/Layout/PageHeader"
import Main from "./components/Layout/Main"
import ErrorPage from "./components/ErrorPage/ErrorPage"
import MyPage from "./components/MyPage/MyPage"
import MyItem from "./components/MyPage/MyItem"
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
				<Route path="/" element={<Main />}>
					<Route path="myPage/*" element={<MyPage />}>
						<Route path=":id" element={<MyItem />} />
					</Route>
				</Route>
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</div>
	)
}

export default App
