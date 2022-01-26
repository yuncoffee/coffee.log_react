import React from "react"
import "../../styles/element/_Button.scss"

type BtnType = {
    name: string
    type?: string
    className?: string | undefined
    size?: string
    use?: string
    disabled?: boolean | undefined
    length?: string | undefined
    icon?: boolean
    iconName?: string
    ly_ref?: React.RefObject<HTMLButtonElement> | undefined
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

function Button({
    className = "",
    type = "block",
    size = "sm",
    name = "버튼",
    use = "default",
    length = undefined,
    disabled = false,
    icon = false,
    iconName = "",
    ly_ref = undefined,
    onClick = () => {
        console.log("default : 전달받은 이벤트가 없어요")
    },
}: BtnType) {
    const childRef = ly_ref

    return (
        <button
            className={"button " + className}
            ly-size={size}
            ly-type={type}
            ly-use={use}
            disabled={disabled}
            onClick={onClick}
            style={{ width: `${length}` }}
            type="button"
            ref={childRef}
        >
            {/* 아이콘이 있을 경우만 생성 */}
            {icon ? (
                <div className="icon">
                    <i className={iconName + " ri-1x"}></i>
                </div>
            ) : (
                ""
            )}
            {name}
        </button>
    )
}

export default Button
