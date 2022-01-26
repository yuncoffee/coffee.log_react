import React, { useRef } from "react"
import Button from "../Element/Button"
import { Field, TextArea } from "../Element/Field"
import Form from "../Element/Form"

function AssetsInput() {
	const nameInput = useRef<HTMLInputElement>(null)
	const myInput = useRef<any>(null)

	const myInputs = useRef<any>([])
	const textareaRef = useRef<any>([])

	return (
		<>
			<section className="main-contents" s-display="flex" s-gap="8px">
				<div s-display="flex" s-gap="16px">
					<Field
						type="text"
						s_type="box-line"
						ly_ref={myInput}
						ly_focus="false"
					/>
					<Field type="text" s_type="text" ly_ref={myInputs} />
					<Field type="number" s_type="underline" ly_ref={myInputs} />
					<Field type="text" s_type="round" ly_ref={myInputs} />

					<TextArea s_type="block" />
					<TextArea
						s_type="box-line"
						height="50%"
						ly_ref={textareaRef}
					/>

					<TextArea
						s_type="round"
						length="50%"
						height="50%"
						ly_ref={textareaRef}
					/>
					<TextArea
						s_type="box"
						length="50%"
						height="50%"
						ly_ref={textareaRef}
					/>
				</div>

				<div s-display="flex" s-direction="column" s-gap="8px">
					<Field type="text" s_type="block" ly_ref={myInput} />
					<TextArea
						s_type="block"
						length="100%"
						height="100px"
						ly_ref={textareaRef}
					/>
					<Button name="테스트 버튼" />

					<Form
						left={
							<Field
								length="100%"
								type="text"
								s_type="block"
								ly_ref={myInput}
							/>
						}
						right={
							<Button
								name="테스트 버튼"
								length="100px"
								icon={true}
								iconName="ri-ancient-gate-fill"
								onClick={() => {
									console.log(myInput.current.value)
								}}
							/>
						}
					/>
				</div>
			</section>
		</>
	)
}

export default AssetsInput
