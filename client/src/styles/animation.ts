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

// 텍스트용
export const animateSlideUp = keyframes`
  from {
    transform: translatey(-20px);
    opacity: 0;
  }

  to {
    transform: translatey(0px);
    opacity: 1;
  }
`;

export const animateSlideDown = keyframes`
  from {
    transform: translatey(20px);
    opacity: 0;
  }

  to {
    transform: translatey(0px);
    opacity: 1;
  }
`;

export const animateSlideLeft = keyframes`
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
    transform: translatex(40px);
    opacity: 0;
  }

  to {
    transform: translatex(0px);
    opacity: 1;
  }
`;

// 이미지용
export const animateSlideUpImage = keyframes`
  from {
    margin-top: -20px;
    opacity: 0;
  }

  to {
    margin-top: 0px;
    opacity: 1;
  }
`;

export const animateSlideDownImage = keyframes`
  from {
    margin-top: 20px;
    opacity: 0;
  }

  to {
    margin-top: 0%;
    opacity: 1;
  }
`;

export const animateSlideLeftImage = keyframes`
  from {
    margin-left: -40px;
    opacity: 0;
  }

  to {
    margin-left: 0px;
    opacity: 1;
  }
`;

export const animateSlideRightImage = keyframes`
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
  slideUp: animateSlideUp,
  slideDown: animateSlideDown,
  // 이미지용
  slideRightImage: animateSlideRightImage,
  slideLeftImage: animateSlideLeftImage,
  slideUpImage: animateSlideUpImage,
  slideDownImage: animateSlideDownImage,
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
