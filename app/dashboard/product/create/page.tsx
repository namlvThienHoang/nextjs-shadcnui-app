import React from 'react'
import ProductForm from '../_components/product-form';


export default async function CreateProductPage() {

    return (
        <main className="flex min-h-screen flex-col items-start p-24">
            <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <ProductForm params={{ id: 0 }} />
            </div>
        </main>
    )
}