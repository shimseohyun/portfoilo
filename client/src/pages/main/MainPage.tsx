import React, { Suspense } from "react";

import AboutmeSection from "@components/main/aboutmeSection/AboutmeSection";
import MainSeparator1 from "@components/main/separator/MainSeparator1";

const PortfolioSection = React.lazy(
  () => import("@components/main/portfolioSection/PortfolioSection")
);

const MainPage = () => {
  return (
    <>
      <AboutmeSection />
      <MainSeparator1 />
      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <PortfolioSection portfolioID={4} />
        <PortfolioSection portfolioID={1} />
        <PortfolioSection portfolioID={5} />
        <PortfolioSection portfolioID={2} />
      </Suspense>
    </>
  );
};

export default MainPage;
