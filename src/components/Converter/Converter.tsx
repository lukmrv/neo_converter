import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { StyledElement, StyledButtonLink, StyledButton } from 'styles/styledComponents';

const Converter = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 2,
      }}
    >
      <StyledElement tag="button">Im StyledElement button</StyledElement>
      <StyledElement tag="a" href="/">
        Im StyledElement link
      </StyledElement>
      <Button variant="contained">Im MUI Button</Button>
      <StyledButton variant="contained">blah</StyledButton>
      <StyledButtonLink to="/" variant="contained">
        Im StyledButtonLink
      </StyledButtonLink>
    </Box>
  );
};

export { Converter };
