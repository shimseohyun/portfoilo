import { animateFloating, getAnimationByName } from "@styles/animation";
import styled from "styled-components";

export const MainSeparator1Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  margin: 3.5rem 0rem;
  padding: 4rem 0;
  width: 100%;

  & > * {
    z-index: 2;
  }
  & > span {
    padding-bottom: 2rem;
  }

  & > span,
  & > h3 {
    ${getAnimationByName("slideDown", 1, 0)}
  }

  & > p {
    color: ${({ theme }) => theme.colors.font.body_sub};
    animation: ${animateFloating} 2s ease-in-out infinite;
  }
`;

export const MainSeparator1Content = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;

  width: 100vw;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.background.lightGray};

  ${getAnimationByName("fadeIn", 1, 0)}
`;
