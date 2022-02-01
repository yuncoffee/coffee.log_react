import React from "react"
import "../../styles/element/_Button.scss"
import styled from "styled-components"

interface BtnType {
	/** 버튼이름 옵션 */
	name: string
	/** 버튼형태 옵션 */
	type?: string | undefined
	/** 버튼크기 옵션 */
	size?: string
	/** 클래스명 옵션 */
	className?: string | undefined
	/** 버튼 사용처 */
	use?: string
	/** disabled 유무 */
	disabled?: boolean | undefined
	/** 버튼길이 옵션 */
	length?: string | undefined
	/** 아이콘사용 유무 */
	icon?: boolean
	non_remix?: undefined | HTMLElement
	/** 아이콘사용 시 이름 옵션 */
	iconName?: string
	ly_ref?: React.RefObject<HTMLButtonElement> | undefined
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

/**
 * 버튼 기본옵션 타입을 설정합니다.
 *
 * - 테스트중입니다.
 * - 테스트중입니다.
 */

function Button({
	name = "버튼",
	type = "block",
	size = "sm",
	className = "",
	use = "default",
	length = undefined,
	disabled = false,
	icon = false,
	iconName = "",
	non_remix = undefined,
	ly_ref = undefined,
	onClick = () => {
		console.log("default : 전달받은 이벤트가 없어요")
	},
}: BtnType) {
	const childRef = ly_ref

	return (
		<>
			<style>
				{`
					background: #424242;
				`}
			</style>
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
						{/* remix가 undefined가 아닐 경우 */}
						{non_remix ? (
							{ non_remix }
						) : (
							<i className={iconName + " ri-1x"}></i>
						)}
					</div>
				) : (
					""
				)}
				{name}
			</button>
		</>
	)
}

export default Button
