import { CartsButton, CartsContainer, CartsNome, CartsPrecoTotal, CartsPrecoUnitario, CartsQnt, CartsWrapper } from "./Carts.styled";
import { ReactComponent as RemoveIcon } from '../../assets/icons/icon-remove-item.svg'
import useItems from "../../hooks/useItems";

const Carts = ({ item }) => {
  const { nome, qnt, preco } = item;
  const { removerItem } = useItems();

  return ( 
    <CartsContainer>
      <CartsNome>{nome}</CartsNome>

      <CartsWrapper>
        <CartsQnt>{qnt}</CartsQnt>
        <CartsPrecoUnitario>{preco.toFixed(2)}</CartsPrecoUnitario>
        <CartsPrecoTotal>{(qnt * preco).toFixed(2)}</CartsPrecoTotal>
      </CartsWrapper>

      <CartsButton
        onClick={() => removerItem(nome)}
      ><RemoveIcon /></CartsButton>
    </CartsContainer>
  );
}
 
export default Carts;