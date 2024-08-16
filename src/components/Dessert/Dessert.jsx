import { DessertContainer, DessertTitle } from "./Dessert.styled"
import json from '../../data.json'
import Cards from "../Cards/Cards";

const Dessert = () => {
  return ( 
    <DessertContainer>
      <DessertTitle>Desserts</DessertTitle>

      <Cards deserts={json} />
    </DessertContainer>
  );
}
 
export default Dessert;