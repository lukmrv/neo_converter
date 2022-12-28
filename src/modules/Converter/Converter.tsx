import React, { useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import { keyframes } from '@mui/system';

import { StyledButton, BaseElement } from 'styles/styledComponents';
import { Input } from 'components/Input/Input';
import { SelectAutocomplete } from 'components/SelectAutocomplete/SelectAutocomplete';
import { excgangeSchema, ExcgangeSchema } from 'utils/validations';
import { calculateConversionResult } from 'utils/calculateConversionResult';
import { useGetCurrencyRates } from 'api/rates';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  },
  10% {
    transform: rotate(-90deg);
  },
  20% {
    transform: rotate(0deg);
  }
`;

const defaultValues = {
  amount: '',
  currency_from: null,
  currency_to: null,
};

const ReverseCurrenciesButton = ({ action }: { action: () => void }) => (
  <BaseElement focusRipple onClick={action}>
    <ChangeCircleOutlinedIcon
      fontSize="medium"
      sx={{
        cursor: 'pointer',
        '&:hover': {
          animation: `${spin} 2s infinite`,
          animationTimingFunction: 'ease-in-out',
        },
      }}
      color="primary"
    />
  </BaseElement>
);

const Converter = () => {
  const methods = useForm({
    defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(excgangeSchema),
  });
  const { control, handleSubmit, setValue, getValues } = methods;

  const [defaultCurrencies] = useState({ currency_from: 'EUR', currency_to: 'PLN' });
  const [conversionResult, setConversionResult] = useState({
    amount: '',
    result: '',
    currency_from: defaultCurrencies.currency_from,
    currency_to: defaultCurrencies.currency_to,
  });

  const { data, isLoading } = useGetCurrencyRates({ staleTime: 1000 /*ms*/ * 60 /*s*/ * 30 /*m*/ });

  if (!data || isLoading) {
    return null;
  }

  const onSubmit = (data: ExcgangeSchema) => {
    const { currency_from, currency_to } = data;

    setConversionResult({
      amount: data.amount,
      result: calculateConversionResult(
        Number(currency_from?.value),
        Number(currency_to?.value),
        data.amount
      ),
      currency_from: String(currency_from?.label),
      currency_to: String(currency_to?.label),
    });
  };

  const reverseCurrencies = () => {
    const { currency_from, currency_to } = getValues();
    setValue('currency_from', currency_to);
    setValue('currency_to', currency_from);
  };

  const currencies = Object.entries(data.rates || {}).map(([label, value]) => ({ label, value }));

  return (
    <FormProvider {...methods}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            border: (theme) => `1px solid ${theme.palette.primary.main}`,
            borderRadius: (theme) => theme.shape.borderRadius,
            minWidth: '300px',
            width: '500px',
            maxWidth: '100%',
            '& form': {
              gap: 2,
              padding: 6,
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: 'primary.main',
                gap: 1,
                paddingBottom: 3,
              }}
            >
              {conversionResult.result ? (
                <>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.dark' }}>
                    {conversionResult.amount}
                  </Typography>
                  <Typography variant="h4">{conversionResult.currency_from}</Typography>
                  <Typography variant="h4">=</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.dark' }}>
                    {conversionResult.result}
                  </Typography>
                  <Typography variant="h4">{conversionResult.currency_to}</Typography>
                </>
              ) : (
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.dark' }}>
                  Konwertuj
                </Typography>
              )}
            </Box>

            <Input control={control} name="amount" label="Wartość" />

            <Box
              sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 50px 1fr',
                justifyContent: 'space-between',
              }}
            >
              <SelectAutocomplete
                control={control}
                name="currency_from"
                currencies={currencies}
                defaultCurrency={defaultCurrencies.currency_from}
              />

              <ReverseCurrenciesButton action={reverseCurrencies} />

              <SelectAutocomplete
                control={control}
                name="currency_to"
                currencies={currencies}
                defaultCurrency={defaultCurrencies.currency_to}
              />
            </Box>

            <StyledButton variant="contained" type="submit">
              Konwertuj
            </StyledButton>

            {/* <StyledButtonLink variant="contained" to={appRoutes.history}>
          Historia
        </StyledButtonLink> */}
          </form>
        </Box>
      </Box>
    </FormProvider>
  );
};

export { Converter };
