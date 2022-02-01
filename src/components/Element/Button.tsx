import React from "react"
import "../../styles/element/_Button.scss"

interface BtnType {
	/** 버튼에 이름에 대한 설정 */
	name: string
	type?:
		| "block"
		| "box"
		| "round"
		| "box-line"
		| "block-line"
		| "round-line"
		| "box-ghost"
		| "block-ghost"
		| "round-ghost"
		| "text"
		| undefined
		| string
	/** 클래스 명에 대한 속성 */
	className?: string | undefined
	/** 버튼 사이즈(높이)에 대한 속성 | "xl" | "lg" | "mid" | "sm"  */
	size?: string
	use?: string
	disabled?: boolean | undefined
	length?: string | undefined
	icon?: boolean
	iconName?: string
	ly_ref?: React.RefObject<HTMLButtonElement> | undefined
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

/**
 * 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 * - `onHello` 와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정 할 수 있습니다.
 */

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
