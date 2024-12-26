import { useEffect } from "react";
import * as S from "./PortfolioSection.styled";

// hooks
import useGetPortfolio from "@hooks/apis/useGetPortfolio";

// components
import PortfolioSectionTechCard from "./PortfolioSectionTechCard";
import PortfolioSectionInfoCard from "./PortfolioSectionInfoCard";

interface PortfolioSectionProps {
  portfolioID: number;
}

const PortfolioSection = ({ ...props }: PortfolioSectionProps) => {
  const { portfolio, loading, error, getPortfolio } = useGetPortfolio(
    props.portfolioID
  );

  useEffect(() => {
    getPortfolio();
  }, []);

  if (error != null) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>로딩중</div>;
  }

  return (
    portfolio && (
      <S.PortfolioSectionWrapper>
        <PortfolioSectionInfoCard {...portfolio} />

        {portfolio.techs.map((tech, index) => (
          <PortfolioSectionTechCard
            key={index}
            mainColor={portfolio.mainColor}
            {...tech}
          />
        ))}
      </S.PortfolioSectionWrapper>
    )
  );
};

export default PortfolioSection;
