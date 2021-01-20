import { FunctionComponent } from 'react';
import BuildControl from 'app/components/Burger/BuildControls/BuildControl/BuildControl';
import Ingredients from 'app/model/Ingredients';
import { BuildControlsContainer } from './BuildControls.styles';

type ControlType = {
  type: keyof Ingredients;
  label: string;
};

const controls: ControlType[] = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

type BuildControlsProps = {
  ingredientAdded: (type: keyof Ingredients) => void;
};

const BuildControls: FunctionComponent<BuildControlsProps> = (props): JSX.Element => (
  <BuildControlsContainer>
    {controls.map(ctrl => (
      <BuildControl key={ctrl.label} label={ctrl.label} add={() => props.ingredientAdded(ctrl.type)} />
    ))}
  </BuildControlsContainer>
);

export default BuildControls;
