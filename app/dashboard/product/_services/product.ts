import useSWR from 'swr';
import { BaseService } from '@/services';
import api from '@/services/axios-custom';
import { Meta } from '@/types/type';
import { Product } from '../data/schema';
class services extends BaseService {
    GetList = (meta: Meta) => {
        const { data, error, isLoading, mutate } = useSWR([this.url, meta], () => this.getMany(meta));
        return {
            data,
            error,
            isLoading,
            mutate,
        };
    };
    GetById = (id: number) => {
        const fetcher = () => api.get(`${this.url}/${id}`).then(res => res.data);
        const { data, error } = useSWR<Product>(`${this.url}${id}`, fetcher);
    
        return {
            data,
            error
        };
    };
}
const productServices = new services("/products");
export { productServices };
