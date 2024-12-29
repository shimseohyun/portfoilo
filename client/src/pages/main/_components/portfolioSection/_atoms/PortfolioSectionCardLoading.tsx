import * as S from "../PortfolioSection.styled";

// components
import Spinner from "@components/loading/spinner";

const PortfolioSectionCardLoading = () => {
  return (
    <S.PortfolioSectionWrapper className="align-center">
      <Spinner />
    </S.PortfolioSectionWrapper>
  );
};

export default PortfolioSectionCardLoading;
