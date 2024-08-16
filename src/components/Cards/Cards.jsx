import Card from "../Card/Card";
import { CardsContainer } from "./Cards.styled";

const Cards = ({ deserts }) => {
  return ( 
    <CardsContainer>
      <Card deserts={deserts} />
    </CardsContainer>
  );
}
 
export default Cards;