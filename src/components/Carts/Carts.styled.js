import styled from "styled-components";

export const CartsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding: 1rem 0;
  border-bottom: 2px solid hsl(0, 0%, 97%);
`;

export const CartsName = styled.p`
  font-weight: 600;
`;

export const CartsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CartsQnt = styled.span`
  color: var(--red);
  font-weight: 600;

  &::after {
    content: 'x';
  }
`;

export const CartsPrecoUnitario = styled.span`
  color: var(--rose400);

  &::before {
    content: '@ $';
  }
`;

export const CartsPrecoTotal = styled.span`
  color: var(--rose500);
  font-weight: 600;

  &::before {
    content: '$';
  }
`;

export const CartsButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  background-color: transparent;
  border: 1px solid var(--rose400);
  border-radius: 100%;
  width: 1.1rem;
`;