import { FunctionComponent } from 'react';

import classes from './BuildControl.module.css';

type BuildControlProps = {
  label: string;
};

const defaultProps: BuildControlProps = {
  label: '',
};

const BuildControl: FunctionComponent<BuildControlProps> = (props = defaultProps): JSX.Element => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
);

export default BuildControl;
