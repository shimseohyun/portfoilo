import { animateSlideRight, animateSlideUp } from "@styles/animation";
import styled from "styled-components";

export const MainIndexFloatingButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  border: ${({ theme }) => theme.colors.border.sub} 1px solid;
  background-color: white;
`;

export const MainIndexWrapper = styled.section`
  position: fixed;
  z-index: 900;

  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;

  .desktop &,
  .tablet & {
    bottom: 20px;
    right: 20px;
  }

  .mobile & {
    width: 100%;
    bottom: 0px;
    left: 0px;
  }
`;

export const MainIndexContentwrapper = styled.section`
  .desktop &,
  .tablet & {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 0.5rem;

    width: 100%;
    padding: 1rem;

    border-radius: 0.5rem;
    border: ${({ theme }) => theme.colors.border.sub} 1px solid;
  }

  .mobile & {
    width: 100%;

    overflow: scroll;

    display: flex;
    flex-direction: row;
    gap: 1rem;

    padding: 0rem 1rem;

    border: none;
    border-top: ${({ theme }) => theme.colors.border.sub} 1px solid;
  }

  background-color: white;
`;

interface MainIndexContentProps {
  $isCurrent: boolean;
}

export const MainIndexContent = styled.div<MainIndexContentProps>`
  color: ${({ $isCurrent, theme }) =>
    $isCurrent ? theme.colors.font.body : theme.colors.font.body_disable};

  .mobile & {
    padding: 1.25rem 0.5rem;
    flex-shrink: 0;

    animation: ${animateSlideRight} 0.25s ease-in-out forwards;
  }

  .tablet &,
  .desktop & {
    animation: ${animateSlideUp} 0.25s ease-in-out forwards;
  }

  &:hover {
    text-decoration-line: underline;
  }
`;
