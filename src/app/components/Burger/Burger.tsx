import { FunctionComponent, PropsWithChildren } from 'react';
import BurgerIngredient from 'app/components/Burger/BurgerIngredient/BurgerIngredient';
import Ingredients from 'app/model/Ingredients';
import { BurgerContainer } from './Burger.styles';

type BurgerIngredientsProps = {
  ingredients: Ingredients;
};

const Burger: FunctionComponent<BurgerIngredientsProps> = (props: PropsWithChildren<BurgerIngredientsProps>): JSX.Element => {
  const ingredientsKeys: Array<keyof Ingredients> = Object.keys(props.ingredients) as Array<keyof Ingredients>;
  const transformedIngredient = ingredientsKeys
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
      });
    })
    .reduce((previousElements, currentElement) => {
      return previousElements.concat(currentElement);
    }, []);
  if (transformedIngredient.length === 2) {
    return (
      <BurgerContainer>
        {transformedIngredient}
        <p>Please start adding ingredients</p>
      </BurgerContainer>
    );
  }
  return <BurgerContainer>{transformedIngredient}</BurgerContainer>;
};

export default Burger;
