import { Heart } from "lucide-react";
import type { Product } from "../../types/product.type";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      key={product.id}
      to={`/product/${product.id}`}
      className="max-w-sm rounded-sm overflow-hidden shadow-sm bg-white font-sans group cursor-pointer">
      <div className="relative overflow-hidden aspect-11/12">
        <div className="absolute top-3 left-3 bg-[#EE3131] text-white text-sm font-bold px-2 py-1 rounded">
          -{product.discountPercent}%
        </div>

        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-6 right-2 rotate-180 [writing-mode:vertical-lr] text-sm font-bold tracking-widest text-black">
          ZANDO
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-[#EE3131] text-xl font-bold">
                US ${product.price}
              </span>
              <span className="text-gray-500 line-through text-lg">
                US ${product.oldPrice}
              </span>
            </div>

            <h3 className="text-gray-900 text-lg font-medium leading-tight">
              {product.name}
            </h3>
          </div>

          <button className="text-gray-900 hover:text-red-500 transition-colors">
            <Heart size={20} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
