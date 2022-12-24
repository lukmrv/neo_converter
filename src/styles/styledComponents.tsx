import React, { ElementType } from 'react';

import { Link } from 'react-router-dom';

import { styled, Theme } from '@mui/material';
import Button, { ButtonTypeMap } from '@mui/material/Button';

// eslint-disable-next-line no-restricted-imports
import {
  PolymorphicElement,
  PolymorphicElementProps,
} from 'components/PolymorphicElement/PolymorphicElement';

// shared styles
// when passing theme to buttonStyles, we cast its type to
// Theme, but it's actually CustomThemeOverrides
const buttonStyles = (theme: Theme) => ({
  padding: theme.spacing(4, 6),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.button.fontWeight,
});

// ===============================
// Styled MUI Button
//
export const StyledButton = styled(
  // eslint-disable-next-line react/display-name
  ({ children, ...rest }: ButtonTypeMap['props']) => <Button {...rest}>{children}</Button>
)(({ theme }) => buttonStyles(theme));

// ===============================
// React Router Link which looks like MUI Button
//
export const StyledButtonLink = styled(
  ({ children, ...rest }: { to: string } & ButtonTypeMap['props']) => (
    <Button component={Link} {...rest}>
      {children}
    </Button>
  )
)(({ theme }) => buttonStyles(theme));

// ===============================
// Base element for different components, which will have muit theme applied
//
export const BaseElement = styled(
  ({
    component,
    children,
    ...rest
  }: { component: ElementType; href?: string } & ButtonTypeMap['props']) => (
    <Button component={component} {...rest}>
      {children}
    </Button>
  )
  // THEME CUSTOMIZATION
)(({ theme }) => buttonStyles(theme));

// ===============================
// Styled Polymorphic Component, which could be passed html tag
// name as well as generic MUI props
//
// FUN, but overcomplicated and not necessary with MUI
//
export const StyledPolymorphicElement = styled(
  // COMPONENT 'proxy'
  <T extends ElementType>({ tag, children, ...rest }: PolymorphicElementProps<T>) => (
    <PolymorphicElement tag={tag} {...rest}>
      {children}
    </PolymorphicElement>
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
  width: '100%',
  textDecoration: 'none',
  cursor: 'pointer',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1, 2),
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.button.fontWeight,
  transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '&:focus': {
    outline: 'none',
    backgroundColor: theme.palette.primary.dark,
  },
  '&:active': {
    outline: 'none',
    backgroundColor: theme.palette.primary.dark,
  },
}));
