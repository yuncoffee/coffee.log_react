import React from "react"

type FormType = {
    left?: any
    right?: any
}

// FORM 진행중!
function Form({ left, right }: FormType) {
    return (
        <>
            <form>
                <div
                    s-display="flex"
                    s-position="relative"
                    s-gap="8px"
                    style={{ width: "300px" }}
                >
                    <div style={{ width: "100%" }}>{left}</div>
                    <div>{right}</div>
                </div>
            </form>
        </>
    )
}

export default Form
