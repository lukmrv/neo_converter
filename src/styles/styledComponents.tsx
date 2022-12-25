import React, { ComponentPropsWithRef, ElementType } from 'react';

import { Link } from 'react-router-dom';

import { styled, CustomThemeOverrides } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';

// eslint-disable-next-line no-restricted-imports
import {
  PolymorphicElement,
  PolymorphicElementProps,
} from 'components/PolymorphicElement/PolymorphicElement';

// =========SHARED STYLES==============
// CustomThemeOverrides extended by ThemeOptions

const buttonStyles = (theme: CustomThemeOverrides) => ({
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.primary.contrastText,
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.button.fontWeight,
});

// =====================BUTTON==========================
// Styled MUI Button

export const StyledButton = styled(
  // eslint-disable-next-line react/display-name
  <T extends ElementType>({ children, ...rest }: ButtonProps & ComponentPropsWithRef<T>) => (
    <Button {...rest}>{children}</Button>
  )
)(({ theme }) => buttonStyles(theme));

// ===================INTERNAL LINK=====================
// React Router Link which looks like MUI Button

export const StyledButtonLink = styled(
  <T extends ElementType>({ children, ...rest }: ButtonProps & ComponentPropsWithRef<T>) => (
    <Button component={Link} {...rest}>
      {children}
    </Button>
  )
)(({ theme }) => buttonStyles(theme));

// ============POLYMORPHIC INTERACTIVE MUI==============
// Base element for different components, which will have MUI theme applied

export const BaseElement = styled(
  <T extends ElementType>({
    component,
    children,
    ...rest
  }: ButtonProps & ComponentPropsWithRef<T>) => (
    <Button component={component} {...rest}>
      {children}
    </Button>
  )
)(({ theme }) => buttonStyles(theme));

// ==================POLYMORPHIC CUSTOM=================
// Styled Polymorphic Component, which could be passed html tag
// name as well as generic MUI props
// FUN, but overcomplicated and not necessary with MUI

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
