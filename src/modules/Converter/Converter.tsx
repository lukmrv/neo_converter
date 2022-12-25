import React from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { StyledButton, StyledButtonLink } from 'styles/styledComponents';
import { Input } from 'components/Input/Input';
import { excgangeSchema, ExcgangeSchema } from 'utils/validations';
import { appRoutes } from 'utils/consts';
import { useGetCurrenciesList, useGetCurrencyRates } from 'api/rates';

const defaultValues = {
  amount: '',
};

const Converter = () => {
  const {
    control,
    handleSubmit,
    // getValues,
  } = useForm<ExcgangeSchema>({
    defaultValues: defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(excgangeSchema),
  });

  const onSubmit = (data: ExcgangeSchema) => {
    console.log('data', data);
  };

  const { data, isLoading } = useGetCurrenciesList();
  // const { data, isLoading } = useGetCurrencyRates();

  console.log('isLoading', isLoading);
  console.log('data', data);

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

      <StyledButtonLink variant="contained" to={appRoutes.history}>
        Historia
      </StyledButtonLink>
    </Box>
  );
};

export { Converter };
