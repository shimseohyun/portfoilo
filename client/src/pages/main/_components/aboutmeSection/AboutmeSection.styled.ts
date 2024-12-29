import { getAnimationByName } from "@styles/animation";
import styled from "styled-components";

export const AboutmeSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  min-height: 100vh;
  padding-top: 3rem;
  padding-bottom: 1.75rem;
`;

export const AboutmeSectionPortfolio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 1rem;

  padding: 0.25rem;
  padding-bottom: 1.25rem;
  border-bottom: ${({ theme }) => theme.colors.border.sub} 1px solid;

  .tablet &,
  .mobile & {
    flex-direction: column;
    align-items: start;
  }

  img {
    flex-shrink: 0;

    width: 10rem;
    height: 10rem;
  }
`;

export const AboutmeSectionPortfolioTitle = styled.div`
  ${getAnimationByName("slideUp", 0.5, 0)}
`;

export const AboutmeSectionPortfolioInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  & > h3 > br {
    display: none;
  }

  .mobile & > h3 > br {
    display: flex;
  }
  p {
    color: ${({ theme }) => theme.colors.font.body_sub};
  }
`;

export const AboutmeSectionDescrptionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  & > p {
    color: ${({ theme }) => theme.colors.font.body_sub};
  }
  & > h3 {
    padding-bottom: 0.5rem;
  }

  ${getAnimationByName("slideLeft", 0.5, 0)}
`;
