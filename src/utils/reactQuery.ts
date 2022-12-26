import { useQuery, UseQueryOptions } from 'react-query';
import { QueryFunctionContext } from 'react-query/types/core/types';

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

type QueryKeyType = [string];

const fetchWrapper = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw `${response?.status} ${response.statusText}`;
    }
    console.log('fetched');
    const rates = await response.json();
    return rates;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// using fetch instead of axios for now (axios causing issues with cors from client side requests)
export const fetcher = <T>({
  queryKey,
}: Optional<QueryFunctionContext<QueryKeyType>, 'meta'>): Promise<T> => {
  const [url] = queryKey;
  return fetchWrapper(url);
};

export const useFetch = <T>(
  url: string | null,
  config?: UseQueryOptions<T, Error, T, QueryKeyType>
) => {
  const context = useQuery<T, Error, T, QueryKeyType>(
    [url as string],
    ({ queryKey }) => fetcher({ queryKey }),
    {
      enabled: Boolean(url),
      ...config,
    }
  );

  return context;
};
