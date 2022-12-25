import React from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { StyledButton } from 'styles/styledComponents';
import { excgangeSchema, ExcgangeSchema } from 'utils/validations';
import { Input } from 'components/Input/Input';

const Converter = () => {
  const {
    control,
    handleSubmit,
    // getValues,
  } = useForm<ExcgangeSchema>({
    defaultValues: {
      amount: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(excgangeSchema),
  });

  const onSubmit = (data: ExcgangeSchema) => {
    console.log('data', data);
  };

  return (
    <Box
      sx={{
        width: '600px',
        margin: '0 auto',
        border: '1px solid',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'primary.light',
        borderColor: 'primary.dark',
        gap: 2,
        padding: 2,
      }}
    >
      <Typography variant="h2">Konwertuj</Typography>

      <Input control={control} name="amount" label="Wpisz wartość" />

      <StyledButton variant="contained" onClick={handleSubmit(onSubmit)}>
        Konwertuj
      </StyledButton>
    </Box>
  );
};

export { Converter };
