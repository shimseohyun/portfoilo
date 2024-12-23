import styled, { keyframes } from "styled-components";

export const PortfolioSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  box-sizing: content-box;
  padding-top: 1rem;
  padding-bottom: 3.75rem;

  white-space: pre-wrap;
`;

export const PortfolioSectionTitle = styled.div`
  margin-bottom: -1.5rem;
  border-bottom: ${({ theme }) => theme.colors.border.sub} 1px solid;
`;

export const PortfolioSectionMainBriefWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: end;

  gap: 1.25rem;

  .mobile &,
  .tablet & {
    flex-direction: column;
    align-items: start;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;

  }
  to {
    opacity: 1;
  }
`;

export const PortfolioSectionBriefThumbnailWrapper = styled.div`
  position: relative;

  flex-shrink: 0;
  width: 22.5rem;

  .mobile & {
    width: 100%;
  }

  & > img {
    width: 100%;
  }

  & > img:not(:first-child) {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    animation: ${fadeIn} 2s ease-out;
  }
`;

export const PortfolioSectionBriefInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  & > .date {
    color: ${({ theme }) => theme.colors.font.body_sub};
  }
`;

export const PortfolioSectionURLsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > li {
    display: flex;
    gap: 0.5rem;
  }

  & > li > b {
    width: 4.5rem;
    flex-shrink: 0;
  }

  & > li > a {
    text-decoration-line: underline;
    color: ${({ theme }) => theme.colors.font.body_sub};
  }
`;

export const PortfolioSectionRolesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const PortfolioSectionRoleCard = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.625rem;
  width: 100%;

  & > .tech {
    color: ${({ theme }) => theme.colors.font.body_sub};
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    list-style-type: disc;
    list-style-position: inside;
  }
`;

export const PortfolioSectionTechCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  & > ul > li {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
`;

export const PortfolioSectionTechCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
export const PortfolioSectionTechCardImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.25rem;

  .tablet & {
    column-gap: 1rem;
  }
  .mobile & {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  // 이미지
  & > img {
    width: 100%;
  }
`;
