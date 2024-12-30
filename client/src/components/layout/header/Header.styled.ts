import { animateSlideUp } from "@styles/animation";
import { defaultFontSetting, defaultHorzontalSetting } from "@styles/default";
import theme from "@styles/theme";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderPadding = styled.div`
  height: 3.5rem;
`;

export const HeaderBackgroundWrapper = styled.header`
  position: fixed;
  transform: translate(-50%, 0%);
  top: 0;
  left: 50%;
  z-index: 9000;

  display: flex;
  justify-content: center;

  width: 100vw;

  background-color: white;

  ${defaultFontSetting}
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${defaultHorzontalSetting}
`;

export const HeaderMenuWrapper = styled.section`
  display: flex;
  gap: 1rem;
`;

// 헤더의 버튼들
const headerButtonStyle = css`
  padding: 0.75rem 0;
`;

interface HeaderButtonProps {
  $isCurrent: boolean;
}
export const HeaderButton = styled(Link)<HeaderButtonProps>`
  ${headerButtonStyle}
  color: ${({ theme, $isCurrent }) =>
    $isCurrent ? theme.colors.font.head : theme.colors.font.body_disable};
`;

export const HeaderItemWithSubButton = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.25rem;

  padding: 0.75rem 0;

  & > img {
    width: 1.5rem;
    height: 1.5rem;
    opacity: 50%;
  }
  color: ${({ theme }) => theme.colors.font.body_disable};
`;

// 헤더의 서브 버튼의 요소들
export const HeaderItemWithSubWrapper = styled.section`
  position: relative;

  display: flex;
  gap: 1rem;
`;

export const HeaderItemWithSubMenuWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 2rem;

  padding: 0.75rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.5rem;

  z-index: 999;
  background-color: white;

  animation: ${animateSlideUp} 0.25s ease-in-out forwards;
`;

export const HeaderTouchArea = styled.div`
  z-index: 998;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
