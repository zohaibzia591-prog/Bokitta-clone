import React from "react";
import Banner from "../assets/images/banner.webp";
import Baki from "../assets/images/x-baki.webp";
import yearsSale from "../assets/images/year-end-sale.webp";
import modalWoven from "../assets/images/instant-modal-woven.webp";
import scrunchies from "../assets/images/New-Scrunchies.webp";
import lounge from "../assets/images/model-lounge-sets.webp"
import instantChiffon from "../assets/images/instant-chiffon-hijab.jpg";
import design from "../assets/images/the-design.webp"

function HomePage() {
  return (
    <>
      

      <section className="mt-20">
        <div className="grid grid-flow-col grid-rows-1 w-[90%] m-auto gap-6 ">
          <div>
            <img src={scrunchies} alt="micro-modal" className="w-full"></img>

            <div className="text-center mt-3.5">
              <h3 className="text text-2xl">NEW! Scrunchies</h3>
              <button
                className="uppercase tracking-[0.3em] font-normal mt-2.5 px-6 py-3 
                               text-sm bg-white text-black cursor-pointer
                                border border-[#e8e8e1] hover:border-black hover:border "
              >
                <a>SHOP NOW</a>
              </button>
            </div>
          </div>

          <div>
            <img src={lounge} alt="micro-modal" className="w-full"></img>

            <div className="text-center">
              <h3 className="text-2xl mt-3.5">Modal Lounge Sets</h3>
              <button
                className="uppercase tracking-[0.3em] font-normal mt-2.5 px-6 py-3 
                               text-sm bg-white text-black cursor-pointer border border-[#e8e8e1] hover:border-black hover:border"
              >
                <a>SHOP NOW</a>
              </button>
            </div>
          </div>

          <div>
            <img src={instantChiffon} alt="micro-modal" className="w-full"></img>

            <div className="text-center">
              <h3 className="text-2xl mt-3.5">Instant Chiffon Hijabs</h3>
              <button
                className="uppercase tracking-[0.3em] font-normal mt-2.5 px-6 py-3 
                               text-sm bg-white text-black cursor-pointer border border-[#e8e8e1] hover:border-black hover:border"
              >
                <a>SHOP NOW</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-11 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-12">

          <div className="w-full">
            <img src={design} alt="new-arrivals" className="w-full h-full object-cover"></img>
          </div>

          <div className="w-full">
            <p className="uppercase tracking-[4px]">The Design</p>
            <h2 className="text-4xl text-black font-light">
                It all starts here!
              </h2>
              <p>
                  It's a 6 month journey from the drawing board to your wardrobe. In our factory, 
                  we dream up unique patterns, play with colors on different palettes, and bring those ideas
                  to life on fabric that's been carefully picked just for hijabis. Creating our pin-less 
                  instant hijabs involves a process that's far more complex than sewing a basic blouse or shawl.
                  It requires multiple stages of dyeing and sewing, followed by carefully assembling those 
                  pieces together.In the end, you get an effortlessly stylish pre-sewn hijab, thoughtfully 
                  curated and tailored just for you.
              </p>
            
          </div>

          </div>
        </div>
      </section>

    </>
  );
}

export default HomePage;
