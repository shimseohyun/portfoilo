import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-top: 2rem;
  padding-bottom: 2rem;

  & > * {
    z-index: 1;
  }

  & > div {
    display: flex;
    flex-direction: column;
  }
  & > div > span {
    padding-top: 0.5rem;
  }
`;

export const FooterBackground = styled.div`
  position: absolute;
  z-index: 0;
  transform: translate(-50%, 0);
  left: 50%;
  top: 0;

  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.lightGray};
`;
