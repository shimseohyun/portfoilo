import * as S from "./AboutmeSection.styled";

// hooks
import useVisibility from "@hooks/useVisibility";

// components
import HighlightedText from "@components/highlightedText/HighlightedText";
import { useEffect } from "react";
import useIndex from "@hooks/useIndex";
import {
  ABOUTME_SECTION_DESCRIPTION,
  ABOUTME_SECTION_INFO,
} from "@constants/aboutme";

const AboutmeSection = () => {
  const highlightColor = ABOUTME_SECTION_DESCRIPTION.highlightColor;
  const { ref, isVisible } = useVisibility();

  const { addIndex } = useIndex();

  useEffect(() => {
    addIndex({ title: "저를 소개합니다!", ref: ref });
  }, [ref]);

  let textLength = 20;
  return (
    <S.AboutmeSectionWrapper
      className={isVisible ? "visible" : "non-visible"}
      ref={ref}
    >
      {/* 상단 소개 */}
      <S.AboutmeSectionPortfolio>
        <img src="/aboutme/me.jpg" />
        <S.AboutmeSectionPortfolioInfo>
          <h3>
            {ABOUTME_SECTION_INFO.description.map((text, index) => {
              return (
                <>
                  {text}
                  {index === ABOUTME_SECTION_INFO.description.length - 1 || (
                    <br />
                  )}
                </>
              );
            })}
          </h3>
          <p>{ABOUTME_SECTION_INFO.role}</p>
        </S.AboutmeSectionPortfolioInfo>
      </S.AboutmeSectionPortfolio>

      {/* 상단 소개 */}

      <S.AboutmeSectionPortfolioTitle>
        <h2>
          <HighlightedText
            text={ABOUTME_SECTION_DESCRIPTION.title}
            highlightColor={highlightColor}
          />
        </h2>
      </S.AboutmeSectionPortfolioTitle>

      {ABOUTME_SECTION_DESCRIPTION.descriptions.map((description, index) => {
        if (index !== 0)
          textLength +=
            ABOUTME_SECTION_DESCRIPTION.descriptions[index - 1].description
              .length;
        return (
          <S.AboutmeSectionDescrptionWrapper
            style={{ animationDelay: `${index * 1 + 0.5}s` }}
          >
            <p>{description.title}</p>
            <h3>{description.subTitle}</h3>
            <HighlightedText
              text={description.description}
              highlightColor={highlightColor}
              prevTextLength={textLength}
            />
          </S.AboutmeSectionDescrptionWrapper>
        );
      })}
    </S.AboutmeSectionWrapper>
  );
};

export default AboutmeSection;
