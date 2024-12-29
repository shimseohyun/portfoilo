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
    transform: translatey(6px);
  }

  100% {
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

export const animateSlideLeftText = keyframes`
  from {
    transform: translatex(-40px);
    opacity: 0;
  }

  to {
    transform: translatex(0px);
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

const animations = {
  fadeIn: animateFadeIn,
  slideRight: animateSlideRight,
  slideLeft: animateSlideLeft,
  slideLeftText: animateSlideLeftText,
  slideUp: animateSlideUp,
  slideDown: animateSlideDown,
};

export type AnimationKey = keyof typeof animations;

export const getAnimationByName = (
  animation: AnimationKey,
  duration: number,
  delay: number
) => {
  const selectedAnimation = animations[animation];

  if (!selectedAnimation) return null;

  return css`
    opacity: 0;

    .non-visible,
    .non-visible & {
      animation: none !important;
    }

    .visible & {
      animation: ${selectedAnimation} ${duration}s ease-in-out forwards;
      animation-delay: ${delay}s;
    }
  `;
};
