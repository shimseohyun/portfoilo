import React, { Suspense } from "react";

import AboutmeSection from "@components/main/aboutmeSection/AboutmeSection";

const PortfolioSection = React.lazy(
  () => import("@components/main/portfolioSection/PortfolioSection")
);

const MainPage = () => {
  return (
    <>
      <AboutmeSection />
      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <PortfolioSection portfolioID={1} />
        <PortfolioSection portfolioID={2} />
        <PortfolioSection portfolioID={3} />
      </Suspense>
    </>
  );
};

export default MainPage;
