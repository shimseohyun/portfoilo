import styled from "styled-components";

import { Outlet } from "react-router-dom";
import useGetScreenSize from "@hooks/useGetScreenSize";

const DefaultLayout = () => {
  const { width } = useGetScreenSize();

  return (
    <>
      <OutletWrapper
        className={width > 720 ? "desktop" : width > 540 ? "tablet" : "mobile"}
      >
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
