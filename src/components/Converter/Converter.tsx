import React from 'react';

import Box from '@mui/material/Box';

import {
  StyledPolymorphicElement,
  StyledButtonLink,
  StyledButton,
  BaseElement,
} from 'styles/styledComponents';

const Converter = () => {
  return (
    <Box
      maxWidth="lg"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'primary.light',
        gap: 2,
        padding: 2,
      }}
    >
      <BaseElement component="a" href="/">
        Im BaseElement link
      </BaseElement>
      <BaseElement component="div">Im BaseElement div</BaseElement>
      <BaseElement component="button">Im BaseElement button</BaseElement>

      <StyledPolymorphicElement tag="button">
        Im StyledPolymorphicElement button
      </StyledPolymorphicElement>
      <StyledPolymorphicElement tag="a" href="/">
        Im StyledPolymorphicElement link
      </StyledPolymorphicElement>

      <StyledButton variant="contained">blah</StyledButton>
      <StyledButtonLink to="/" variant="contained">
        Im StyledButtonLink
      </StyledButtonLink>
    </Box>
  );
};

export { Converter };
