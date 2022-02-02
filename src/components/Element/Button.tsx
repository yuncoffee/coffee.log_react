import React, { useEffect } from "react"
import "../../styles/element/_Button.scss"

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
	customColor?:
		| { hue: number; saturation: number; lightness: number }
		| undefined
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
	customColor = undefined,
	onClick = () => {
		console.log("default : 전달받은 이벤트가 없어요")
	},
}: BtnType) {
	const childRef = ly_ref

	// let customColor = {
	// 	hue: 215,
	// 	saturation: 100,
	// 	lightness: 36,
	// }

	let defaultColor
	let darkenColor
	let transColor

	if (customColor !== undefined) {
		defaultColor = `hsla(${customColor.hue}, ${customColor.saturation}%, ${customColor.lightness}% , 1)`
		darkenColor = `hsla(${customColor.hue}, ${customColor.saturation}%, ${
			customColor.lightness - 10
		}% , 1)`
		transColor = `hsla(${customColor.hue}, ${customColor.saturation}%, ${customColor.lightness}% , 0)`
	}

	return (
		<>
			{customColor ? (
				<style jsx>
					{`
						.customColor[ly-use="default"] {
							background: ${defaultColor};
						}
						.customColor[ly-use="default"]:hover {
							background: ${darkenColor};
						}
						.customColor[ly-use="default"][ly-type="box"],
						.customColor[ly-use="default"][ly-type="block"],
						.customColor[ly-use="default"][ly-type="round"] {
							background: ${defaultColor};
							border-color: ${defaultColor};
						}
						.customColor[ly-use="default"][ly-type="box"]:hover,
						.customColor[ly-use="default"][ly-type="block"]:hover,
						.customColor[ly-use="default"][ly-type="round"]:hover {
							background: ${darkenColor};
							border-color: ${transColor};
						}
						.button[ly-use="default"][ly-type="box-line"],
						.button[ly-use="default"][ly-type="block-line"],
						.button[ly-use="default"][ly-type="round-line"] {
							background: ${transColor};
							color: ${defaultColor};
							border: 1.5px solid ${defaultColor};
						}
						.customColor[ly-use="default"][ly-type="box-line"]:hover,
						.customColor[ly-use="default"][ly-type="block-line"]:hover,
						.customColor[ly-use="default"][ly-type="round-line"]:hover {
							background: ${darkenColor};
							border: 1.5px solid ${darkenColor};
						}
						.customColor[ly-use="default"][ly-type="box-ghost"]:hover,
						.customColor[ly-use="default"][ly-type="block-ghost"]:hover,
						.customColor[ly-use="default"][ly-type="round-ghost"]:hover {
							background: ${darkenColor};
						}
						.customColor[ly-use="default"][ly-type="text"]:hover {
							background: ${transColor};
							color: ${defaultColor};
						}
					`}
				</style>
			) : (
				""
			)}
			<button
				className={
					customColor
						? "button customColor" + className
						: "button " + className
				}
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
