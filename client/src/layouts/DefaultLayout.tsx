import styled from "styled-components";

import { Outlet } from "react-router-dom";

// hooks
import useGetScreenSize from "@hooks/useGetScreenSize";

// components
import Header from "@components/layout/header/Header";
import Footer from "@components/layout/footer/Footer";
import { defaultHorzontalSetting } from "@styles/default";

// styles

const DefaultLayout = () => {
  const { screenType } = useGetScreenSize();

  return (
    <DefaultLayoutWrapper className={screenType}>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <Footer />
    </DefaultLayoutWrapper>
  );
};

export default DefaultLayout;

const OutletWrapper = styled.section`
  min-height: 100vh;
`;

const DefaultLayoutWrapper = styled.div`
  ${defaultHorzontalSetting}
`;
