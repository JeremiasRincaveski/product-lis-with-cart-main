import { useState } from "react";
import { CartContainer, CartEmpty, CartTitle } from "./Cart.jtyled";

const Cart = () => {
  const [countCarts, setCountCarts] = useState(0);

  return ( 
    <CartContainer>
      <CartTitle>Your Cart ({countCarts})</CartTitle>
      {countCarts > 0 ?
         <span>sucesso</span> 
        : 
          <CartEmpty />
      }
    </CartContainer>
  );
}
 
export default Cart;