import { createPortal } from "react-dom"
import { ModalOverlay, ModalContent, ModalTitle, ModalDecription, ModalList, ModalWrapperPreco, ModalTotal, ModalPrecoTotal, ModalButton } from './Modal.styled'
import { ReactComponent as ConfirmedIcon} from '../../assets/icons/icon-order-confirmed.svg'
import useItems from "../../hooks/useItems"
import ModalListItem from "../ModalListItem/ModalListItem";

const Modal = ({ isModalOpen, closeModal }) => {
  const { items, newOrder } = useItems();

  const handleNewOrder = () => {
    newOrder();
    closeModal();
  };

  if (!isModalOpen) return null;

  return createPortal(
    <ModalOverlay onClick={() => closeModal()}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ConfirmedIcon />
        
        <ModalTitle>Order Confirmed</ModalTitle>
        
        <ModalDecription>We hope you enjoy your food!</ModalDecription>
        
        <ModalList>
          {items.map(item => <ModalListItem desert={item} />)}

          <ModalWrapperPreco>
            <ModalTotal>Order Total</ModalTotal>

            <ModalPrecoTotal>{items.reduce((acc, cur) => acc + (cur.qnt * cur.preco), 0).toFixed(2)}</ModalPrecoTotal>
          </ModalWrapperPreco>
        </ModalList>
      

        <ModalButton onClick={handleNewOrder}>Start New Order</ModalButton>
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

export default Modal;