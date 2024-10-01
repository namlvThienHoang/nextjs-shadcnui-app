'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { productServices } from '../_services/product';
import { Product } from '../data/schema';

interface ProductsEditProps {
    params: {
        id?: number;
    };
}

export default function ProductForm({ params }: ProductsEditProps) {
    const router = useRouter();
    const id = params.id; 
    const [productData, setProductData] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            if (id && id != 0) {
                const { data, error } = productServices.GetById(id);
                if (data) {
                    setProductData(data);
                } else if (error) {
                    setError(error);
                }
            }
        };
        fetchProduct();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            if (productData) {
                if (id && id != 0) {
                    await productServices.update(id, productData);
                } else {
                    await productServices.create(productData);
                }
                router.push('/dashboard/products'); 
            }
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: name === 'price' ? Number(value) : value
        }));
    };

    return (
        <div>
            <h1>{id ? 'Edit Product' : 'Create Product'}</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Product Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={productData?.title || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={productData?.category || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={productData?.price || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* Add other fields as necessary */}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Saving...' : id ? 'Update Product' : 'Create Product'}
                </button>
            </form>
        </div>
    );
}
