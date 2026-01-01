import { data } from "../../assets/data/products";
import type { Product } from "../../types/product.type";
const ProductList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* ProductCard components would be rendered here */}
    </div>
  );
};
export default ProductList;
