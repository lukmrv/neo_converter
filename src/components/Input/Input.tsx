import React, { ComponentPropsWithRef, ElementType, PropsWithChildren } from 'react';

import { useController, UseControllerProps } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { ExcgangeSchema } from 'utils/validations';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

type InputProps<T extends ElementType> = ComponentPropsWithRef<T> &
  PropsWithChildren &
  UseControllerProps<ExcgangeSchema>;

const Input = <T extends ElementType>(props: InputProps<T>) => {
  const { field, fieldState } = useController(props);

  return (
    <Box sx={{ position: 'relative' }}>
      {fieldState.error && (
        <ErrorMessage sx={{ fontSize: '0.75rem', position: 'absolute', right: '0', top: '-20px' }}>
          {fieldState.error.message}
        </ErrorMessage>
      )}

      <TextField
        {...field}
        label={props.label}
        error={Boolean(fieldState.error)}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        sx={{ marginTop: '0px', width: '100%' }}
      />
    </Box>
  );
};

export { Input };
