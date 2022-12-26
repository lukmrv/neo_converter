import React, { ComponentPropsWithRef, ElementType, PropsWithChildren } from 'react';

import { useController, UseControllerProps, useFormContext } from 'react-hook-form';
import ReactSelect from 'react-select';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { ExcgangeSchema } from 'utils/validations';

type SelectAutocompleteProps<T extends ElementType> = ComponentPropsWithRef<T> &
  PropsWithChildren &
  UseControllerProps<ExcgangeSchema>;

const SelectAutocomplete = <T extends ElementType>(props: SelectAutocompleteProps<T>) => {
  // not nested enough to use useFormContext, but a bit cleaner than passing down the setValue / getValues
  const { setValue, getValues } = useFormContext();
  const { field, fieldState } = useController(props);

  const { defaultCurrency, currencies, label } = props;

  const isCurrenciesSet = !getValues().currency_from || !getValues().currency_to;
  const defaultCurrencyObject = currencies.find(
    (currency: { label: string; value: number }) => currency.label === defaultCurrency
  );
  if (isCurrenciesSet) setValue(field.name, defaultCurrencyObject);

  return (
    <Box sx={{ position: 'relative' }}>
      {fieldState.error && (
        <ErrorMessage sx={{ position: 'absolute', right: '0', top: '-28px' }}>
          {fieldState.error.message}
        </ErrorMessage>
      )}

      <Typography variant="h6" sx={{ margin: '30px 0' }}>
        {label}
      </Typography>
      <ReactSelect options={currencies} {...field} />
    </Box>
  );
};

export { SelectAutocomplete };
