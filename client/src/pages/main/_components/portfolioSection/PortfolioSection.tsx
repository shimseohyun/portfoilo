import { useEffect } from "react";
import * as S from "./PortfolioSection.styled";

// components
import PortfolioSectionInfoCard from "./_atoms/PortfolioSectionInfoCard";
import PortfolioSectionCardLoading from "./_atoms/PortfolioSectionCardLoading";
import PortfolioSectionCardError from "./_atoms/PortfolioSectionCardError";

// hooks
import useGetPortfolio from "@hooks/apis/useGetPortfolio";

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
    return <PortfolioSectionCardError errorText={error} />;
  }

  if (loading) {
    return <PortfolioSectionCardLoading />;
  }

  return (
    portfolio && (
      <S.PortfolioSectionWrapper>
        <PortfolioSectionInfoCard {...portfolio} />
      </S.PortfolioSectionWrapper>
    )
  );
};

export default PortfolioSection;
