import styled from "styled-components";

import { Outlet } from "react-router-dom";
import useGetScreenSize from "@hooks/useGetScreenSize";

// components
import Header from "@components/layout/header/Header";
import { defaultFontSetting, defaultHorzontalSetting } from "@styles/default";

const DefaultLayout = () => {
  const { screenType } = useGetScreenSize();

  return (
    <>
      <Header />
      <OutletWrapper className={screenType}>
        <Outlet />
      </OutletWrapper>
    </>
  );
};

export default DefaultLayout;

const OutletWrapper = styled.section`
  ${defaultHorzontalSetting}
  ${defaultFontSetting}
`;
