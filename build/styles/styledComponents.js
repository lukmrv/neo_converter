import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import { PolymorphicElement, } from 'components/PolymorphicElement/PolymorphicElement';
const buttonStyles = (theme) => ({
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight,
});
export const StyledButton = styled(({ children, ...rest }) => (React.createElement(Button, { ...rest }, children)))(({ theme }) => buttonStyles(theme));
export const StyledButtonLink = styled(({ children, ...rest }) => (React.createElement(Button, { component: Link, ...rest }, children)))(({ theme }) => buttonStyles(theme));
export const BaseElement = styled(({ component, children, ...rest }) => (React.createElement(Button, { component: component, ...rest }, children)))(({ theme }) => buttonStyles(theme));
export const StyledPolymorphicElement = styled(({ tag, children, ...rest }) => (React.createElement(PolymorphicElement, { tag: tag, ...rest }, children)), {
    shouldForwardProp: (prop) => prop !== 'color' && prop !== 'variant' && prop !== 'sx',
    name: 'StyledElement',
    slot: 'Root',
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === 'primary' && styles.primary,
        props.color === 'secondary' && styles.secondary,
    ],
})(({ theme }) => ({
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
//# sourceMappingURL=styledComponents.js.map