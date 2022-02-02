import React, { useEffect } from "react"
import "../../styles/element/_Button.scss"

interface BtnType {
	/** [essential] 버튼이름 옵션 */
	name: string
	/** [optional] 버튼형태 옵션 */
	type?: string | undefined
	/** [optional] 버튼크기 옵션 */
	size?: string
	/** [optional] 클래스명 옵션 */
	className?: string | undefined
	/** [optional] 버튼 사용처 */
	use?: string
	/** [optional] disabled 유무 */
	disabled?: boolean | undefined
	/** [optional] 아이콘사용 유무 */
	icon?: boolean
	/** [optional] 아이콘사용 시 remixicon 옵션 */
	non_remix?: undefined | HTMLElement
	/** [optional] 아이콘사용 시 이름 옵션 */
	iconName?: string
	/** [optional] 커스텀 컬러 사용 시 옵션_HSL */
	customColor?:
		| {
				className: string
				hue: number
				saturation: number
				lightness: number
		  }
		| undefined
	/** [optional] 버튼길이 옵션 */
	length?: string | undefined
	/** [optional] ref 옵션 */
	ly_ref?: React.RefObject<HTMLButtonElement> | undefined
	/** [optional] onClick 이벤트 핸들러 */
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
	disabled = false,
	icon = false,
	iconName = "",
	non_remix = undefined,
	ly_ref = undefined,
	customColor = {
		className: "default",
		hue: 33,
		saturation: 40,
		lightness: 10,
	},
	length = undefined,
	onClick = () => {
		console.log("default : 전달받은 이벤트가 없어요")
	},
}: BtnType) {
	let defaultColor
	let darkenColor
	let transColor
	let colorClassName

	if (customColor !== undefined) {
		colorClassName = customColor.className
		defaultColor = `hsla(${customColor.hue}, ${customColor.saturation}%, ${customColor.lightness}% , 1)`
		darkenColor = `hsla(${customColor.hue}, ${customColor.saturation}%, ${
			customColor.lightness - 10
		}% , 1)`
		transColor = `hsla(${customColor.hue}, ${customColor.saturation}%, ${customColor.lightness}% , 0)`
	}

	return (
		<>
			{customColor ? (
				// eslint-disable-next-line max-len
				<style jsx="true">
					{`
						.${colorClassName}[ly-use="default"] {
							background: ${defaultColor};
						}
						.${colorClassName}[ly-use="default"]:hover {
							background: ${darkenColor};
						}
						.${colorClassName}[ly-use="default"][ly-type="box"],
						.${colorClassName}[ly-use="default"][ly-type="block"],
						.${colorClassName}[ly-use="default"][ly-type="round"] {
							background: ${defaultColor};
							border-color: ${defaultColor};
						}
						.${colorClassName}[ly-use="default"][ly-type="box"]:hover,
						.${colorClassName}[ly-use="default"][ly-type="block"]:hover,
						.${colorClassName}[ly-use="default"][ly-type="round"]:hover {
							background: ${darkenColor};
							border-color: ${transColor};
						}
						.${colorClassName}[ly-use="default"][ly-type="box-line"],
						.${colorClassName}[ly-use="default"][ly-type="block-line"],
						.${colorClassName}[ly-use="default"][ly-type="round-line"] {
							background: ${transColor};
							color: ${defaultColor};
							border: 1.5px solid ${defaultColor};
						}
						.${colorClassName}[ly-use="default"][ly-type="box-line"]:hover,
						.${colorClassName}[ly-use="default"][ly-type="block-line"]:hover,
						.${colorClassName}[ly-use="default"][ly-type="round-line"]:hover {
							background: ${darkenColor};
							border: 1.5px solid ${darkenColor};
						}
						.${colorClassName}[ly-use="default"][ly-type="box-ghost"]:hover,
						.${colorClassName}[ly-use="default"][ly-type="block-ghost"]:hover,
						.${colorClassName}[ly-use="default"][ly-type="round-ghost"]:hover {
							background: ${darkenColor};
						}
						.${colorClassName}[ly-use="default"][ly-type="text"]:hover {
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
						? "button " + customColor.className + className
						: "button " + className
				}
				ly-size={size}
				ly-type={type}
				ly-use={use}
				disabled={disabled}
				onClick={onClick}
				style={{ width: `${length}` }}
				type="button"
				ref={ly_ref}
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
