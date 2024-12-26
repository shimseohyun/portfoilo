import { css, keyframes } from "styled-components";

export const changeFoldStateAnimation = css`
  transition: height 0.5s ease;
`;

export const onClickButtonAnimation = css`
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const animateFloating = keyframes`
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(8px);
  }

  0% {
    transform: translatey(0px);
  }
`;

export const animateFadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const animateSlideUp = keyframes`
  from {
    margin-top: -20px;
    opacity: 0;
  }

  to {
    margin-top: 0%;
    opacity: 1;
  }
`;

export const animateSlideDown = keyframes`
  from {
    margin-top: 20px;
    opacity: 0;
  }

  to {
    margin-top: 0%;
    opacity: 1;
  }
`;

export const animateSlideLeft = keyframes`
  from {
    margin-left: -40px;
    opacity: 0;
  }

  to {
    margin-left: 0px;
    opacity: 1;
  }
`;

export const animateSlideRight = keyframes`
  from {
    margin-left: 40px;
    opacity: 0;
  }

  to {
    margin-left: 0px;
    opacity: 1;
  }
`;

export const animateHighlightText = keyframes`
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: -100%, 0;
  }
`;

export const getAnimationByName = (
  animation: string,
  duration: number,
  delay: number
) => {
  switch (animation) {
    case "fadeIn":
      return css`
        opacity: 0;
        animation: ${animateFadeIn} ${duration}s ease-in-out forwards;
        animation-delay: ${delay}s;
      `;
    case "slideRight":
      return css`
        opacity: 0;
        animation: ${animateSlideRight} ${duration}s ease-in-out forwards;
        animation-delay: ${delay}s;
      `;
    case "slideLeft":
      return css`
        opacity: 0;
        animation: ${animateSlideLeft} ${duration}s ease-in-out forwards;
        animation-delay: ${delay}s;
      `;
    case "slideUp":
      return css`
        opacity: 0;
        animation: ${animateSlideUp} ${duration}s ease-in-out forwards;
        animation-delay: ${delay}s;
      `;
    case "slideDown":
      return css`
        opacity: 0;
        animation: ${animateSlideDown} ${duration}s ease-in-out forwards;
        animation-delay: ${delay}s;
      `;
    default:
      return null;
  }
};
