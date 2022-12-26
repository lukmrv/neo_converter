import { compile } from 'path-to-regexp';
import { useFetch } from 'utils/reactQuery';

export const pathToUrl = (path: string, params: object = {}) => compile(path)(params);

// links stay as it is for now. At the moment the app is client side only
export const useGetCurrencyRates = (config: Record<string, string | number>) =>
  useFetch<Record<string, number>>(
    'https://openexchangerates.org/api/latest.json?app_id=62630cb2d92f4014bb7115000b94a793',
    config
  );

export const useGetCurrenciesList = () =>
  useFetch<Record<string, number>>('https://openexchangerates.org/api/currencies.json');
