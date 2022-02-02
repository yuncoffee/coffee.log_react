import React from "react"
import "../../styles/element/_Button.scss"

type IconType = {
	/** [optional] 아이콘형태 옵션 */
	type?: string
	/** [optional] 아이콘크기 옵션 */
	size?: string
	/** [optional] remixicon 형태 옵션 */
	iconName?: string
	/** [optional] 클래스명 옵션 */
	className?: string
	/** [optional] 아이콘 사용처 */
	use?: string
	/** [optional] disabled 유무 */
	disabled?: boolean | undefined
	/** [optional] 아이콘사용 시 remixicon 미사용 시 대체 */
	non_remix?: string | undefined | HTMLElement
	/** [optional] 커스텀 컬러 사용 시 옵션_HSL */
	customColor?:
		| {
				className: string
				hue: number
				saturation: number
				lightness: number
		  }
		| undefined
	/** [optional] ref 옵션 */
	ly_ref?: React.RefObject<HTMLButtonElement> | undefined
	/** [optional] onClick 이벤트 핸들러 */
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

/**
 * 아이콘 기본옵션 타입을 설정합니다.
 *
 * - 테스트중입니다.
 * - 테스트중입니다.
 */

function Icon({
	type = "block",
	size = "sm",
	iconName = "ri-cloud-fill",
	className = "",
	use = "default",
	disabled = false,
	ly_ref = undefined,
	non_remix = undefined,
	customColor = {
		className: "default",
		hue: 33,
		saturation: 40,
		lightness: 10,
	},
	onClick = () => {
		console.log("default : 전달받은 이벤트가 없어요")
	},
}: IconType) {
	let customIcon // 아이콘 대신 사용
	let defaultColor // 커스텀 기본 색상
	let darkenColor // 커스텀 호버 색상
	let transColor // 커스텀 투명 색상
	let colorClassName // 커스텀 컬러 className

	if (non_remix !== undefined) {
		customIcon = non_remix
	}

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
						? "btn-icon " + customColor.className + className
						: "btn-icon " + className
				}
				ly-size={size}
				ly-type={type}
				ly-use={use}
				disabled={disabled}
				onClick={onClick}
				ref={ly_ref}
			>
				{non_remix ? (
					customIcon
				) : (
					<i className={iconName + " ri-lg"}></i>
				)}
			</button>
		</>
	)
}

export default Icon
