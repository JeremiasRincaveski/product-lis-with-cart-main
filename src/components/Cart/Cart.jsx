import { CartCarbonNeutral, CartCarbonNeutralDescription, CartConfirmOrder, CartContainer, CartEmpty, CartPrice, CartSpan, CartTitle, CartWrapper } from "./Cart.jtyled";
import useItems from "../../hooks/useItems";
import Carts from "../Carts/Carts";
import { ReactComponent as Tree }  from "../../assets/icons/icon-carbon-neutral.svg";

const Cart = () => {
  const { items } = useItems();

  return ( 
    <CartContainer>
      <CartTitle>Your Cart ({items.length})</CartTitle>
      {items.length > 0 ? 
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

          <CartConfirmOrder>
            Confirm Order
          </CartConfirmOrder>
        </>
        : 
          <CartEmpty />
      }
    </CartContainer>
  );
}
 
export default Cart;