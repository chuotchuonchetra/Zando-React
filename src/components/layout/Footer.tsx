import React from "react";
import {
  User,
  Facebook,
  Instagram,
  Youtube,
  HelpCircle,
  ShieldCheck,
  MessageSquare,
  MapPin,
  Mail,
  Phone,
  Send,
  ChevronUp,
} from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Grid Content */}
        <div className="flex flex-wrap justify-center -mx-4">
          {/* ZANDO APP */}
          <div className="w-1/2 md:w-1/6 px-4 mb-8">
            <h5 className="font-bold mb-4 text-gray-900">ZANDO APP</h5>
            <div className="w-24 h-24 border border-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://zandokh.com/image/catalog/logo/qr_code_app.png"
                alt="QR Code"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* LOYALTY */}
          <div className="w-1/2 md:w-1/6 px-4 mb-8">
            <h5 className="font-bold mb-4 text-gray-900">LOYALTY</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors flex items-center gap-2">
                  <User size={18} />
                  <span>Membership & Benefits</span>
                </a>
              </li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div className="w-1/2 md:w-1/6 px-4 mb-8">
            <h5 className="font-bold mb-4 text-gray-900">FOLLOW US</h5>
            <ul className="space-y-2">
              {[
                { name: "Facebook", icon: <Facebook size={18} /> },
                { name: "Instagram", icon: <Instagram size={18} /> },
                {
                  name: "TikTok",
                  icon: <span className="text-sm font-bold">TikTok</span>,
                }, // Lucide doesn't have TikTok yet
                { name: "Youtube", icon: <Youtube size={18} /> },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors flex items-center gap-2">
                    {social.icon}
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="w-1/2 md:w-1/4 px-4 mb-8">
            <h5 className="font-bold mb-4 text-gray-900">CUSTOMER SERVICES</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black flex items-center gap-2">
                  <HelpCircle size={18} /> Online exchange policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black flex items-center gap-2">
                  <ShieldCheck size={18} /> Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black flex items-center gap-2">
                  <MessageSquare size={18} /> FAQs & guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black flex items-center gap-2">
                  <MapPin size={18} /> Find a store
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h5 className="font-bold mb-4 text-gray-900">CONTACT US</h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-gray-900" />
                <a
                  href="mailto:customer.care@zandokh.com"
                  className="text-gray-600 hover:text-black">
                  customer.care@zandokh.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-gray-900" />
                <a
                  href="tel:+855085330330"
                  className="text-gray-600 hover:text-black">
                  (+855) 085 330 330
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Send size={18} className="text-gray-900" />
                <a href="#" className="text-gray-600 hover:text-black">
                  {" "}
                  Telegram{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* WE ACCEPT */}
        <div className=" pb-4">
          <h5 className="font-bold mb-4 text-gray-900">WE ACCEPT</h5>
          <div className="flex flex-wrap gap-4 items-center">
            <img
              style={{ width: "300px", height: "auto" }}
              src="https://zandokh.com/image/catalog/logo/web-footer/We-accept-payment%E2%80%93for-web-footer-1.png"
              alt="Payment Methods"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 pb-6 border-t border-gray-200">
          <p className="text-right text-gray-500 text-sm">
            © 2015 - 2025 Zando. All rights reserved.
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all focus:outline-none"
          aria-label="Scroll to top">
          <ChevronUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
