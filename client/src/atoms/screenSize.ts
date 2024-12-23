import { atom } from "jotai";

export const screenSizeAtom = atom({
  width: window.innerWidth,
});
