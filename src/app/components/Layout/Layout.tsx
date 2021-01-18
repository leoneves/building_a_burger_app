import React, { FunctionComponent } from 'react';
import { LayoutContainer } from './Layout.styles';

const Layout: FunctionComponent = (props): JSX.Element => (
  <>
    <div>ToolsBar, SideDraw, Backdrop</div>
    <LayoutContainer>{props.children}</LayoutContainer>
  </>
);

export default Layout;
