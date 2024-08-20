import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (min-width: 735px) {
    align-items: center;
  }
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 100%;
  border-radius: .5rem .5rem 0;
  padding: 2rem 1.5rem;
  max-width: 735px;
`;

export const ModalTitle = styled.h1``;

export const ModalDecription = styled.p`
  color: var(--rose500);
`;

export const ModalList = styled.ul`
  background-color: hsl(26, 54%, 97%);
  padding: 0rem 1.5rem;
  margin: 2rem 0;
  border-radius: .2rem;
`;

export const ModalWrapperPreco = styled.li`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const ModalTotal = styled.span``;

export const ModalPrecoTotal = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  
  &::before {
    content: '$';
  }
`;

export const ModalButton = styled.button`
  width: 100%;
  padding: .7rem;
  color: white;
  background-color: var(--red);
  border-radius: 2rem;
  border: none;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`;