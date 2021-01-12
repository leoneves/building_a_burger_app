import { FunctionComponent } from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';
import Ingredients from '../../../model/Ingredients';

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

const BuildControls: FunctionComponent = (): JSX.Element => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl key={ctrl.label} label={ctrl.label} />
    ))}
  </div>
);

export default BuildControls;
