import { UseQueryOptions } from 'react-query';
import { QueryFunctionContext } from 'react-query/types/core/types';
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
type QueryKeyType = [string, object | undefined];
export declare const fetcher: <T>({ queryKey, pageParam, }: Optional<QueryFunctionContext<QueryKeyType>, 'meta'>) => Promise<T>;
export declare const useFetch: <T>(url: string | null, params?: object, config?: UseQueryOptions<T, Error, T, QueryKeyType> | undefined) => import("react-query").UseQueryResult<T, Error>;
export {};
//# sourceMappingURL=reactQuery.d.ts.map