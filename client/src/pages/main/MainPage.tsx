import React, { Suspense } from "react";

// hooks
import useIndex from "@hooks/useIndex";

// components
import AboutmeSection from "././_components/aboutmeSection/AboutmeSection";
import MainSeparator1 from "././_components/separator/MainSeparator1";
import MainIndex from "./_components/index/MainIndex";
import MainSeparator2 from "./_components/separator/MainSeparator2";

const PortfolioSection = React.lazy(
  () => import("././_components/portfolioSection/PortfolioSection")
);

const MainPage = () => {
  const { indexs } = useIndex();

  return (
    <>
      <MainIndex indexs={indexs} />

      <AboutmeSection />

      <MainSeparator1 />

      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <PortfolioSection portfolioID={4} />
        <PortfolioSection portfolioID={1} />
        <MainSeparator2 />
        <PortfolioSection portfolioID={5} />
        <PortfolioSection portfolioID={2} />
        <PortfolioSection portfolioID={3} />
      </Suspense>
      <div style={{ width: "100%", height: "50px" }} />
    </>
  );
};

export default MainPage;
