import { CartCarbonNeutral, CartCarbonNeutralDescription, CartConfirmOrder, CartContainer, CartEmpty, CartPrice, CartSpan, CartTitle, CartWrapper } from "./Cart.jtyled";
import useItems from "../../hooks/useItems";
import Carts from "../Carts/Carts";
import { ReactComponent as Tree }  from "../../assets/icons/icon-carbon-neutral.svg";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Cart = () => {
  const { items } = useItems();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true)
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return ( 
    <CartContainer>
      <CartTitle>Your Cart ({items?.length})</CartTitle>
      {items?.length > 0 ? 
        <>
          {items.map(item => <Carts item={item} />)}
          <CartWrapper>
            <CartSpan>Order Total</CartSpan>
            
            <CartPrice>
              {items.reduce((acc, cur) => {
                return acc + (cur.preco * cur.qnt);
              }, 0).toFixed(2)}
            </CartPrice>

          </CartWrapper>
          <CartCarbonNeutral>
            <Tree />
            <CartCarbonNeutralDescription>This is a <span>carbon-neutral</span> delivery</CartCarbonNeutralDescription>
          </CartCarbonNeutral>

          <CartConfirmOrder onClick={openModal}>
            Confirm Order
          </CartConfirmOrder>
        </>
        : 
          <CartEmpty />
      }
      <Modal 
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </CartContainer>
  );
}
 
export default Cart;