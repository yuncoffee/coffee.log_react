import React from "react"
import { Link } from "react-router-dom"
import { coreThemeAtom } from "../../recoils/CommonAtoms"
import { useRecoilState } from "recoil"
import "../../styles/element/_Header.scss"
import Button from "../Element/Button"

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
                            src="/assets/images/logo/sg_cloudStudio_hori_long_default.png"
                            alt="메인으로 돌아가는 링크입니다"
                        />
                        <div className={`csp-logo ${coreTheme.theme}`}></div>
                    </figure>
                </Link>

                <ul s-display="flex" s-gap="16px" s-align="center">
                    <li>
                        <Button
                            name="테마 변경"
                            type="block-line"
                            onClick={handleClickCSP}
                        />
                    </li>
                </ul>
            </header>
        </>
    )
}

export default PageHeader
