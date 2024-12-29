import { useState } from "react";
import * as S from "../PortfolioSection.styled";

// models
import { Portfolio, PortfolioTech } from "@models/Portfolio";

// components
import HighlightedText from "@components/highlightedText/HighlightedText";
import useVisibility from "@hooks/useVisibility";

interface PortfolioSectionTechCardProps
  extends Pick<Portfolio, "mainColor">,
    PortfolioTech {}

const PortfolioSectionTechCard = ({
  ...props
}: PortfolioSectionTechCardProps) => {
  // 기술 카드 부가 설명 열림/닫힘 관리 (기본 : 열림)
  const [isOpen, setIsOpen] = useState<boolean>(
    props.isOpen == undefined ? true : props.isOpen
  );
  const toggleTechCard = () => {
    setIsOpen((prevState) => {
      return !prevState;
    });
  };

  // 화면에 보일 때 true로 설정
  const { ref, isVisible } = useVisibility();

  return (
    <S.PortfolioSectionTechCardWrapper
      className={isVisible ? "visible" : "non-visible"}
      ref={ref}
    >
      <S.PortfolioSectionTechCardTitle>
        <h2>{props.title}</h2>
        <img
          src={isOpen ? "/icons/up_gray.svg" : "/icons/down_gray.svg"}
          alt="Toggle Icon"
          onClick={() => toggleTechCard()}
        />
      </S.PortfolioSectionTechCardTitle>

      {/* 카드가 열렸을 때만 내용 표시 */}
      {isOpen && (
        <S.PortfolioSectionTechCardDescription>
          {props.images.length == 0 ? null : (
            <S.PortfolioSectionTechCardImagesWrapper
              $itemCount={props.images.length}
            >
              {props.images.map((image, idx) => (
                <img key={idx} src={image.url} alt={image.alt} />
              ))}
            </S.PortfolioSectionTechCardImagesWrapper>
          )}

          <ul>
            {props.descriptions.map((desc, idx) => (
              <li key={idx}>
                <h3>{desc.subTitle}</h3>
                <HighlightedText
                  text={desc.description}
                  highlightColor={props.mainColor}
                  delay={idx}
                />
              </li>
            ))}
          </ul>
        </S.PortfolioSectionTechCardDescription>
      )}
    </S.PortfolioSectionTechCardWrapper>
  );
};

export default PortfolioSectionTechCard;
