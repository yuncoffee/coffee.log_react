import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "./Button"

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

export default {
	title: "components/Element/Button",
	component: Button,
	argTypes: {
		size: {
			control: "radio",
			options: { xl: "xl", lg: "lg", mid: "mid", sm: "sm" },
		},
		type: {
			control: "select",
			options: {
				block: "block",
				"block-line": "block-line",
				"block-ghost": "block-ghost",
				text: "text",
			},
		},
		use: {
			control: "radio",
			options: {
				default: "default",
				warning: "warning",
				csp: "csp",
			},
		},
	},
	decorators: [withKnobs],
	parameters: {
		componentSubtitle: "기본요소 - 버튼",
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	className: "",
	type: "block-ghost",
	size: "lg",
	name: "버튼",
	use: "default",
}

export const Iconed = Template.bind({})
Iconed.args = {
	className: "",
	type: "block",
	size: "lg",
	name: "버튼",
	use: "default",
	icon: true,
	iconName: "ri-home-6-fill",
}
