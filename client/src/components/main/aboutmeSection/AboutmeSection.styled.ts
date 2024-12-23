import styled from "styled-components";

export const AboutmeSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding-top: 3rem;
  padding-bottom: 1.75rem;
`;

export const AboutmeSectionPortfolio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 1rem;

  padding: 0rem 1rem;

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
export const AboutmeSectionPortfolioInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  p {
    color: ${({ theme }) => theme.colors.font.body_sub};
  }
`;

export const AboutmeSectionDescrption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  border-radius: 0.5rem;
  padding: 1rem;

  background-color: #f0f2f8;
`;
