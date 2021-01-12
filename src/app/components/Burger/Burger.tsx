import { FunctionComponent, PropsWithChildren } from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import Ingredients from '../../model/Ingredients';

import classes from './Burger.module.css';

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
      <div className={classes.Burger}>
        {transformedIngredient}
        <p>Please start adding ingredients</p>
      </div>
    );
  }
  return <div className={classes.Burger}>{transformedIngredient}</div>;
};

export default Burger;
