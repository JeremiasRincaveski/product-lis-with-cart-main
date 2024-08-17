import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 1000px;

  @media(min-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;