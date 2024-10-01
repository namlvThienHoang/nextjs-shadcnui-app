import React from 'react'
import ProductForm from '../../_components/product-form';

interface Params {
    params: {
        id: number;
    };
}

export default async function EditProductPage({ params }: Params) {

    return (
        <main className="flex min-h-screen flex-col items-start p-24">
            <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <ProductForm params={params}  />
            </div>
        </main>
    )
}