import { CardButton, CardContainer, CardDescription, CardImage, CardImageWrapper, CardPrice, CardCategory, CardName, CardContainerWrapper } from "./Card.styled";
import { ReactComponent as Icone} from './../../assets/icons/icon-add-to-cart.svg'
import useItems from '../../hooks/useItems';

const Card = ({ deserts }) => {
  const { items, adicionaItem, removerItem, removerQnt } = useItems();

  return ( 
    <>
      {deserts.map(desert => {
        return (
          <CardContainer key={desert.name}>
            <CardContainerWrapper>              
              <CardImageWrapper>
                <CardImage>
                <source srcSet={desert.image.desktop} media="(min-width: 1024px)" />
                <source srcSet={desert.image.tablet} media="(max-width: 1024px)" />
                <source srcSet={desert.image.mobile} media="(max-width: 768px)" />
                <img src={desert.image.mobile} alt={`An image of ${desert.name}`} />
                </CardImage>
              </CardImageWrapper>
              
              <CardButton
                onClick={() => adicionaItem(desert)}
              ><Icone />Add to Cart</CardButton>
            </CardContainerWrapper>

            <CardDescription>
              <CardCategory>{desert.category}</CardCategory>
              <CardName>{desert.name}</CardName>
              <CardPrice>{desert.price.toFixed(2)}</CardPrice>
            </CardDescription>
          </CardContainer>
        )
      })}
    </>
  );
}
 
export default Card;