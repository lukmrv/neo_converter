import { useQuery, UseQueryOptions } from 'react-query';
import { QueryFunctionContext } from 'react-query/types/core/types';

import axios from 'axios';

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

type QueryKeyType = [string, object | undefined];

export const fetcher = <T>({
  queryKey,
  pageParam,
}: Optional<QueryFunctionContext<QueryKeyType>, 'meta'>): Promise<T> => {
  const [url, params] = queryKey;
  return axios.get<T>(url, { params: { ...params, pageParam } }).then((res) => res.data);
};

export const useFetch = <T>(
  url: string | null,
  params?: object,
  config?: UseQueryOptions<T, Error, T, QueryKeyType>
) => {
  const context = useQuery<T, Error, T, QueryKeyType>(
    [url as string, params],
    ({ queryKey }) => fetcher({ queryKey }),
    {
      enabled: Boolean(url),
      ...config,
    }
  );

  return context;
};
