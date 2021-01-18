import { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Ingredients from '../../model/Ingredients';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

type BurgerState = {
  ingredients: Ingredients;
  totalPrice: number;
};

const INGREDIENTS_PRICES = {
  'bread-top': 0,
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
  'bread-bottom': 1,
};

class BurgerBuilder extends Component {
  state: BurgerState = {
    ingredients: {
      'bread-top': 1,
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
      'bread-bottom': 1,
    },
    totalPrice: 4,
  };

  addIngredientsHandler = (type: keyof Ingredients): void => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
  };

  removeIngredients = (type: keyof Ingredients): void => {
    console.log(type);
  };

  render(): JSX.Element {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientsHandler} />
      </>
    );
  }
}

export default BurgerBuilder;
