import React from "react";
import Logo from "../assets/images/Bokitta-logo.avif";
import Arrivals from "../assets/images/New Arrivals.webp";
import Prayer from "../assets/images/Prayer-Sets.webp";
import loungewear from "../assets/images/Lounge_Sets.webp";
import candle from "../assets/images/Candlelight.webp";
import collection from "../assets/images/view-all-collections.webp";
import instant from "../assets/images/instant-hijab-guide.webp";
import sale from "../assets/images/sale-50.webp";
import plain from "../assets/images/plain chiffon.webp";
import classic from "../assets/images/classics.jpg";
import sports from "../assets/images/active-sports.webp";
import palestine from "../assets/images/Palestine-donation.jpg";
import monogram from "../assets/images/Monogram.webp";
import watercolor from "../assets/images/watercolor-whispers.webp";
import monogramsets from "../assets/images/monogram-haya-sets.webp";
import linen from "../assets/images/linen sets.webp";
import blossom from "../assets/images/blossom-gallery.webp";
import worldtravel from "../assets/images/world-traveller.webp";
import modaljersey from "../assets/images/modal-Jersey-collection.webp";
import { UserIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from "@heroicons/react/24/outline";


const Header = () => {
  return (
    <div>
      <section>
        <nav className="flex justify-between py-3 px-10 relative">
          <div className="flex justify-center gap-x-7 max-w-7xl py-1">

            <div>
                <img
                  src={Logo}
                  alt="logo-image"
                  width={"200px"}
                  className="cursor-pointer"
                />
              </div>
            
            <ul className="flex items-center space-x-5 gap-2 cursor-pointer font-light">
              

              <li className="group">
                <a>
                <span className="relative after:content-[''] after:absolute after:left-0  after:-bottom-1.5
                          after:h-0.5 after:w-0 after:bg-black
                          after:transition-all after:duration-500
                          hover:after:w-full hover:after:left-0 hover:text-black">
                    New
                </span>

                  
                  </a>

                <div className="absolute left-0 top-full w-screen bg-white shadow-lg hidden group-hover:block">
                  <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-5 gap-8">
                    <div>
                      <img src={Arrivals} alt="new-arrivals" width={"200px"} />
                      <h3 className="font-semibold mb-3">New Arrivals</h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img src={Prayer} alt="new-arrivals" width={"200px"} />
                      <h3 className="font-semibold mb-3">
                        Women's Prayer Sets
                      </h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src={loungewear}
                        alt="new-arrivals"
                        width={"200px"}
                      />
                      <h3 className="font-semibold mb-3">LOUNGEWEAR</h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img src={candle} alt="new-arrivals" width={"200px"} />
                      <h3 className="font-semibold mb-3">CANDLELIGHT</h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src={collection}
                        alt="new-arrivals"
                        width={"200px"}
                      />
                      <h3 className="font-semibold mb-3">
                        View All Colletions
                      </h3>
                    </div>
                  </div>
                </div>
              </li>

              <li className="group">
                <a>
                    <span className="relative after:content-[''] after:absolute after:left-0  after:-bottom-1.5
                      after:h-0.5 after:w-0 after:bg-black
                      after:transition-all after:duration-500
                      hover:after:w-full hover:after:left-0 hover:text-black">
                        
                      Shop Hijabs
                    </span>
                  </a>

                <div className="absolute left-0 top-full w-screen bg-white hidden group-hover:block">
                  <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-5 gap-8">
                    
                    <div>
                      <h3 className="font-semibold mb-3"><a>Trending</a></h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer "><a>RESTOCKS!</a></li>
                        <li className="cursor-pointer "><a>New Arrivals</a></li>
                        <li className="cursor-pointer "><a>Queen of Hearts</a></li>
                        <li className="cursor-pointer ">
                            <a>
                                Printed Woven Modal Hijabs
                            </a>
                        </li>
                        <li className="cursor-pointer ">
                            <a>
                                Basic Hijab Sets Under $18
                            </a>
                        </li>
                        <li className="cursor-pointer ">
                            <a>
                                Palestine Prints - 100% Donation
                            </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3"><a>PLAIN INSTANS</a></h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer "><a>Sports Hijabs</a></li>
                        <li className="cursor-pointer "><a>Jersey Hijabs</a></li>
                        <li className="cursor-pointer "><a>Modal Hijabs</a></li>
                        <li className="cursor-pointer "><a>Satin Hijabs</a></li>
                        <li className="cursor-pointer ">
                          <a>
                                Basic Everyday Hijabs
                            </a>
                        </li>
                        <li className="cursor-pointer ">
                          <a>
                                Chiffon Essentials
                            </a>
                        </li>
                        <li className="cursor-pointer "><a>Ombre Hijabs</a></li>
                        <li className="cursor-pointer "><a>Embellished Hijabs</a></li>
                        <li className="cursor-pointer "><a>Butti Textured Hijabs</a></li>
                        <li className="cursor-pointer "><a>Premium Plain Hijabs</a></li>
                        <li className="cursor-pointer "><a>Crepe Hijabs Under $10 </a></li>
                        <li className="cursor-pointer "><a>Lining Hijab</a></li>
                        <li className="cursor-pointer "><a>Slip-On Girls</a></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3"><a>PRINTED INSTANTS</a></h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer "><a>New Arrivals</a></li>
                        <li className="cursor-pointer "><a>Best Seller Prints</a></li>
                        <li className="cursor-pointer "><a>Premium Prints</a></li>
                        <li className="cursor-pointer ">
                            <a>
                                Jersey Prints
                            </a>
                          
                        </li>
                        <li className="cursor-pointer ">

                          
                          <a>
                                Shop By Collection
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">NON-INSTANT HIJABS</h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer ">Printed Shawls</li>
                        <li className="cursor-pointer ">Solid Color Shawls</li>
                        <li className="cursor-pointer ">Printed Square Scarves</li>
                        <li className="cursor-pointer ">
                            Solid Color Square Scarves
                        </li>
                      </ul>
                    </div>

                    <div>
                      <img src={instant} alt=""/>

                      <ul className="space-y-2 mt-2">

                       <img src={sale} alt=""/>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="group">

                <a>
                    <span className="relative after:content-[''] after:absolute after:left-0  after:-bottom-1.5
                      after:h-0.5 after:w-0 after:bg-black
                      after:transition-all after:duration-500
                      hover:after:w-full hover:after:left-0 hover:text-black">
                        
                        Collections
                    </span>
                  </a>
                
                <div className="absolute left-0 top-full w-screen bg-white shadow-lg hidden group-hover:block">
                  <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-5 gap-8">
                    <div>
                      <img src={Arrivals} alt="new-arrivals" width={"200px"} />
                      <h5 className="font-semibold mb-3 mt-1 tracking-[2px] uppercase">New Arrivals</h5>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img src={Prayer} alt="new-arrivals" width={"200px"} />
                      <h5 className="font-semibold mb-3 mt-1 tracking-[2px] uppercase text-[14px]">
                        Women's Prayer Sets
                      </h5>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src={candle}
                        alt="new-arrivals"
                        width={"200px"}
                      />
                      <h5 className="font-semibold mb-3 mt-1 tracking-[2px]">CANDLELIGHT</h5>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img src={plain} alt="new-arrivals" width={"200px"} />
                      <h5 className="font-semibold mb-3 mt-1 tracking-[2px]">PLAIN CHIFFON</h5>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src={classic}
                        alt="new-arrivals"
                        width={"200px"}
                      />
                      <h3 className="font-semibold mb-3 mt-1 tracking-[2px]">
                        CLASSICS
                      </h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>

                    <div>
                      <img
                        src={modaljersey}
                        alt="new-arrivals"
                        width={"200px"}
                      />
                      <h3 className="font-semibold mb-3 mt-1 tracking-[2px]">
                        MODAL/JERSEY COLLECTION
                      </h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>

                    <div>
                      <img
                        src={worldtravel}
                        alt="new-arrivals"
                        width={"200px"}
                      />
                      <h3 className="font-semibold mb-3 mt-1 tracking-[2px]">
                        WORLD TRAVELLER
                      </h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src={blossom}
                        alt="new-arrivals"
                        width={"200px"}
                      />
                      <h3 className="font-semibold mb-3 mt-1 tracking-[2px]">
                        BLOSSOM GETAWAY
                      </h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src={linen}
                        alt="new-arrivals"
                        width={"200px"}
                      />
                      <h3 className="font-semibold mb-3 mt-1 tracking-[2px]">
                        LINEN SETS
                      </h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src={monogramsets}
                        alt="new-arrivals"
                        width={"200px"}
                      />
                      <h3 className="font-semibold mb-3 mt-1 tracking-[2px]">
                        NEW MONOGRAM & HAYA SETS
                      </h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src={watercolor}
                        alt="new-arrivals"
                        width={"200px"}
                      />
                      <h3 className="font-semibold mb-3 mt-1 tracking-[2px]">
                        WATERCOLOR WHISPERS
                      </h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src={monogram}
                        alt="new-arrivals"
                        width={"200px"}
                      />
                      <h3 className="font-semibold mb-3 mt-1 tracking-[2px]">
                        MONOGRAM
                      </h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src={palestine}
                        alt="new-arrivals"
                        width={"200px"}
                      />
                      <h3 className="font-semibold mb-3 mt-1 tracking-[2px]">
                        PALESTINE- 100% DONATION 
                      </h3>
                      <ul className="space-y-2 ">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src={sports}
                        alt="new-arrivals"
                        width={"200px"}
                      />
                      <h3 className="font-semibold mb-3 mt-1 tracking-[2px]">
                        ACTIVE/ SPORTS
                      </h3>
                      <ul className="space-y-2">
                        <li className="cursor-pointer">View Collection</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 mt-1 tracking-[2px]">
                        VIEW ALL COLLECTIONS
                      </h3>
                    </div>



                  </div>
                </div>
              </li>


              <li className="group relative">
                  <a>
                    <span className="relative after:content-[''] after:absolute after:left-0  after:-bottom-1.5
                      after:h-0.5 after:w-0 after:bg-black
                      after:transition-all after:duration-500
                      hover:after:w-full hover:after:left-0 hover:text-black">
                        
                        Accessories
                    </span>
                  </a>
                
                <div className="absolute left-0 top-10 w-max bg-white shadow-lg hidden group-hover:block">
                <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-1 gap-8">

                    <div>
                      <ul className="space-y-2">
                        <li className="cursor-pointer "><a>Hijab Underscarves & Inner Caps</a></li>
                        <li className="cursor-pointer "><a>Magnetic Hijab Pins</a></li>
                        <li className="cursor-pointer "><a>Tote Bags</a></li>
                        <li className="cursor-pointer "> <a>Hijabs Tapes</a></li>
                        <li className="cursor-pointer "><a>Bucket Hats</a></li>
                        <li className="cursor-pointer "><a>Hijab Friendly Masks</a></li>
                        <li className="cursor-pointer "><a>Balaclava</a></li>
                      </ul>
                    </div>

                    </div>
                  </div>
                </li>


              <li className="group relative">

                <a>
                    <span className="relative after:content-[''] after:absolute after:left-0  after:-bottom-1.5
                      after:h-0.5 after:w-0 after:bg-black
                      after:transition-all after:duration-500
                      hover:after:w-full hover:after:left-0 hover:text-black">
                        
                        Clothing & Prayer Sets
                    </span>
                  </a>

                <div className="absolute left-0 top-10 w-max bg-white shadow-lg hidden group-hover:block">
                <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-1 gap-8">

                    <div>
                      <ul className="space-y-2">
                        <li className="cursor-pointer "><a>Loungewear</a></li>
                        <li className="cursor-pointer "><a>Linen</a></li>
                        <li className="cursor-pointer "><a>Modest Dresses & Abayas</a></li>
                        <li className="cursor-pointer "> <a>Co-ord Sets</a></li>
                        <li className="cursor-pointer "><a>Prayer Sets</a></li>
                        <li className="cursor-pointer "><a>Tops & Shirts</a></li>
                        <li className="cursor-pointer "><a>Pants & Skirts</a></li>
                        <li className="cursor-pointer "><a>Outwear</a></li>
                        <li className="cursor-pointer "><a>Innerwear & Basics</a></li>
                        <li className="cursor-pointer "><a>All</a></li>
                      </ul>
                    </div>

                    </div>
                  </div>
                
                </li>
              
              <li className="group relative">
                <a>
                    <span className="relative after:content-[''] after:absolute after:left-0  after:-bottom-1.5
                      after:h-0.5 after:w-0 after:bg-black
                      after:transition-all after:duration-500
                      hover:after:w-full hover:after:left-0 hover:text-black">
                        
                        Hijab Guide
                    </span>
                  </a>

                <div className="absolute left-0 top-10 w-max bg-white shadow-lg hidden group-hover:block">
                <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-1 gap-8">

                    <div>
                      <ul className="space-y-2">
                        <li className="cursor-pointer "><a>Voila</a></li>
                        <li className="cursor-pointer "><a>Chic</a></li>
                        <li className="cursor-pointer "><a>Freestyle</a></li>
                        <li className="cursor-pointer "> <a>Loose Freestyle</a></li>
                        <li className="cursor-pointer "><a>Carre</a></li>
                        <li className="cursor-pointer "><a>Loose Cap Shawl</a></li>
                        <li className="cursor-pointer "><a>Loose Vogue</a></li>
                        <li className="cursor-pointer "><a>Posh</a></li>
                        <li className="cursor-pointer "><a>Jolie</a></li>
                        <li className="cursor-pointer "><a>Taj</a></li>
                        <li className="cursor-pointer "><a>SlipOn</a></li>
                        <li className="cursor-pointer "><a>Sports</a></li>
                        <li className="cursor-pointer "><a>How to Wear & Style Guide</a></li>
                      </ul>
                    </div>

                    </div>
                  </div>
                </li>
              <li className="uppercase font-bold text-center text-[#b5697b] group relative">

                <a>
                    <span className="relative after:content-[''] after:absolute after:left-0  after:-bottom-1.5
                      after:h-0.5 after:w-0 after:bg-black
                      after:transition-all after:duration-500
                      hover:after:w-full hover:after:left-0 hover:text-black">
                        
                        Sale
                    </span>
                  </a>
                
                <div className="absolute left-0 top-10 w-max bg-white shadow-lg hidden group-hover:block">
                <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-1 gap-8">

                    <div>
                      <ul className="space-y-2">
                        <li className="cursor-pointer"><a>Year End Sale</a></li>
                        <li className="cursor-pointer "><a>Offers</a></li>
                        <li className="cursor-pointer "><a>Clearance</a></li>
                      </ul>
                    </div>

                    </div>
                  </div>
              </li>
            </ul>

           <div className="flex justify-evenly items-center w-[200px]">

              <a href="account"><UserIcon className="w-6 h-6 text-black-600"/></a>
              <a href="search"><MagnifyingGlassIcon className="size-6 text-black-500"/></a>
              <a href="cart"><ShoppingBagIcon className="size-6 text-black-500"/></a>
              

            </div> 
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;