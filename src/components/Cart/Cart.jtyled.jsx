import styled from "styled-components";

export const CartContainer = styled.aside`
  flex: 1 1 332px;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  height: fit-content;
  margin-top: .4rem;

  @media (min-width: 965px) {
    flex-grow: 0;
  }
`;

export const CartTitle = styled.h2`
  color: var(--red);
`;

export const CartEmpty = styled.div`
  position: relative;
  background: url('images/illustration-empty-cart.svg') no-repeat center;
  background-size: 150px;
  width: 100%;
  height: 15rem;

  &::before {
    content: 'Your added items will appear here';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    white-space: nowrap;
    color: var(--rose500);
    font-weight: 600;
    font-size: .8rem;
  }
`;