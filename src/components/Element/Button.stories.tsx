import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "./Button"

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

export default {
	title: "components/Element/Button",
	component: Button,
	argTypes: {
		size: {
			control: "inline-radio",
			options: { xl: "xl", lg: "lg", mid: "mid", sm: "sm" },
		},
		type: {
			control: "select",
			options: {
				block: "block",
				"block-line": "block-line",
				"block-ghost": "block-ghost",
				box: "box",
				"box-line": "box-line",
				"box-ghost": "box-ghost",
				round: "round",
				"round-line": "round-line",
				"round-ghost": "round-ghost",
				text: "text",
			},
		},
		use: {
			control: "inline-radio",
			options: {
				default: "default",
				warning: "warning",
				csp: "csp",
			},
		},
		disabled: {
			control: "boolean",
		},
		icon: {
			control: "boolean",
		},
	},
	decorators: [withKnobs],
	parameters: {
		componentSubtitle: "기본요소 - 버튼",
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
	name: "버튼",
	type: "block",
	size: "sm",
	className: "",
	use: "default",
	length: undefined,
	disabled: false,
	icon: false,
	iconName: "",
	non_remix: undefined,
	ly_ref: undefined,
	onClick: () => {
		console.log("default : 전달받은 이벤트가 없어요")
	},
}

export const DefaultIconed = Template.bind({})
DefaultIconed.args = {
	className: "",
	type: "block",
	size: "sm",
	name: "버튼",
	use: "default",
	icon: true,
	iconName: "ri-home-6-fill",
}

export const SizeXl = Template.bind({})
SizeXl.args = {
	size: "xl",
}
