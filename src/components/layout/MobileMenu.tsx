import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: Props) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <div className="absolute right-0 top-0 h-full w-64 bg-white p-6">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <X size={24} />
        </button>

        <nav className="mt-10 flex flex-col gap-6 text-lg">
          <Link to="/" onClick={onClose}>
            Home
          </Link>
          <Link to="/shop" onClick={onClose}>
            Shop
          </Link>
          <Link to="/men" onClick={onClose}>
            Men
          </Link>
          <Link to="/women" onClick={onClose}>
            Women
          </Link>
          <Link to="/cart" onClick={onClose}>
            Cart
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
