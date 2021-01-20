import { FunctionComponent, PropsWithChildren } from 'react';
import Ingredients from 'app/model/Ingredients';
import { BreadBottom, BreadTop, Seeds1, Seeds2, Meat, Bacon, Cheese, Salad } from './BurgerIngredient.styles';

type BurgerIngredientProps = {
  type: keyof Ingredients;
};

const BurgerIngredient: FunctionComponent<BurgerIngredientProps> = (
  props: PropsWithChildren<BurgerIngredientProps>
): JSX.Element => {
  let ingredient: JSX.Element;

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <BreadBottom />;
      break;
    case 'bread-top':
      ingredient = (
        <BreadTop>
          <Seeds1 />
          <Seeds2 />
        </BreadTop>
      );
      break;
    case 'meat':
      ingredient = <Meat />;
      break;
    case 'cheese':
      ingredient = <Cheese />;
      break;
    case 'bacon':
      ingredient = <Bacon />;
      break;
    case 'salad':
      ingredient = <Salad />;
      break;
    default:
      ingredient = <div />;
  }
  return ingredient;
};

export default BurgerIngredient;
