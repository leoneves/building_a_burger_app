import { FunctionComponent, MouseEvent as ReactMouseEvent } from 'react';
import { BuildControlContainer, BuildControlLabel, ControlLess, ControlMore } from './BuildControl.styles';

type BuildControlProps = {
  label: string;
  add?: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const defaultProps: BuildControlProps = {
  label: '',
  add: undefined,
};

const BuildControl: FunctionComponent<BuildControlProps> = (props = defaultProps): JSX.Element => (
  <BuildControlContainer>
    <BuildControlLabel>{props.label}</BuildControlLabel>
    <ControlLess>Less</ControlLess>
    <ControlMore onClick={event => props.add!(event)}>More</ControlMore>
  </BuildControlContainer>
);

export default BuildControl;
