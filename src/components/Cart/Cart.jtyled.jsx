import styled from "styled-components";

export const CartContainer = styled.aside`
  flex: 1 1 375px;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
  height: fit-content;
  margin-top: .4rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: 1300px) {
    flex-grow: 0;
  }
`;

export const CartTitle = styled.h2`
  color: var(--red);
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const CartSpan = styled.span``;

export const CartPrice = styled.span`
  font-weight: 700;
  font-size: 1.7rem;

  &::before {
    content: '$';
  }
`;

export const CartCarbonNeutral = styled.div`
  width: 100%;
  background-color: var(--rose50);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  padding: 1rem;
`;

export const CartCarbonNeutralDescription = styled.span`

  span {
    font-weight: 600;
  }
`;

export const CartConfirmOrder = styled.button`
  background-color: var(--red);
  color: white;
  border-radius: 2rem;
  border: none;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  font-size: 1.1rem;
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