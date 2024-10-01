import { BaseService } from '@/services';

class ProductService extends BaseService {
    constructor() {
        super('/products'); // Base URL for products API
    }
}

const productService = new ProductService();
export default productService;
