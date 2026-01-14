import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { RootState } from "../store/store";
import { selectProductById } from "../store/product.store";
import { Heart, Minus, Plus } from "lucide-react";
import type { ColorVariant, ICartItem } from "../types/product.type";
import { useState } from "react";
import { addToCart } from "../store/cart.store";
const ProductDetail = () => {
  //get product id from url params
  const params = useParams<{ id: string }>();
  const { id } = params;
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) =>
    selectProductById(state, Number(id))
  );
  const [productDetail, setProductDetail] = useState<ColorVariant | null>(
    product!.colorsAvailable[0]
  );

  const handleColorSelect = (color: string) => {
    const selectedColor = product?.colorsAvailable.find(
      (c) => c.color === color
    );
    if (selectedColor) {
      setProductDetail(selectedColor);
    }
  };

  // const [selectedColor, setSelectedColor] = useState<string>(
  //   product!.colorsAvailable[0].color
  // );

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectSizeError, setSelectSizeError] = useState<string>("");
  const handleQuantity = (operator: string) => {
    if (quantity < 1) return;

    if (operator === "add") {
      setQuantity(quantity + 1);
    } else if (operator === "subtract") {
      if (quantity > 1) setQuantity(quantity - 1);
    }
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };
  const handleAddToCart = () => {
    if (!selectedSize) {
      setSelectSizeError("Please select a size");
      return;
    } else {
      setSelectSizeError("");
    }

    // 2. Construct the item directly in the function

    const itemToDispatch: ICartItem = {
      id: product!.id,
      // Create a unique ID for the cart (e.g., ID + Color + Size)
      // so the same product in different sizes are separate items
      cartItemId: `${product!.id}-${productDetail?.color}-${selectedSize}`,
      selectedColor: productDetail?.color || "",
      selectedSize: selectedSize,
      quantity: quantity,
      name: product!.name,
      price: product!.price,
      oldPrice: product!.oldPrice,
      discountPercent: product!.discountPercent,
      thumbnail: productDetail?.image || "", // Use the color-specific image
      category: product!.category,
      code: product!.code,
      brand: product!.brand,
      color: productDetail?.color || "",
      sizesAvailable: productDetail!.sizesAvailable,
    };
    console.log(itemToDispatch);
    // 3. Dispatch the object directly, not the state variable
    dispatch(addToCart(itemToDispatch));
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {/* Left: Image Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-2">
              {productDetail?.detailImages.map((image) => (
                <img
                  key={image}
                  src={image}
                  className="w-20 cursor-pointer border hover:border-black transition"
                  alt="Thumbnail"
                />
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1">
              <img
                src={productDetail?.detailImages[0]}
                className="w-full h-auto object-cover"
                alt="Main Product"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:px-8">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-red-600">
                US $120.00
              </span>
              <span className="text-lg text-gray-500">-20%</span>
              <span className="text-lg text-gray-400 line-through font-normal">
                US $150.00
              </span>
            </div>

            <h1 className="mt-2 text-xl font-medium text-gray-900">
              Premium Cotton Essential Tee
            </h1>

            {/* Color Selection */}
            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-wide">
                3 Colors Available
              </p>
              <div className="mt-4 flex gap-3">
                {product!.colorsAvailable.map((color) => (
                  <div
                    key={color.color}
                    className="group cursor-pointer"
                    onClick={() => handleColorSelect(color.color)}>
                    <img
                      src={color.image}
                      className="w-24 border-2 border-transparent group-hover:border-black transition p-0.5"
                      alt={color.color}
                    />
                    <div className="mt-2 flex items-center gap-2">
                      <span
                        className="h-4 w-4 rounded-sm border"
                        style={{ backgroundColor: color.color }}></span>
                      <span className="text-xs uppercase text-gray-600">
                        {color.color}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                Size
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {productDetail?.sizesAvailable.map((size) => (
                  <button
                    onClick={() => handleSizeSelect(size.size)}
                    key={size.size}
                    disabled={size.quantity === 0}
                    className={`min-w-16 border border-transparent bg-gray-200 rounded-sm px-4 py-2 text-sm font-medium hover:bg-gray-200 focus:border-black focus:ring-1 focus:ring-black ${
                      size.quantity == 0
                        ? "cursor-not-allowed opacity-40"
                        : "cursor-pointer"
                    }`}>
                    {size.size}
                  </button>
                ))}
              </div>
              <div className="size-message-error">{selectSizeError}</div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                Quantity
              </h3>
              <div className="mt-4 flex items-center gap-1">
                <button
                  className="flex h-10 w-12 items-center justify-center rounded-sm  bg-gray-100 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleQuantity("subtract")}>
                  <Minus size={16} />
                </button>
                <div className="flex h-10 w-16 items-center justify-center rounded-sm bg-gray-100 font-medium">
                  {quantity}
                </div>
                <button
                  className="flex h-10 w-12 items-center justify-center  bg-gray-100 rounded-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleQuantity("add")}>
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex items-center gap-2">
              <button
                onClick={() => {
                  handleAddToCart();
                }}
                className="w-full bg-black py-4  font-bold uppercase tracking-widest text-white hover:bg-zinc-800 transition">
                Add to Bag
              </button>
              <button className=" bg-gray-200 py-4 px-4 rounded-sm text-sm font-bold uppercase tracking-widest text-black hover:bg-gray-300 cursor-pointer transition">
                <Heart />
              </button>
            </div>
          </div>
        </div>
        {/* Simplified "Added to Bag" UI (Static Preview)
        <div className="mt-12 border-t pt-12">
          <h2 className="text-center text-lg font-bold">
            Modal Preview (Bottom Sheet)
          </h2>
          <div className="mx-auto mt-6 max-w-3xl border bg-white p-8 shadow-xl">
            <div className="flex gap-8">
              <img
                src="https://via.placeholder.com/150x200"
                className="w-32"
                alt="Added"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold">Added to bag</h3>
                <p className="text-gray-600">Premium Cotton Essential Tee</p>
                <p className="mt-1 font-bold">Black / L</p>
                <p className="mt-2">
                  <span className="font-bold text-red-600">US $120.00</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-400 line-through">US $150.00</span>
                </p>
                <button className="mt-4 bg-black px-8 py-2 font-bold text-white">
                  Go to bag
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default ProductDetail;
