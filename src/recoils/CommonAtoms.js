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
		tags: ["2019", "졸업작품", "바이오"],
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
			title: "CL Sub Green",
			rgb: "72 213 151",
			hex: "48D597",
			cmyk: "56 0 56 0",
		},
		// sub_1
		{
			title: "CL Sub2 Green",
			rgb: "72 213 151",
			hex: "48D597",
			cmyk: "56 0 56 0",
		},
		// sub_2
		{
			title: "CL Sub3 Green",
			rgb: "72 213 151",
			hex: "48D597",
			cmyk: "56 0 56 0",
		},
	],
})
