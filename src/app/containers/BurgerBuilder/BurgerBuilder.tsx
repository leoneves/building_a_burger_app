import { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Ingredients from '../../model/Ingredients';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

type BurgerState = {
  ingredients: Ingredients;
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
  };

  render(): JSX.Element {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </>
    );
  }
}

export default BurgerBuilder;
