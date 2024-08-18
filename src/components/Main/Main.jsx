import Cart from "../Cart/Cart";
import Dessert from "../Dessert/Dessert";
import StyledMain from "./Main.styled";

const Main = () => {
  return ( 
    <StyledMain>
      <Dessert />
      <Cart />
    </StyledMain>
  );
}
 
export default Main;