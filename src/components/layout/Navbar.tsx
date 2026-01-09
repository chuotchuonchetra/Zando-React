import { Link } from "react-router-dom";
import { ShoppingBag, Menu, Bell, Heart } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu.tsx";
import Cart from "../../pages/Cart.tsx";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store.ts";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const cart = useSelector((state: RootState) => state.cart.products);
  return (
    <header className="sticky top-0 z-50 bg-white border-b px-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="hover:text-gray-600 font-semibold">
              Shop
            </Link>
            <Link to="/men" className="hover:text-gray-600 font-semibold">
              Men
            </Link>
            <Link to="/women" className="hover:text-gray-600 font-semibold">
              Women
            </Link>
          </nav>
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide">
            ZANDO
          </Link>
          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products..."
                className="border rounded px-4 py-1 w-48 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <Bell size={24} />
            <Heart size={24} />
            <button className="relative" onClick={() => setCartOpen(true)}>
              <ShoppingBag size={22} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="">
              <Link to="/login" className="hover:text-gray-600 font-semibold">
                Login
              </Link>
              <Link
                to="/register"
                className="ml-4 hover:text-gray-600 font-semibold">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        products={cart}
      />
    </header>
  );
};

export default Navbar;
