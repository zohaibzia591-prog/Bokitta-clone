import CurrencyDropdown from "./currencyDropdown";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="grid grid-cols-4 border-t border-[#e8e8e1] py-16 w-full px-[45px]">
          <div>
            <h4 className="text-[12px] font-light tracking-[3px] text-black">
              SERVICES
            </h4>
            <div className="pt-5">
              <ul className="font-light space-y-3 text-[12.75px] text-black">
                <li>
                  <a href="">Contact us</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Find A Store</a>
                </li>
              </ul>
              <div className="pt-1.5">
                <CurrencyDropdown />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[12px] font-light tracking-[3px] text-black">
              SHOPPING GUIDE
            </h4>
            <div className="pt-5">
              <ul className="font-light space-y-3 text-[12.75px] text-black">
                <li>
                  <a href="">The Complete Hijab Design Style Guide</a>
                </li>
                <li>
                  <a href="">How T Buy</a>
                </li>

                <li>
                  <a href="">Payment Options</a>
                </li>

                <li>
                  <a href="">Shipping & Delivery</a>
                </li>

                <li>
                  <a href="">Track Your Order</a>
                </li>

                <li>
                  <a href="">Returns & Exchange Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-[12px] font-light tracking-[3px] text-black">
              BOKITTA
            </h4>
            <div className="pt-5">
              <ul className="font-light space-y-3 text-[12.75px] text-black">
                <li>
                  <a href="">Our Story</a>
                </li>

                <li>
                  <a href="">Our Patents</a>
                </li>
                <li>
                  <a href="">Loyalty Program</a>
                </li>
                <li>
                  <a href="">Startup program</a>
                </li>
                <li>
                  <a href="">Affiliates program</a>
                </li>
                <li>
                  <a href="">Refer a Friend</a>
                </li>
                <li>
                  <a href="">Blog & Fashion Tips</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-[12px] font-light tracking-[3px] text-black">
              LEGAL
            </h4>
            <div className="pt-4">
              <ul className="font-light text-black text-[12.75px] space-y-3">
                <li>
                  <a href="">Terms of Service</a>
                </li>
                <li>
                  <a href="">Privacy & Cookies</a>
                </li>
                <li>
                  <a href="">Refund Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full">
            <ul className="flex justify-center items-center gap-4">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram className="w-6 h-6 text-gray-700 " />
               </a>
               </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebook className="w-6 h-6 text-gray-700 " />
               </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <FaYoutube className="w-6 h-6 text-gray-700 " />
               </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FaTwitter className="w-6 h-6 text-gray-700 " />
               </a>
              </li>
              <li>
                <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                  <FaPinterest className="w-6 h-6 text-gray-700" />
               </a>
              </li>
            </ul>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
