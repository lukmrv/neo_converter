import React, { ComponentPropsWithRef, ElementType, PropsWithChildren, useEffect } from 'react';

import { useController, UseControllerProps } from 'react-hook-form';
import ReactSelect from 'react-select';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { ExcgangeSchema } from 'utils/validations';

type SelectAutocompleteProps<T extends ElementType> = ComponentPropsWithRef<T> &
  PropsWithChildren &
  UseControllerProps<ExcgangeSchema>;

const SelectAutocomplete = <T extends ElementType>(props: SelectAutocompleteProps<T>) => {
  const { defaultCurrency, currencies, label, setValue } = props;
  const { field, fieldState } = useController(props);

  useEffect(() => {
    if (field.value) return;

    setValue(
      field.name,
      currencies.find(
        (currency: { label: string; value: number }) => currency.label === defaultCurrency
      )
    );
  }, [currencies, field, setValue, defaultCurrency]);

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
