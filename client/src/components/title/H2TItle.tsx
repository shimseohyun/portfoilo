import styled from "styled-components";

interface H2TitleProps {
  children: React.ReactNode;
}

const H2Title = ({ children }: H2TitleProps) => {
  return <H2TitleWrapper>{children}</H2TitleWrapper>;
};

export default H2Title;

const H2TitleWrapper = styled.h2`
  border-bottom: ${({ theme }) => theme.colors.border.sub} 2px solid;

  width: 100%;
  padding-bottom: 0.25rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;
