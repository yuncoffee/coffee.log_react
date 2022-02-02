import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "./Button"
import { action, actions } from "@storybook/addon-actions"
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
				cancel: "cancel",
				csp: "csp",
			},
		},
		disabled: {
			control: "boolean",
		},
		icon: {
			control: "boolean",
		},
		customColor: {
			hue: { type: "range", min: 0, max: 255, step: 1 },
			saturation: { type: "range", min: 0, max: 100, step: 1 },
			lightness: { type: "range", min: 0, max: 100, step: 1 },
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
	customColor: {
		className: "default",
		hue: 33,
		saturation: 40,
		lightness: 10,
	},
	onClick: action("clicked"),
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
