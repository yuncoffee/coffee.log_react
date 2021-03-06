import { atom } from "recoil"

export const coreThemeAtom = atom({
	key: "rcCoreThemeAtom",
	default: {
		theme: "azure",
	},
})

export const coreContentsModalAtom = atom({
	key: "rcCoreContentsModalAtom",
	default: {
		visible: false,
	},
})

export const coreCellabAtom = atom({
	key: "rcCoreCellabAtom",
	default: {
		title: "CELLAB 코스메슈티컬플랫폼",
		desc: "설명이 들어올 것입니다. 설명이 들어올 것입니다. 설명이 들어올 것입니다. 설명이 들어올 것입니다.설명이 들어올 것입니다. 설명이 들어올 것입니다.설명이 들어올 것입니다. 설명이 들어올 것입니다. 설명이 들어올 것입니다. 설명이 들어올 것입니다. 설명이 들어올 것입니다. 설명이 들어올 것입니다.설명이 들어올 것입니다. 설명이 들어올 것입니다.설명이 들어올 것입니다. 설명이 들어올 것입니다.설명이 들어올 것입니다. 설명이 들어올 것입니다. 설명이 들어올 것입니다. 설명이 들어올 것입니다.설명이 들어올 것입니다. 설명이 들어올 것입니다.설명이 들어올 것입니다. 설명이 들어올 것입니다.",
		tags: ["2020", "졸업작품", "바이오"],
		brand_desc:
			"설명이 들어올 것입니다. 설명이 들어올 것입니다 설명이 들어올 것입니다. 설명이 들어올 것입니다.설명이 들어올 것입니다. 설명이 들어올 것입니다.설명이 들어올 것입니다. 설명이 들어올 것입니다.",
	},
})

export const coreCellabColorAtom = atom({
	key: "coreCellabColorAtom",
	default: [
		// main
		{
			title: "CL Light Green",
			rgb: "72 213 151",
			hex: "48D597",
			cmyk: "56 0 56 0",
		},
		// sub_0
		{
			title: "CL Green",
			rgb: "0 195 152",
			hex: "00C389",
			cmyk: "77 0 67 0",
		},
		// sub_1
		{
			title: "CL Blue Green",
			rgb: "0 178 162",
			hex: "00B2A2",
			cmyk: "92 0 51 0",
		},
		// sub_2
		{
			title: "CL Black",
			rgb: "0, 0, 0",
			hex: "000000",
			cmyk: "0 0 0 100",
		},
	],
})

export const coreCellabTypeAtom = atom({
	key: "coreCellabTypeAtom",
	default: {
		font: "Sandoll GothicNeo1",
		font_desc:
			"형태는 기능을 따른다는 원칙을 잊지않고 형태는 기능을 따른다는 원칙을 잊지않고 형태는 기능을 따른다는 원칙을 잊지않고 ",
	},
})
