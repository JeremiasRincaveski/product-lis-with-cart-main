import { CardButton, CardContainer, CardDescription, CardImage, CardImageWrapper, CardPrice, CardCategory, CardName, CardContainerWrapper } from "./Card.styled";
import useItems from '../../hooks/useItems';
import { ReactComponent as Icone} from './../../assets/icons/icon-add-to-cart.svg';
import { ReactComponent as Decrement } from "../../assets/icons/icon-decrement-quantity.svg";
import { ReactComponent as Increment } from "../../assets/icons/icon-increment-quantity.svg";

const Card = ({ deserts }) => {
  const { items, adicionaItem, removerQnt } = useItems();

  return ( 
    <>
      {deserts.map(desert => {
        return (
          <CardContainer key={desert.name}>
            <CardContainerWrapper>              
              <CardImageWrapper $qntMaiorQueZero={items?.some(item => item.nome === desert.name)}>
                <CardImage>
                <source srcSet={desert.image.desktop} media="(min-width: 1024px)" />
                <source srcSet={desert.image.tablet} media="(max-width: 1024px)" />
                <source srcSet={desert.image.mobile} media="(max-width: 768px)" />
                <img src={desert.image.mobile} alt={`An image of ${desert.name}`} />
                </CardImage>
              </CardImageWrapper>
              
              <CardButton
                $isSelect={items?.find(item => item.nome === desert.name)?.qnt > 0 ? true : false}
                
              >
                {items?.some(item => item.nome === desert.name && item.qnt > 0) ? 
                  (<>
                    <Decrement 
                      className="isSelect cursor" 
                      onClick={() => removerQnt(desert.name)}
                    />
                    {items.find(item => item.nome === desert.name).qnt}
                    <Increment
                     className="isSelect cursor"
                     onClick={() => adicionaItem(desert)}
                    />
                  </>)
                  :
                  (<>
                    <span
                      onClick={() => adicionaItem(desert)}
                      className="cursor"
                    >
                      <Icone />Add to Cart
                    </span>
                  </>)
                }
              </CardButton>
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