// app/products/components/ProductForm.tsx
import { useState } from 'react';
import productService from '@/services/product-service';
import { useRouter } from 'next/router';

interface ProductFormProps {
  product?: any;
  isEditMode?: boolean;
}

const ProductForm = ({ product, isEditMode = false }: ProductFormProps) => {
  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const [images, setImages] = useState<FileList | null>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { name, description };
    const objectFile = [{ name: 'images', file: 'images' }]; // Adjust based on API

    try {
      if (isEditMode && product?.id) {
        const data = { ...formData, id: product.id };
        await productService.updatewithfile(data, 'product', objectFile);
      } else {
        await productService.createwithfile(formData, 'product', objectFile);
      }
      router.push('/products');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Images</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="mt-1 block w-full"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isEditMode ? 'Update Product' : 'Create Product'}
      </button>
    </form>
  );
};

export default ProductForm;
