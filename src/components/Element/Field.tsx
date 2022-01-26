import React from "react"
import "../../styles/element/_Field.scss"

type FieldType = {
	type: string
	s_type: string
	size?: string
	name?: string | undefined
	className?: string | undefined
	placeholder?: string | undefined
	disabled?: boolean | undefined
	invalid?: string | undefined
	ly_focus?: string | undefined
	length?: string | undefined
	ly_value?: any
	ly_ref?: React.RefObject<HTMLInputElement> | undefined
	onClick?: React.MouseEventHandler<HTMLInputElement> | undefined
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

function Field({
	type = "text",
	s_type = "block",
	size = "sm",
	name = undefined,
	className = undefined,
	placeholder = undefined,
	invalid = undefined,
	ly_ref = undefined,
	disabled = undefined,
	ly_focus = undefined,
	length = undefined,
	onClick = undefined,
	onChange = undefined,
	ly_value = undefined,
}: FieldType) {
	const childRef = ly_ref

	return (
		<>
			<input
				className={className}
				name={name}
				type={type}
				placeholder={type === "search" ? "search" : placeholder}
				ly-size={size}
				ly-type={s_type}
				ly-invalid={invalid}
				disabled={disabled}
				ly-focus={ly_focus}
				style={{ width: `${length}` }}
				value={ly_value}
				onClick={onClick}
				onChange={onChange}
				ref={childRef}
			/>
		</>
	)
}

type TextAreaType = {
	s_type: string
	size?: string
	name?: string | undefined
	className?: string | undefined
	placeholder?: string | undefined
	disabled?: boolean | undefined
	invalid?: string | undefined
	ly_focus?: string | undefined
	length?: string | undefined
	height?: string | undefined
	value?: any
	ly_ref?: React.RefObject<HTMLTextAreaElement> | undefined
	onClick?: React.MouseEventHandler<HTMLTextAreaElement> | undefined
	onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined
}

function TextArea({
	s_type = "block",
	size = "sm",
	name = undefined,
	className = undefined,
	placeholder = undefined,
	invalid = undefined,
	ly_ref = undefined,
	disabled = undefined,
	ly_focus = undefined,
	length = undefined,
	height = undefined,
	onClick = undefined,
	onChange = undefined,
}: TextAreaType) {
	const childRef = ly_ref

	return (
		<>
			<textarea
				className={className}
				name={name}
				placeholder={placeholder}
				ly-size={size}
				ly-type={s_type}
				ly-invalid={invalid}
				disabled={disabled}
				ly-focus={ly_focus}
				style={{ width: `${length}`, height: `${height}` }}
				onClick={onClick}
				onChange={onChange}
				ref={childRef}
			/>
		</>
	)
}

export { Field, TextArea }
