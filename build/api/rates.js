import { compile } from 'path-to-regexp';
import { apiRoutes } from 'utils/consts';
import { useFetch } from 'utils/reactQuery';
export const pathToUrl = (path, params = {}) => compile(path)(params);
const baseApiUrl = import.meta.env.VITE_API_BASE_URL;
const appId = {
    app_id: import.meta.env.VITE_API_KEY,
};
export const useGetCurrencyRates = () => useFetch(`${baseApiUrl}${pathToUrl(apiRoutes.getRates, appId)}`);
export const useGetCurrenciesList = () => useFetch(`${baseApiUrl}${pathToUrl(apiRoutes.getCurrencies, appId)}`);
//# sourceMappingURL=rates.js.map