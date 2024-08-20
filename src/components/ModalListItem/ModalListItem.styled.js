import styled from "styled-components";

export const ModalListItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  height: calc(60px + 3rem);
  border-bottom: 2px solid hsl(26, 30%, 95%);
  padding: 1.5rem 0;
  width: 100%;
`;

export const ModalListImg = styled.img`
  border-radius: .3rem;
  height: 100%;
`;

export const ModalListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  `;

export const ModalListNome = styled.p`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 36vw;
  font-weight: 600;
`

export const ModalListWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ModalListQnt = styled.span`
  color: var(--red);
  font-weight: 600;

  &::after {
    content: 'x';
  }
`;

export const ModalListPreco = styled.span`
  color: var(--rose400);

  &::before {
    content: '@ $';
  }
`;

export const ModalListPrecoTotal = styled.span`
  margin-left: auto;
  font-weight: 600;
  &::before {
    content: '$';
  }
`;