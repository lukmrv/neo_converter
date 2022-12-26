import React, { PropsWithChildren } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

const ErrorMessage = ({ children, ...rest }: PropsWithChildren<TypographyProps>) => (
  <Typography color="error" {...rest}>
    {children}
  </Typography>
);

export { ErrorMessage };
