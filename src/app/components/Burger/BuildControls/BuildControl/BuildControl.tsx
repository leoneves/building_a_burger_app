import { FunctionComponent } from 'react';
import { BuildControlContainer, BuildControlLabel, ControlLess, ControlMore } from './BuildControl.styles';
import Ingredients from '../../../../model/Ingredients';

type BuildControlProps = {
  label: string;
  type?: keyof Ingredients;
  added?: (type: keyof Ingredients) => void;
};

const defaultProps: BuildControlProps = {
  label: '',
  type: 'meat',
  added: undefined,
};

const BuildControl: FunctionComponent<BuildControlProps> = (props = defaultProps): JSX.Element => (
  <BuildControlContainer>
    <BuildControlLabel>{props.label}</BuildControlLabel>
    <ControlLess>Less</ControlLess>
    <ControlMore onClick={() => props.added!(props.type!)}>More</ControlMore>
  </BuildControlContainer>
);

export default BuildControl;
