import React from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { StyledButton, StyledButtonLink } from 'styles/styledComponents';
import { Input } from 'components/Input/Input';
import { SelectAutocomplete } from 'components/SelectAutocomplete/SelectAutocomplete';
import { excgangeSchema, ExcgangeSchema } from 'utils/validations';
import { appRoutes } from 'utils/consts';
import { useGetCurrencyRates } from 'api/rates';

const defaultValues = {
  amount: '',
};

const Converter = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<ExcgangeSchema>({
    defaultValues: defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(excgangeSchema),
  });

  console.log('getValues()-----------------------', getValues(), errors);

  const onSubmit = (data: ExcgangeSchema) => {
    console.log('-----------------------');
    console.log('data', data);
  };

  const { data, isLoading } = useGetCurrencyRates();

  if (isLoading) {
    return null;
  }

  const currencies = Object.entries(data?.rates || {}).map(([label, value]) => ({ label, value }));

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

      <SelectAutocomplete
        control={control}
        name="currency_from"
        label="Wybierz walutę"
        currencies={currencies}
        defaultCurrency="EUR"
        setValue={setValue}
      />
      <SelectAutocomplete
        control={control}
        name="currency_to"
        label="Wybierz walutę"
        currencies={currencies}
        defaultCurrency="PLN"
        setValue={setValue}
      />

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
