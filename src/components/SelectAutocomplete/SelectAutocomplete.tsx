import React, { ComponentPropsWithRef, ElementType, PropsWithChildren, useEffect } from 'react';

import { useController, UseControllerProps, useFormContext } from 'react-hook-form';
import ReactSelect from 'react-select';

import useTheme from '@mui/material/styles/useTheme';

import { ExcgangeSchema } from 'utils/validations';

type SelectAutocompleteProps<T extends ElementType> = ComponentPropsWithRef<T> &
  PropsWithChildren &
  UseControllerProps<ExcgangeSchema>;

const SelectAutocomplete = <T extends ElementType>(props: SelectAutocompleteProps<T>) => {
  const theme = useTheme();
  // not nested enough to use useFormContext, but a bit cleaner than passing down the setValue / getValues
  const { setValue, getValues } = useFormContext();
  const { field } = useController(props);

  const { defaultCurrency, currencies } = props;

  const isCurrenciesSet = !getValues().currency_from || !getValues().currency_to;
  const defaultCurrencyObject = currencies.find(
    (currency: { label: string; value: number }) => currency.label === defaultCurrency
  );

  useEffect(() => {
    if (isCurrenciesSet) setValue(field.name, defaultCurrencyObject);
  }, [isCurrenciesSet, field, defaultCurrencyObject, setValue]);

  return (
    <ReactSelect
      {...field}
      options={currencies}
      styles={{
        control: (styles) => ({
          ...styles,

          fontFamily: theme.typography.fontFamily,
          borderRadius: theme.shape.borderRadius,
          height: '56px',
          borderColor: theme.palette.primary.main,
          boxShadow: 'none',
          '&:hover': {
            borderColor: theme.palette.primary.dark,
          },
          '&:focus': {
            borderColor: theme.palette.primary.main,
          },
        }),
        valueContainer: (styles) => ({
          ...styles,
          padding: '0px 14px',
        }),
        input: (styles) => ({
          ...styles,
          padding: '0px',
          margin: '0px',
          fontSize: '1rem',
        }),
        singleValue: (styles) => ({
          ...styles,
          display: 'flex',
          justifyContent: 'flex-start',
        }),
        indicatorSeparator: (styles) => ({
          ...styles,
          backgroundColor: theme.palette.primary.main,
          opacity: '0.4',
        }),
        dropdownIndicator: (styles) => ({
          ...styles,
          color: theme.palette.primary.main,
        }),
      }}
      theme={(reactSelectTheme) => ({
        ...reactSelectTheme,
        borderRadius: 0,
        colors: {
          ...reactSelectTheme.colors,
          primary25: theme.palette.primary.main,
          primary: theme.palette.primary.dark,
        },
      })}
    />
  );
};

export { SelectAutocomplete };
