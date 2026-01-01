import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product.type";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative border rounded-lg overflow-hidden bg-white">
      {/* Discount badge */}
      {product.discountPercent && (
        <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
          -{product.discountPercent}%
        </span>
      )}

      {/* Wishlist */}
      <button className="absolute top-2 right-2 z-10 bg-white p-1.5 rounded-full shadow hover:text-red-500">
        <Heart size={16} />
      </button>

      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-3">
        {/* Name */}
        <h3 className="text-sm font-medium line-clamp-2 mb-1">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-red-500 font-semibold">
            US ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-gray-400 text-sm line-through">
              US ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Color variants */}
        {product.colorsAvailable && (
          <div className="flex gap-1 mt-2">
            {product.colorsAvailable.map((color, index) => (
              <span
                key={index}
                className="w-4 h-4 rounded border"
                style={{ backgroundColor: color.color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
