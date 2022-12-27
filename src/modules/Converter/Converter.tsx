import React, { useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import { keyframes } from '@mui/system';

import { StyledButton, BaseElement } from 'styles/styledComponents';
// import { appRoutes } from 'utils/consts';
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

const ReverseCurrenciesButton = ({ reverseCurrencies }: { reverseCurrencies: () => void }) => (
  <BaseElement focusRipple onClick={reverseCurrencies}>
    <ChangeCircleOutlinedIcon
      fontSize="large"
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
  const [defaultCurrencies] = useState({ currency_from: 'EUR', currency_to: 'PLN' });
  const [conversionResult, setConversionResult] = useState({
    amount: '',
    result: '',
    currency_from: defaultCurrencies.currency_from,
    currency_to: defaultCurrencies.currency_to,
  });

  const methods = useForm({
    defaultValues: defaultValues,
    mode: 'onSubmit',
    resolver: zodResolver(excgangeSchema),
  });
  const { control, handleSubmit, setValue, getValues } = methods;

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

  const { data, isLoading } = useGetCurrencyRates({ staleTime: 1000 /*ms*/ * 60 /*s*/ * 30 /*m*/ });

  if (!data || isLoading) {
    return null;
  }

  const currencies = Object.entries(data.rates || {}).map(([label, value]) => ({ label, value }));

  return (
    <FormProvider {...methods}>
      <form style={{ margin: '0 auto' }} onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            width: '500px',
            border: (theme) => `1px solid ${theme.palette.primary.main}`,
            borderRadius: (theme) => theme.shape.borderRadius,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: 6,
          }}
        >
          <Box
            sx={{
              paddingBottom: 3,
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              fontSize: '1.5rem',
              fontWeight: '700',
              color: (theme) => theme.palette.primary.dark,
            }}
          >
            {conversionResult.result ? (
              <>
                <Typography variant="inherit">{conversionResult.amount}</Typography>
                <Typography variant="inherit">{conversionResult.currency_from}</Typography>
                <Typography variant="inherit">=</Typography>
                <Typography variant="inherit">{conversionResult.result}</Typography>
                <Typography variant="inherit">{conversionResult.currency_to}</Typography>
              </>
            ) : (
              <Typography variant="inherit">Konwertuj</Typography>
            )}
          </Box>

          <Input control={control} name="amount" label="Wartość" />

          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 0.25fr 1fr',
              gap: 2,
              justifyContent: 'space-between',
            }}
          >
            <SelectAutocomplete
              control={control}
              name="currency_from"
              currencies={currencies}
              defaultCurrency={defaultCurrencies.currency_from}
            />
            <ReverseCurrenciesButton reverseCurrencies={reverseCurrencies} />
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
        </Box>
      </form>
    </FormProvider>
  );
};

export { Converter };
