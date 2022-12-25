import React, { ComponentPropsWithRef, ElementType, PropsWithChildren } from 'react';

import { useController, UseControllerProps } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { ExcgangeSchema } from 'utils/validations';

type InputProps<T extends ElementType> = ComponentPropsWithRef<T> &
  PropsWithChildren &
  UseControllerProps<ExcgangeSchema>;

const ErrorMessage = ({ children, ...rest }: PropsWithChildren<TypographyProps>) => (
  <Typography color="error" {...rest}>
    {children}
  </Typography>
);

const Input = <T extends ElementType>(props: InputProps<T>) => {
  const { field, fieldState } = useController(props);

  return (
    <Box sx={{ position: 'relative' }}>
      {fieldState.error && (
        <ErrorMessage sx={{ position: 'absolute', right: '0', top: '0px' }}>
          {fieldState.error.message}
        </ErrorMessage>
      )}

      <TextField
        label={props.label}
        error={Boolean(fieldState.error)}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        sx={{ margin: '30px 0', width: '100%' }}
        {...field}
      />
    </Box>
  );
};

export { Input };
