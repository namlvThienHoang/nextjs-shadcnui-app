// app/products/[id]/page.tsx
import { useRouter } from 'next/router';
import { useProduct } from '@/hooks/use-products';
import ProductForm from '../_components/product-form';
import productService from '@/services/product-service';

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { product, isLoading, error } = useProduct(id as string);

  const handleDelete = async () => {
    try {
      await productService.del(Number(id));
      router.push('/products');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = async () => {
    try {
      await productService.onDownloadFile(product.manualUrl); // Adjust field name
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load product</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <ProductForm product={product} isEditMode />
      <div className="mt-4 flex space-x-2">
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete Product
        </button>
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Download Manual
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
