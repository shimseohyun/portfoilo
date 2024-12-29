import styled from "styled-components";

import { Outlet } from "react-router-dom";
import useGetScreenSize from "@hooks/useGetScreenSize";

// components
import Header from "@components/layout/header/Header";

const DefaultLayout = () => {
  const { screenType } = useGetScreenSize();

  return (
    <>
      <OutletWrapper className={screenType}>
        <Header />
        <Outlet />
      </OutletWrapper>
    </>
  );
};

export default DefaultLayout;

const OutletWrapper = styled.section`
  padding-left: 3rem;
  padding-right: 3rem;

  &.mobile {
    padding-left: 1rem;
    padding-right: 1rem;
  }

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
