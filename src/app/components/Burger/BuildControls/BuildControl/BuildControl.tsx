import { FunctionComponent } from 'react';
import { BuildControlContainer, BuildControlLabel, ControlLess, ControlMore } from './BuildControl.styles';

type BuildControlProps = {
  label: string;
};

const defaultProps: BuildControlProps = {
  label: '',
};

const BuildControl: FunctionComponent<BuildControlProps> = (props = defaultProps): JSX.Element => (
  <BuildControlContainer>
    <BuildControlLabel>{props.label}</BuildControlLabel>
    <ControlLess>Less</ControlLess>
    <ControlMore>More</ControlMore>
  </BuildControlContainer>
);

export default BuildControl;
