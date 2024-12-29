import * as S from "../PortfolioSection.styled";

interface PortfolioSectionCardErrorProps {
  errorText: string;
}

const PortfolioSectionCardError = ({
  ...props
}: PortfolioSectionCardErrorProps) => {
  return (
    <S.PortfolioSectionWrapper className="align-center">
      <S.PortfolioSectionCardErrorContent>
        <img src={"/icons/warning_light_gray.svg"} />
        <p>{props.errorText}</p>
      </S.PortfolioSectionCardErrorContent>
    </S.PortfolioSectionWrapper>
  );
};

export default PortfolioSectionCardError;
