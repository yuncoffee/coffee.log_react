import React from "react"
import "../../styles/element/_Button.scss"

type IconType = {
	className?: string
	type?: string
	size?: string
	use?: string
	iconName?: string
	disabled?: boolean | undefined
	ly_remix?: string | undefined
	ly_ref?: React.RefObject<HTMLButtonElement> | undefined
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
	customIcon?: any
}

function Icon({
	className = "",
	type = "block",
	size = "sm",
	use = "default",
	iconName = "ri-cloud-fill",
	disabled = false,
	ly_ref = undefined,
	ly_remix = "true",
	customIcon = undefined,
	onClick = () => {
		console.log("default : 전달받은 이벤트가 없어요")
	},
}: IconType) {
	const childRef = ly_ref
	return (
		<>
			<button
				className={"btn-icon " + className}
				ly-size={size}
				ly-type={type}
				ly-use={use}
				disabled={disabled}
				onClick={onClick}
				ref={childRef}
				ly-remix={ly_remix}
			>
				{ly_remix === "true" ? (
					<i className={iconName + " ri-lg"}></i>
				) : (
					""
				)}
				{customIcon}
			</button>
		</>
	)
}

export default Icon
