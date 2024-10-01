// hooks/useProducts.ts
"use client";
import useSWR, { mutate } from 'swr';
import { Meta } from '@/types/type';
import productService from '@/services/product-service';
import { Product } from '@/types/schema';

// Helper fetcher for SWR
const fetcher = (meta: Meta) => productService.getMany(meta).then(res => res.data);

export const useProducts = (meta: Meta) => {
    const { data, error, mutate } = useSWR<Product[]>(['products', meta], () => fetcher(meta));
    return { products: data, error, isLoading: !error && !data, mutate };
};

export const useProduct = (id: string | undefined) => {
    const { data, error, mutate } = useSWR(id ? [`products`, id] : null, () => productService.findById(Number(id)).then(res => res.data));
    return { product: data, error, isLoading: !error && !data, mutate };
};

export const useDeleteProduct = () => {
    const deleteProduct = async (id: number) => {
        try {
            await productService.del(id);  // Call the service to delete the product
            mutate('products');            // Revalidate the product list
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return { deleteProduct };
};
