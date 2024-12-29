import { atom } from "jotai";

export interface Index {
  title: string;
  ref: React.RefObject<HTMLDivElement>;
}

export const mainIndexsAtom = atom<Index[]>([]);
