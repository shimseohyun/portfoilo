import styled from "styled-components";

export const ProjectCardWrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0.75rem;
  border-radius: 0.75rem;
  border: ${({ theme }) => theme.colors.border.sub} 1px solid;

  width: 100%;

  & > img {
    width: 100%;
    border-radius: 0.25rem;

    background-color: pink;
  }
`;

export const ProjectCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.25rem;
  padding-bottom: 0;

  height: 100%;

  & > b {
    margin-bottom: 0.25rem;
  }
  & > p {
    flex-grow: 1;
    min-height: 3rem;
    margin-bottom: 0.5rem;
  }
`;

export const ProjectCardTagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  flex-wrap: nowrap;
`;
