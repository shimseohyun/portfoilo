import { useEffect, useState } from "react";
import * as S from "./MainIndex.syled";

import { Index } from "@atoms/index";
import useGetScreenSize from "@hooks/useGetScreenSize";

interface MainIndexProps {
  indexs: Index[];
}

const MainIndex = ({ indexs }: MainIndexProps) => {
  const [isIsIndexOpen, setIsIndexOpen] = useState<boolean>(true);
  const { screenType } = useGetScreenSize();

  const handleIndexClick = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveIndex = null;

      indexs.forEach((index, idx) => {
        if (index.ref.current) {
          const { offsetTop, offsetHeight } = index.ref.current;
          const scrollPosition = window.scrollY + 60;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentActiveIndex = idx;
          }
        }
      });

      setActiveIndex(currentActiveIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [indexs]);

  useEffect(() => {
    if (screenType == "mobile") {
      setIsIndexOpen(true);
    }
  }, [screenType]);

  return (
    <S.MainIndexWrapper>
      {isIsIndexOpen ? (
        <S.MainIndexContentwrapper>
          {indexs.map((index, idx) => (
            <S.MainIndexContent
              key={idx}
              onClick={() => handleIndexClick(index.ref)}
              $isCurrent={activeIndex === idx}
            >
              {index.title}
            </S.MainIndexContent>
          ))}
        </S.MainIndexContentwrapper>
      ) : null}

      {screenType == "mobile" ? null : (
        <S.MainIndexFloatingButton
          onClick={() => setIsIndexOpen(!isIsIndexOpen)}
        >
          <img
            src={
              isIsIndexOpen ? "/icons/close_gray.svg" : "/icons/menu_gray.svg"
            }
          />
        </S.MainIndexFloatingButton>
      )}
    </S.MainIndexWrapper>
  );
};

export default MainIndex;
