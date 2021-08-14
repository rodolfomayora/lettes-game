import React ,{ FC } from 'react';

import { LayoutStyled } from './styles';

const Layout: FC = ({ children }) => (
  <LayoutStyled>
    {children}
  </LayoutStyled>
);

export default Layout;