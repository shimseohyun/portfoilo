import styled from "styled-components";

export const ExperienceCardWrapper = styled.section`
  display: flex;
  gap: 1rem;
  padding-bottom: 3rem;

  .mobile & {
    flex-direction: column;
    gap: 0.5rem;
  }

  & > p {
    flex-shrink: 0;
    width: 160px;

    color: ${({ theme }) => theme.colors.font.body_sub};
  }
`;

export const ExperienceCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
