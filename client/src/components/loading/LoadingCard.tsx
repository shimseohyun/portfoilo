import Spinner from "@components/loading/spinner";
import styled from "styled-components";

const LoadingCard = () => {
  return (
    <LoadingCardWrapper>
      <Spinner />
    </LoadingCardWrapper>
  );
};

export default LoadingCard;

const LoadingCardWrapper = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
