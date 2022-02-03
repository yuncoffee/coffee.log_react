import React from "react"
import { Link } from "react-router-dom"
import { coreThemeAtom } from "../../recoils/CommonAtoms"
import { useRecoilState } from "recoil"
import "../../styles/element/_Header.scss"
import Button from "../Element/Button"
import Icon from "../Element/Icon"

function PageHeader() {
	const [coreTheme, setCoreTheme] = useRecoilState(coreThemeAtom)

	const handleClickCSP = () => {
		if (coreTheme && typeof coreTheme.theme === "string") {
			if (coreTheme.theme === "azure") {
				setCoreTheme({ theme: "aws" })
			}
			if (coreTheme.theme === "aws") {
				setCoreTheme({ theme: "ncloud" })
			}
			if (coreTheme.theme === "ncloud") {
				setCoreTheme({ theme: "azure" })
			}
		}
	}

	return (
		<>
			<header
				className="page-header"
				s-display="flex"
				s-align="center"
				s-justify="space-between"
				s-padding-x="16px"
			>
				<Link to={"/"}>
					<figure
						className="page-header__img"
						s-display="flex"
						s-align="center"
					>
						<img
							src="/assets/images/logo/my_logo.png"
							alt="메인으로 돌아가는 링크입니다"
						/>
					</figure>
				</Link>

				<ul s-display="flex" s-gap="8px" s-align="center">
					<li>
						<a s-display="flex" href="https://github.com/yuncoffee">
							<Icon
								type="text"
								size="mid"
								iconName="ri-github-fill"
								onClick={() => {
									return
								}}
							/>
						</a>
					</li>
					<li
						s-position="relative"
						s-before-line="left"
						s-before-left="-4px"
					>
						<a s-display="flex" href="/">
							<Icon
								type="text"
								size="mid"
								iconName="ri-mail-fill"
								onClick={() => {
									return
								}}
							/>
						</a>
					</li>
				</ul>
			</header>
		</>
	)
}

export default PageHeader
