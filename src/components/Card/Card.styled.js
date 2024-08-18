import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 2rem;
  margin-top: 1.5rem;
`;

export const CardContainerWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 195px;
  border-radius: .5rem;
  
  @media(min-width: 1024px) {
    height: 305px;
  }
`;

export const CardImage = styled.picture`
  img {
    position: absolute;
    top: -3.3rem;
    width: 100%;
    height: 300px;
    background-position: top;
    background-size: cover;
    
    @media(min-width: 1024px) {
      top: 0;
    }
  }
  
`;

export const CardButton = styled.button`
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: .5rem;
  font-weight: 600;
  padding: .5rem 1rem;
  border-radius: 3rem;
  background-color: var(--rose50);
  white-space: nowrap;
  border: 1px solid var(--rose300);
`;

export const CardDescription = styled.div`

`;

export const CardCategory = styled.span`
  color: var(--rose400);
  font-weight: 400;
`;

export const CardName = styled.h2`
  font-weight: 600;
  font-size: 1.1rem;
`;

export const CardPrice = styled.span`
  color: var(--red);
  font-weight: 600;
  
  &::before {
    content: '$';
  }
`;