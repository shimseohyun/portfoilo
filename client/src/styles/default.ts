import { css } from "styled-components";

export const defaultHorzontalSetting = css`
  padding-left: 3rem;
  padding-right: 3rem;

  &.mobile,
  & .mobile {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  width: 100%;
  max-width: 960px;
`;

export const defaultFontSetting = css`
  ${({ theme }) => theme.fonts.b1};
  color: ${({ theme }) => theme.colors.font.body};

  b {
    ${({ theme }) => theme.fonts.b1_bold};
  }

  .b3 {
    ${({ theme }) => theme.fonts.b3};
  }

  .b3_bold {
    ${({ theme }) => theme.fonts.b3_bold};
  }

  h1 {
    ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.font.head};
  }

  h2 {
    ${({ theme }) => theme.fonts.h2};
    color: ${({ theme }) => theme.colors.font.head};
  }

  h3 {
    ${({ theme }) => theme.fonts.h3};
    color: ${({ theme }) => theme.colors.font.head};
  }
`;
