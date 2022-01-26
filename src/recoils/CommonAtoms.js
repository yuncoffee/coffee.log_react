import { atom } from "recoil"

export const coreThemeAtom = atom({
    key: "rcCoreThemeAtom",
    default: {
        theme: "azure",
    },
})
