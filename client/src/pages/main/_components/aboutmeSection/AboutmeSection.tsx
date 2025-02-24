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
          <h3>
            예술과 프로그래밍으로 <br />
            세상을 바꾸고싶은 개발자
          </h3>
          <p>FrontEnd Developer / UIUX Designer</p>
        </S.AboutmeSectionPortfolioInfo>
      </S.AboutmeSectionPortfolio>

      {/* 상단 소개 */}

      <S.AboutmeSectionPortfolioTitle>
        <h2>
          <HighlightedText
            text={"|$최고의 서비스|$를 제공하는\nMaker가 되겠습니다!"}
            highlightColor={"#FDECC8"}
          />
        </h2>
      </S.AboutmeSectionPortfolioTitle>

      <S.AboutmeSectionDescrptionWrapper style={{ animationDelay: "0.5s" }}>
        <p>개발자이자, 디자이너로서 -</p>
        <h3>사용자 경험에대해 깊게 고민하는</h3>
        <HighlightedText
          text={
            "사용자에게 |$시각적인 만족을 제공|$하는 것뿐만 아니라, |$지속적으로 편리하게 사용할 수 있는 환경|$을 만드는 것이 중요하다고 생각합니다. 사용자가 눈치채지 못할 정도로 |$자연스럽고 친숙한 UX|$를 구현하기 위해 끊임없이 고민하고 있습니다."
          }
          highlightColor={"#FDECC8"}
        />
      </S.AboutmeSectionDescrptionWrapper>

      <S.AboutmeSectionDescrptionWrapper style={{ animationDelay: "1.5s" }}>
        <p>상대의 언어를 배우며 -</p>
        <h3>팀 안의 소통의 다리가 되어주는</h3>
        <HighlightedText
          text={
            "저는 프론트엔드 개발자로서 |$기획자, 디자이너와 적극적으로 협의|$하고, |$백엔드 개발자와 긴밀하게 협력|$하는 것에 큰 가치를 두고있습니다. 프로젝트의 중심에서 |$활발한 의사소통의 다리가 되기 위해 항상 노력|$하고 있습니다.\n원활한 소통을 위해 배움에 |$한계를 두지 않고|$, 제 분야를 넘어 다른 분야에 대한 |$이해를 넓히고 있습니다|$. 상대방이 쉽게 이해할 수 있는 표현으로 소통하며, 구체적인 근거를 바탕으로 의견을 제시해 |$효율적인 협업을 진행하고 신뢰를 쌓고|$ 있습니다."
          }
          highlightColor={"#FDECC8"}
          prevTextLength={
            "사용자에게 |$시각적인 만족을 제공|$하는 것뿐만 아니라, |$지속적으로 편리하게 사용할 수 있는 환경|$을 만드는 것이 중요하다고 생각합니다. 사용자가 눈치채지 못할 정도로 |$자연스럽고 친숙한 UX|$를 구현하기 위해 끊임없이 고민하고 있습니다."
              .length
          }
        />
      </S.AboutmeSectionDescrptionWrapper>

      <S.AboutmeSectionDescrptionWrapper style={{ animationDelay: "2.5s" }}>
        <p>사용자들의 피드백을 바탕으로 -</p>
        <h3>이유있는 코드를 작성하는</h3>
        <HighlightedText
          text={
            "좋은 서비스는 |$사용자들의 피드백을 반영해 끊임 없이 발전|$해나가는 서비스라고 생각합니다. 성능과 안정성을 개선해나가기 위해서는 유지보수가 가능한 코드가 필수적입니다.\n저는 단순히 코드를 작성하며 최신 기술을 맹목적으로 따르기보다, |$문제의 본질을 파악하고 적합한 해결책을 제시|$하는 것을 목표로 합니다. |$아키텍처, 언어, 프레임워크|$에 대한 심도 있는 학습과 경험을 바탕으로 더 나은 코드를 작성하려고 노력합니다."
          }
          highlightColor={"#FDECC8"}
          prevTextLength={
            "저는 프론트엔드 개발자로서 |$기획자, 디자이너와 적극적으로 협의|$하고, |$백엔드 개발자와 긴밀하게 협력|$하는 것에 큰 가치를 두고있습니다. 프로젝트의 중심에서 |$활발한 의사소통의 다리가 되기 위해 항상 노력|$하고 있습니다.\n원활한 소통을 위해 배움에 |$한계를 두지 않고|$, 제 분야를 넘어 다른 분야에 대한 |$이해를 넓히고 있습니다|$. 상대방이 쉽게 이해할 수 있는 표현으로 소통하며, 구체적인 근거를 바탕으로 의견을 제시해 |$효율적인 협업을 진행하고 신뢰를 쌓고|$ 있습니다."
              .length
          }
        />
      </S.AboutmeSectionDescrptionWrapper>
    </S.AboutmeSectionWrapper>
  );
};

export default AboutmeSection;
