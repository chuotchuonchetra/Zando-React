import { Heart, Trash, X } from "lucide-react";
import type { Product } from "../types/product.type";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

const Cart: React.FC<Props> = ({ isOpen, onClose, products }) => {
  return (
    <>
      {/* --- BACKDROP --- */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity backdrop-blur-[1px] duration-500 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* --- CART SIDEBAR --- */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen bg-white shadow-2xl transition-all duration-500 ease-in-out ${
          isOpen ? "w-120" : "w-0 overflow-hidden"
        }`}>
        <div className="w-120  ">
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <h2 className="text-lg font-bold">Your Cart</h2>
            <X className="cursor-pointer" onClick={onClose} size={24} />
          </div>

          <div className="">
            {products?.length === 0 ? (
              <div className="m-10 flex flex-col gap-5 items-center">
                <p className="text-center font-bold text-2xl">
                  Your bag is empty
                </p>
                <div className="text-center text-[18px]">
                  Check out our latest arrivals stay up-to-date with latest
                  styles
                </div>
                <div className="text-[18px]">Start shopping</div>
                <div className="flex flex-col gap-3">
                  <button className="bg-black text-white font-bold w-90 p-3 cursor-pointer">
                    Shop women
                  </button>
                  <button className="bg-black text-white font-bold w-90 p-3 cursor-pointer">
                    Shop men
                  </button>
                </div>
              </div>
            ) : (
              <div className="m-2  ">
                {products?.map((product) => (
                  <div className="p-2">
                    <div className="flex gap-4 ">
                      <div className="">
                        <img
                          src={product.thumbnail}
                          alt={product.name}
                          className="w-36 h-46 object-cover"
                        />
                        <div className="mt-1.5 flex items-center gap-2">
                          <Heart
                            size={16}
                            className="cursor-pointer text-gray-700"
                          />
                          <span>Move to wishlist</span>
                        </div>
                      </div>
                      <div className="flex justify-between flex-1 ">
                        <div className="flex flex-col gap-2 ">
                          <p>{product.name}</p>
                          <p>
                            {product.code} - {product.colorsAvailable[0].color}
                          </p>
                          <div className="flex justify-between gap-4 ">
                            <div className="">
                              <label className="text-gray-500 font-medium text-lg">
                                Size
                              </label>
                              <select
                                id="size"
                                className="rounded-sm block w-full px-4 py-1.5 bg-neutral-secondary-medium border border-gray-400 text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
                                <option value="M">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                              </select>
                            </div>
                            <div className="">
                              <label className="text-gray-500 font-medium text-lg">
                                Quantity
                              </label>
                              <select
                                id="quantity"
                                className="rounded-sm block w-full px-4 py-1.5 bg-neutral-secondary-medium border border-gray-400 text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <Trash size={24} className="cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
