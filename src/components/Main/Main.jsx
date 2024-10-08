import { ItemsProvider } from "../../context/ItemsContext";
import Cart from "../Cart/Cart";
import Dessert from "../Dessert/Dessert";
import Modal from "../Modal/Modal";
import StyledMain from "./Main.styled";

const Main = () => {
  return ( 
    <ItemsProvider>
      <StyledMain>
        <Dessert />
        <Cart />
      </StyledMain>
    </ItemsProvider>
  );
}
 
export default Main;