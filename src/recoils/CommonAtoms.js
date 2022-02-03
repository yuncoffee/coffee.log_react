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
		desc: "설명이 들어올 것입니다. 설명이 들어올 것입니다. 설명이 들어올 것입니다. 설명이 들어올 것입니다.설명이 들어올 것입니다. 설명이 들어올 것입니다.설명이 들어올 것입니다. 설명이 들어올 것입니다.",
		tags: ["2019", "졸업작품", "바이오"],
	},
})
