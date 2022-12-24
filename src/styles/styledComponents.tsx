import React, { ElementType } from 'react';

import { Link } from 'react-router-dom';

import { styled } from '@mui/system';
import Button, { ButtonTypeMap } from '@mui/material/Button';
import { Theme } from '@mui/system/createTheme';

// eslint-disable-next-line no-restricted-imports
import { Element, ElementProps } from 'components/Element/Element';

// shared StyledButton and StyledButtonLink styles
const buttonStyles = (theme: Theme) => ({
  padding: theme.spacing(4, 6),
  border: '10px solid red',
});
// // // // // // // // // // // //
// TODO - pass it to StyledButtonLink for consistent styles
// Styled MUI Button
// // // // // // // // // // // //
export const StyledButton = styled(
  // eslint-disable-next-line react/display-name
  ({ children, ...rest }: ButtonTypeMap['props']) => <Button {...rest}>{children}</Button>
)(({ theme }) => buttonStyles(theme));
// // // // // // // // // // // //
// React Router Link which looks like MUI Button
// // // // // // // // // // // //
export const StyledButtonLink = styled(
  ({ children, ...rest }: { to: string } & ButtonTypeMap['props']) => (
    <Button component={Link} {...rest}>
      {children}
    </Button>
  )
)(({ theme }) => buttonStyles(theme));
// // // // // // // // // // // //
// Styled Polymorphic Component, which could be passed html tag
// name as well as generic MUI props
// // // // // // // // // // // //
export const StyledElement = styled(
  // COMPONENT 'proxy'
  <T extends ElementType>({ tag, children, ...rest }: ElementProps<T>) => (
    <Element tag={tag} {...rest}>
      {children}
    </Element>
  ),
  // THEME CONFIGURATION
  {
    // Configure which props should be forwarded on DOM
    shouldForwardProp: (prop) => prop !== 'color' && prop !== 'variant' && prop !== 'sx',
    name: 'StyledElement',
    slot: 'Root',
    // We are specifying here how the styleOverrides are being applied based on props
    overridesResolver: (props, styles) => [
      styles.root,
      props.color === 'primary' && styles.primary,
      props.color === 'secondary' && styles.secondary,
    ],
  }
  // THEME CUSTOMIZATION
)(({ theme }) => ({
  textDecoration: 'none',
  cursor: 'pointer',
  border: 'none',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1, 2),
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.button.fontWeight,
}));
