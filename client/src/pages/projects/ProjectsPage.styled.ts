import styled from "styled-components";

export const ProjectsPageWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .mobile & {
    grid-template-columns: repeat(1, 1fr);
  }
  column-gap: 1.25rem;
  row-gap: 1rem;

  padding: 1rem 0;
`;
