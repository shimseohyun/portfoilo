import { useAtom } from "jotai";

import { Index, mainIndexsAtom } from "@atoms/index";

const useIndex = () => {
  const [indexs, setIndexs] = useAtom(mainIndexsAtom);

  const addIndex = (index: Index) => {
    setIndexs((prevState: Index[]) => {
      const existingIndex = prevState.find(
        (item) => item.title === index.title
      );

      if (existingIndex) {
        // title이 이미 존재하면 ref를 업데이트
        return prevState.map((item) =>
          item.title === index.title ? { ...item, ref: index.ref } : item
        );
      } else {
        // title이 존재하지 않으면 새로운 인덱스를 추가
        return [...prevState, index];
      }
    });
  };

  const removeIndex = (title: string) => {
    setIndexs((prevState: Index[]) =>
      prevState.filter((index) => index.title !== title)
    );
  };

  return {
    indexs,
    addIndex,
    removeIndex,
  };
};

export default useIndex;
