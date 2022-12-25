import { useQuery } from 'react-query';
import axios from 'axios';
export const fetcher = ({ queryKey, pageParam, }) => {
    const [url, params] = queryKey;
    return axios.get(url, { params: { ...params, pageParam } }).then((res) => res.data);
};
export const useFetch = (url, params, config) => {
    const context = useQuery([url, params], ({ queryKey }) => fetcher({ queryKey }), {
        enabled: Boolean(url),
        ...config,
    });
    return context;
};
//# sourceMappingURL=reactQuery.js.map