import { ModalListContainer, ModalListImg, ModalListItemContainer, ModalListNome, ModalListPreco, ModalListPrecoTotal, ModalListQnt, ModalListWrapper } from "./ModalListItem.styled";

const ModalListItem = ({ desert }) => {
  const { nome, imagem, preco, qnt } = desert;

  return ( 
    <ModalListItemContainer>
      <ModalListImg src={imagem} />

      <ModalListContainer>
        <ModalListNome>{nome}</ModalListNome>

        <ModalListWrapper>
          <ModalListQnt>{qnt}</ModalListQnt>

          <ModalListPreco>{preco.toFixed(2)}</ModalListPreco>
        </ModalListWrapper>
      </ModalListContainer>

      <ModalListPrecoTotal>{(qnt * preco).toFixed(2)}</ModalListPrecoTotal>
    </ModalListItemContainer>
  );
};
 
export default ModalListItem;