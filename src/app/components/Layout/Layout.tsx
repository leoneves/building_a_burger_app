import React, { FunctionComponent } from 'react';

import classes from './Layout.module.css';

const Layout: FunctionComponent = (props): JSX.Element => (
  <>
    <div>ToolsBar, SideDraw, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </>
);

export default Layout;
