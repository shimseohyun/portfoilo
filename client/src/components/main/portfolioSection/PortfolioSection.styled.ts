import { getAnimationByName } from "@styles/animation";
import styled from "styled-components";

export const PortfolioSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  box-sizing: content-box;
  padding-top: 1rem;
  padding-bottom: 3.75rem;

  white-space: pre-wrap;
`;

export const PortfolioSectionInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const PortfolioSectionTitle = styled.div`
  margin-bottom: -1.5rem;
  border-bottom: ${({ theme }) => theme.colors.border.sub} 2px solid;
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

export const PortfolioSectionBriefThumbnailWrapper = styled.div`
  position: relative;
  overflow: hidden;

  flex-shrink: 0;
  width: 22.5rem;

  .mobile & {
    width: 100%;
  }

  ${getAnimationByName("slideUp", 1, 0)}
`;

interface PortfolioSectionBriefThumbnailProps {
  $backgroundColor: string;
  $animation?: string;
}

export const PortfolioSectionBriefThumbnailBase = styled.img<PortfolioSectionBriefThumbnailProps>`
  width: 100%;
  padding-top: 56.25%;

  background: ${(props) => props.$backgroundColor};
`;

export const PortfolioSectionBriefThumbnail = styled.img<PortfolioSectionBriefThumbnailProps>`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  z-index: 0;

  width: 100%;

  ${(props) => {
    return props.$animation ? getAnimationByName(props.$animation, 1, 0) : null;
  }}
`;

export const PortfolioSectionBriefInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  & > .date {
    color: ${({ theme }) => theme.colors.font.body_sub};
  }

  ${getAnimationByName("slideUp", 1, 0.25)}
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
    flex-grow: 1;
    text-decoration-line: underline;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;

    color: ${({ theme }) => theme.colors.font.body_sub};
  }

  & > span {
    margin-top: 0.25rem;
    margin-bottom: -0.5rem;
    color: ${({ theme }) => theme.colors.font.body_sub};
  }

  ${getAnimationByName("slideUp", 1, 0.75)}
`;

export const PortfolioSectionRolesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  .mobile & {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 1.5rem;
  }
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
    list-style-type: disc;
    padding-left: 1rem;
  }

  & > ul > li {
    margin-bottom: 0.125rem;
  }
  & > ul > li:last-child {
    margin-bottom: 0;
  }

  ${getAnimationByName("slideLeft", 1, 0)}
`;

export const PortfolioSectionTechCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PortfolioSectionTechCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 0.5rem;
  border-bottom: ${({ theme }) => theme.colors.border.sub} 1px solid;

  & > img {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

interface PortfolioSectionTechCardDescriptionProps {
  $isVisible: boolean;
}
export const PortfolioSectionTechCardDescription = styled.div<PortfolioSectionTechCardDescriptionProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  ${getAnimationByName("slideUp", 1, 0)}
`;

interface PortfolioSectionTechCardImagesWrapperProps {
  $itemCount: number;
}
export const PortfolioSectionTechCardImagesWrapper = styled.div<PortfolioSectionTechCardImagesWrapperProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.$itemCount}, 1fr)`};

  column-gap: 1rem;

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
