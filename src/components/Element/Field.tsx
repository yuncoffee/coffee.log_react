import React from "react"
import "../../styles/element/_Field.scss"
import Button from "./Button"

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
	ly_value?: string | number | readonly string[] | undefined
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
			{type === "radio" ? (
				// input : radio
				<></>
			) : type === "checkbox" ? (
				// input : checkbox
				<></>
			) : (
				// input : text...
				<input
					className={className}
					name={name}
					type={type}
					placeholder={placeholder}
					ly-size={size}
					ly-type={s_type}
					ly-invalid={invalid}
					disabled={disabled}
					ly-focus={ly_focus}
					style={{ width: `${length}` }}
					defaultValue={ly_value}
					onClick={onClick}
					onChange={onChange}
					ref={childRef}
				/>
			)}
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
	ly_value?: string | number | readonly string[] | undefined
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
	ly_value = undefined,
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
				defaultValue={ly_value}
				ref={childRef}
			/>
		</>
	)
}

type RadioType = {
	name: string | undefined
	size?: string
	className?: string | undefined
	placeholder?: string | undefined
	disabled?: boolean | undefined
	invalid?: string | undefined
	ly_focus?: string | undefined
	length?: number | undefined
	ly_value?: string | number | readonly string[] | undefined
	ly_ref?: any | undefined
	onClick?: React.MouseEventHandler<HTMLInputElement> | undefined
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

function Radio({
	size = "sm",
	name = undefined,
	className = undefined,
	placeholder = undefined,
	invalid = undefined,
	ly_ref = null,
	disabled = undefined,
	ly_focus = undefined,
	length = undefined,
	onClick = undefined,
	onChange = undefined,
	ly_value = undefined,
}: RadioType) {
	console.log(ly_ref)
	return (
		<>
			{[...Array(length)].map((n, i) => {
				return (
					<div className="radio" key={i}>
						<label htmlFor={name + "-" + i}>{name}</label>
						<input
							className={className}
							name={name}
							type="radio"
							id={name + "-" + i}
							placeholder={placeholder}
							ly-size={size}
							ly-invalid={invalid}
							disabled={disabled}
							style={{ display: "none" }}
							ly-focus={ly_focus}
							defaultValue={ly_value}
							onClick={onClick}
							onChange={onChange}
							ref={(el) => {
								ly_ref.current[i] = el
							}}
						/>
					</div>
				)
			})}
		</>
	)
}

export { Field, TextArea, Radio }
