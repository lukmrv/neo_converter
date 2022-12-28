import React, { ComponentPropsWithRef, ElementType, PropsWithChildren, useEffect } from 'react';

import { useController, UseControllerProps, useFormContext } from 'react-hook-form';
import ReactSelect, { StylesConfig } from 'react-select';

import useTheme from '@mui/material/styles/useTheme';
import { Theme } from '@mui/material';

import { ExcgangeSchema } from 'utils/validations';

type SelectAutocompleteProps<T extends ElementType> = ComponentPropsWithRef<T> &
  PropsWithChildren &
  UseControllerProps<ExcgangeSchema>;

const reactSelectCustomStyles = (muiTheme: Theme): StylesConfig => ({
  control: (styles) => ({
    ...styles,

    fontFamily: muiTheme.typography.fontFamily,
    borderRadius: muiTheme.shape.borderRadius,
    height: '56px',
    borderColor: muiTheme.palette.primary.main,
    boxShadow: 'none',
    '&:hover': {
      borderColor: muiTheme.palette.primary.dark,
    },
    '&:focus': {
      borderColor: muiTheme.palette.primary.main,
    },
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: '0px 0px 0px 14px',
  }),
  input: (styles) => ({
    ...styles,
    padding: '0px',
    margin: '0px',
  }),
  singleValue: (styles) => ({
    ...styles,
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: muiTheme.typography.body1.fontSize,
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: muiTheme.palette.primary.main,
    opacity: '0.8',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    padding: '4px',
    color: muiTheme.palette.primary.main,
  }),
});

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
      styles={reactSelectCustomStyles(theme)}
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
