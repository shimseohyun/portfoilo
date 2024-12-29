import { animateSlideUp } from "@styles/animation";
import { defaultFontSetting, defaultHorzontalSetting } from "@styles/default";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderPadding = styled.div`
  height: 3.5rem;
`;

export const HeaderWrapper = styled.header`
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

export const HeaderMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${defaultHorzontalSetting}
`;

export const HeaderContentWrapper = styled.section`
  position: relative;
  display: flex;
  gap: 1rem;
`;

export const HeaderLink = styled(Link)`
  padding: 0.75rem 0;
`;

export const HeaderButton = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.25rem;

  padding: 0.75rem 0;

  & > img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const SubContentWrapper = styled.div`
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

export const SubContent = styled(Link)``;

export const HeaderBackgroud = styled.div`
  z-index: 998;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
