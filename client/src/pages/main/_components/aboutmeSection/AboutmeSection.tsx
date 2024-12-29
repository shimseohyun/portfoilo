import * as S from "./AboutmeSection.styled";

// hooks
import useVisibility from "@hooks/useVisibility";

// components
import HighlightedText from "@components/highlightedText/HighlightedText";
import { useEffect } from "react";
import useIndex from "@hooks/useIndex";

const AboutmeSection = () => {
  const { ref, isVisible } = useVisibility();

  const { addIndex } = useIndex();

  useEffect(() => {
    addIndex({ title: "저를 소개합니다!", ref: ref });
  }, [ref]);

  return (
    <S.AboutmeSectionWrapper
      className={isVisible ? "visible" : "non-visible"}
      ref={ref}
    >
      {/* 상단 소개 */}
      <S.AboutmeSectionPortfolio>
        <img src="/aboutme/me.jpg" />
        <S.AboutmeSectionPortfolioInfo>
          <h3>예술과 프로그래밍으로 세상을 바꾸고싶은 개발자</h3>
          <p>Front End / UIUX Designer</p>
        </S.AboutmeSectionPortfolioInfo>
      </S.AboutmeSectionPortfolio>

      {/* 상단 소개 */}

      <S.AboutmeSectionPortfolioTitle>
        <h2>더 나은 사용자 경험을 위해</h2>
        <h2>
          <HighlightedText
            text={"팀의 |$소통의 다리|$가 되고자합니다."}
            highlightColor={"#FDECC8"}
            delay={0}
          />
        </h2>
      </S.AboutmeSectionPortfolioTitle>

      <S.AboutmeSectionDescrptionWrapper style={{ animationDelay: "0.5s" }}>
        <p>상대의 언어를 배우며 -</p>
        <h3>끊임 없이 소통하는 사람</h3>
        <HighlightedText
          text={
            "저는 프론트엔드 개발자로서 기획자, |$디자이너와 끊임없이 소통|$하고 |$백엔드 개발자와 협력|$하고 있습니다.\n이 과정에서 저의 분야를 넘어 다른 분야에 대한 이해를 바탕으로, |$상대방이 쉽게 이해할 수 있는 표현|$을 사용해 의견에 대한 구체적인 근거를 제시하며 |$프로젝트에 대한 의사소통을 원활히|$ 이어가고 있습니다.\n이를 위해 |$새로운 기술과 분야에 도전|$하는 것을 두려워하지 않으며, |$끊임없이 성장|$하고자 합니다."
          }
          highlightColor={"#FDECC8"}
          delay={0}
        />
      </S.AboutmeSectionDescrptionWrapper>

      <S.AboutmeSectionDescrptionWrapper style={{ animationDelay: "1.5s" }}>
        <p>디자인하는 개발자 -</p>
        <h3>Developer가 아닌, Maker가 되기 위해</h3>
        <HighlightedText
          text={
            "저는 단순히 코드를 작성하는 개발자가 아닌, |$사용자 경험에 기여하는 메이커|$가 되기 위해 노력하고 있습니다.\n사용자가 웹에 접속했을 때 시각적 만족뿐만 아니라 |$지속적인 사용에 불편함이 없도록|$ 하는 것이 중요하다고 생각합니다.\n단순히 최신기술을 따르기 보다, |$문제의 본질을 파악|$해 그에 맞는 해결책을 제시하기 위해 노력하고 있습니다. 이를 위해 |$UI/UX 이론|$을 바탕으로 체계적이고 구체적인 계획을 세우고, 개발 단계에서는 작업물을 |$끊임없이 검토하고 피드백|$을 받고 있습니다."
          }
          highlightColor={"#FDECC8"}
          delay={3}
        />
      </S.AboutmeSectionDescrptionWrapper>
    </S.AboutmeSectionWrapper>
  );
};

export default AboutmeSection;
