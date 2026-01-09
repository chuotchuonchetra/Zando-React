import { data } from "../../assets/data/products";
import type { Product } from "../../types/product.type";
import ProductCard from "./ProductCard";
const ProductList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* ProductCard components would be rendered here */}
      {data.collections.map((element) =>
        element.products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};
export default ProductList;
