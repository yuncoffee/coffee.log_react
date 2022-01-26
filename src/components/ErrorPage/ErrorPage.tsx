import React from "react"
import { Link } from "react-router-dom"

function ErrorPage() {
    return (
        <>
            <article>Error페이지</article>
            <Link to={"/"}>홈으로 </Link>
        </>
    )
}

export default ErrorPage
