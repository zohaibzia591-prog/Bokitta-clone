import Baki from "../assets/images/x-baki.webp";
import MicroModal from "../assets/images/micro-modal-lenzing-jersey.webp";
import yearsSale from "../assets/images/year-end-sale.webp";
import modalWoven from "../assets/images/instant-modal-woven.webp";
import design from "../assets/images/the-design.webp";
import scrunchies from "../assets/images/New-Scrunchies.webp";
import lounge from "../assets/images/model-lounge-sets.webp";
import instantChiffon from "../assets/images/instant-chiffon-hijab.jpg";
import Loose from "../assets/images/freestyle-loose.webp";
import Posh from "../assets/images/posh.webp";
import Voila from "../assets/images/voila.webp";
import freestyle from "../assets/images/freestyle.webp";
import voilaMaxi from "../assets/images/voila-maxi.webp";
import Chic from "../assets/images/chic.webp";
import liteChiffon from "../assets/images/lite-chiffon.webp";
import crinkledChiffon from "../assets/images/crinkled-chiffon.jpg";
import Modal from "../assets/images/modal.jpg";
import Jersey from "../assets/images/jersey.jpg";
import Satin from "../assets/images/satin.jpg";
import Premium from "../assets/images/premium.webp";
import Factory from "../assets/images/our-factory.webp";
import Empowering from "../assets/images/empowering-women.webp";
import Carousel from "./carousel";
import ReviewSlider from "./swiper";
import { StarIcon } from '@heroicons/react/24/solid';
import Footer from "./Footer";


const mainContent = () => {
  return (
    <>
      {/* <section className="mt-20 ">
        <div className="flex justify-center gap-8 items-center w-full ">
          <div className="w-[30%] ">
            <h2 className="text-[35px] text-black tracking-[2px] font-light">
              Bokitta X Baki
            </h2>

            <p className="mt-2">
              <strong className="text-black ">One print.One message.</strong>
            </p>

            <p className="font-light">
              Our Baki collab centers on the hadith ﺗﻬﺎدوا ﺗﺤﺎﺑﻮا - “tahādu
              taḥābbū”, beautifully written as calligraphy across a rich blend
              of black and maroon-brown hues, touched with warm red strokes. A
              heartfelt piece that celebrates the joy of giving.
            </p>

            <button
              className="uppercase tracking-[0.3em] font-semibold mt-4 px-6 py-3 
                                       text-sm bg-black text-white hover:bg-blue-600 before:w-full"
            >
              <a>SHOP NOW</a>
            </button>
          </div>

          <div className="w-[50%]">
            <img src={Baki} alt="new-arrivals" className="w-full"></img>
          </div>
        </div>
      </section> */}

      <section className="mt-20">
        <div className="flex gap-6 w-full justify-center">
          <div className="w-[30%]">
            <div className="w-full">
              <img src={MicroModal} alt="micro-modal" className="w-full" />
            </div>

            <div className="text-center mt-3.5">
              <h3 className="text-[24px] text-black font-light">
                MicroModal Lenzing® Jersey
              </h3>
              <button
                className="uppercase tracking-[0.3em] font-normal mt-2.5 px-4 py-2.5 
                                             text-[12px] bg-white text-black cursor-pointer
                                              border border-[#e8e8e1] hover:border-black hover:border "
              >
                <a>SHOP NOW</a>
              </button>
            </div>
          </div>

          <div className="w-[30%]">
            <div className="w-full">
              <img src={yearsSale} alt="year-sale" className="w-full"></img>
            </div>

            <div className="text-center mt-3.5">
              <h3 className="text-[24px] text-black font-light">
                Year End Sale
              </h3>
              <button
                className="uppercase tracking-[0.3em] font-normal mt-2.5 px-4 py-2.5 
                                             text-[12px] bg-white text-black cursor-pointer border border-[#e8e8e1] hover:border-black hover:border"
              >
                <a>SHOP NOW</a>
              </button>
            </div>
          </div>

          <div className="w-[30%]">
            <div className="w-full">
              <img src={modalWoven} alt="micro-modal" className="w-full"></img>
            </div>

            <div className="text-center mt-3.5">
              <h3 className="text-[24px] text-black font-light">
                Instant Modal Woven
              </h3>
              <button
                className="uppercase tracking-[0.3em] font-normal mt-2.5 px-4 py-2.5 
                                             text-[12px] bg-white text-black cursor-pointer border border-[#e8e8e1] hover:border-black hover:border"
              >
                <a>SHOP NOW</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="flex gap-6 w-full justify-center">
          <div className="w-[30%]">
            <div className="w-full">
              <img src={scrunchies} alt="micro-modal" className="w-full"></img>
            </div>

            <div className="text-center mt-3.5">
              <h3 className="text-[24px] text-black font-light">
                NEW! Scrunchies
              </h3>
              <button
                className="uppercase tracking-[0.3em] font-normal mt-2.5 px-4 py-2.5 
                                             text-[12px] bg-white text-black cursor-pointer
                                                    border border-[#e8e8e1] hover:border-black hover:border "
              >
                <a>SHOP NOW</a>
              </button>
            </div>
          </div>

          <div className="w-[30%]">
            <div className="w-full">
              <img src={lounge} alt="micro-modal" className="w-full"></img>
            </div>

            <div className="text-center mt-3.5">
              <h3 className="text-[24px] text-black font-light">
                Modal Lounge Sets
              </h3>
              <button
                className="uppercase tracking-[0.3em] font-normal mt-2.5 px-4 py-2.5 
                                             text-[12px] bg-white text-black cursor-pointer border border-[#e8e8e1] hover:border-black hover:border"
              >
                <a>SHOP NOW</a>
              </button>
            </div>
          </div>

          <div className="w-[30%]">
            <div className="w-full">
              <img
                src={instantChiffon}
                alt="micro-modal"
                className="w-full"
              ></img>
            </div>

            <div className="text-center mt-3.5">
              <h3 className="text-[24px] text-black font-light">
                Instant Chiffon Hijabs
              </h3>
              <button
                className="uppercase tracking-[0.3em] font-normal mt-2.5 px-4 py-2.5 
                                             text-[12px] bg-white text-black cursor-pointer border border-[#e8e8e1] hover:border-black hover:border"
              >
                <a>SHOP NOW</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="flex justify-center gap-15 px-20 ">
          <div className="w-[55%]">
            <img
              src={design}
              alt="Design Process"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[35%]">
            <p className="text-[15px] font-light tracking-[0.3em] text-black">
              THE DESIGN
            </p>

            <h2 className="text-[35px] font-light text-black mb-4">
              It all starts here!
            </h2>

            <p className="font-light leading-[22.5px] text-black text-base">
              It's a 6 month journey from the drawing board to your wardrobe. In
              our factory, we dream up unique patterns, play with colors on
              different palettes, and bring those ideas to life on fabric that's
              been carefully picked just for hijabis. Creating our pin-less
              instant hijabs involves a process that's far more complex than
              sewing a basic blouse or shawl. It requires multiple stages of
              dyeing and sewing, followed by carefully assembling those pieces
              together. In the end, you get an effortlessly stylish pre-sewn
              hijab, thoughtfully curated and tailored just for you.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center">
          <h2 className="text-3xl font-light text-black">
            Click on the style you are looking for:
          </h2>
        </div>

        <div className="flex justify-center items-center gap-11 mt-16 px-32 flex-wrap">
          <div>
            <a href="#">
              <img src={Loose} alt="" className="w-[170px]" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={Posh} alt="" className="w-[170px]" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={Voila} alt="" className="w-[170px]" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={freestyle} alt="" className="w-[170px]" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={voilaMaxi} alt="" className="w-[170px]" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={Chic} alt="" className="w-[170px]" />
            </a>
          </div>
        </div>
      </section>

      <section className="mt-18">
        <div className="text-center">
          <h2 className="text-3xl font-light text-black">Shop By Fabric:</h2>
        </div>

        <div className="flex justify-center items-center gap-11 mt-16 px-32 flex-wrap">
          <div>
            <a href="#">
              <img src={liteChiffon} alt="" className="w-[170px]" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={crinkledChiffon} alt="" className="w-[170px]" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={Modal} alt="" className="w-[170px]" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={Jersey} alt="" className="w-[170px]" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={Satin} alt="" className="w-[170px]" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={Premium} alt="" className="w-[170px]" />
            </a>
          </div>
        </div>
      </section>

      <section className="mt-20 mb-20">
        <div className="flex justify-center items-center gap-15 px-20 w-full">
          <div className="w-[35%] ">
            <h2 className="text-[35px] text-black tracking-[2px] font-light">
              Our Factory
            </h2>

            <p className="font-light">
              We operate with the highest standard and commitment to ethical
              practices and craftsmanship. Here, more than 200 women work
              diligently, ensuring that every ready-to-wear hijab and underscarf
              is meticulously crafted from start to finish.
              <br />
              <br />
              Every single pinless instant hijab involves the collective effort
              of at least 20 skilled women to guarantee an exceptional quality.
              These incredible women, with their skilled hands and unwavering
              commitment, are the heartbeat of our creations.
              <br />
              <a href="https://bokitta.com/pages/about-bokitta">
                <em>
                  <strong className=" font-semibold text-[15px] text-black ">
                    <span
                      className="relative before:content-[''] before:absolute before:left-0 before:-bottom-[0.2px]
                                      before:h-[1.5px] before:w-full before:bg-[#d9d9d9]
                                      after:content-[''] after:absolute after:left-0 after:-bottom-[0.2px]
                                      after:h-[2.1px] after:w-0 after:bg-black
                                      after:transition-all after:duration-550
                                      hover:after:w-full hover:after:left-0 hover:text-black"
                                      title="https://bokitta.com/pages/about-bokitta"
                    >
                      Learn more &gt;&gt;
                    </span>
                  </strong>
                </em>
              </a>
              <br />
              <br />
              <a href="#">
                <em>
                  <strong className="font-semibold text-[15px] text-black">
                    Crafted by women for women who embrace hijab & modesty with
                    confidence.
                  </strong>
                </em>
              </a>
            </p>
          </div>

          <div className="w-[55%]">
            <img
              src={Factory}
              alt="new-arrivals"
              className="w-full object-cover"
            ></img>
          </div>
        </div>
      </section>

      <section className="bg-[#1c1d1d] w-full h-[50vh] text-center">
        <div className="pb-8 pt-14">
          <h3 className="text-white font-light text-2xl">
              BECOME AN INSIDER!
          </h3>
        </div>
        <div className="pb-4">
              <p className="text-xl font-light text-white">
                Subscribe to get special offers, free giveaways,
                 and once-in-a-lifetime deals.
                 </p>
        </div>
        <div>
          <input placeholder="Enter your email" className="text-white border py-2 px-3" />
            <button
              className="uppercase tracking-[0.3em] font-semibold mt-4 px-6 py-3 
                                       text-sm bg-black text-white hover:bg-blue-600 before:w-full"
            >
              <a>Subscribe</a>
            </button>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="flex justify-center gap-14 w-[80%] h-[370px] m-auto">
          
            <div>
              <h2 className='font-light text-3xl'>
                  Product
                  <br /> 
                  reviews
              </h2>
              <div className='flex'>
                  <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
                  <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
                  <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
                  <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
                  <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
              </div>
                  <a href=""><span>from 4696 reviews</span></a>
            </div>

            <ReviewSlider />
        </div>
      </section>

      <section>
        <div>
          <img src={Empowering} alt="empowering-women" />
        </div>
      </section>

    <section className="w-full py-18">
      <div className="text-center w-[80%] m-auto">
        <div className=" ">
                  <h2 className="text-3xl font-light text-black">Empowering Women, Empowering Modesty.</h2>

        </div>
        <div className="pt-8 ">
          <p className="text-[15px] font-light text-black">
              At Bokitta, we design premium ready-to-wear hijabs that celebrate every woman’s journey.
               Made with high-quality, breathable fabrics like Lenzing jersey, chiffon, and feather-light modal,
                our hijabs provide unmatched comfort and effortless elegance for all-day wear. 
                Thoughtfully designed to flatter all face shapes, they are perfect for women from all walks 
                of life. Confident, timeless, and effortlessly feminine, Bokitta is here to help you look
                 and feel your best every single day.
                <a href="https://bokitta.com/pages/about-bokitta">
                <em>
                    <span
                      className="relative before:content-[''] before:absolute before:left-0 before:-bottom-[0.2px]
                                      before:h-[1.5px] before:w-full before:bg-[#d9d9d9]
                                      after:content-[''] after:absolute after:left-0 after:-bottom-[0.2px]
                                      after:h-[2.1px] after:w-0 after:bg-black
                                      after:transition-all after:duration-550
                                      hover:after:w-full hover:after:left-0 hover:text-black"
                                      title="Discover the perfect hijab"
                    >
                      Discover  
                    </span>
                </em>
              </a>
                  the perfect hijab for your lifestyle today.
          </p>
        </div>
      </div>
      </section>

      <section>
          <Footer/>  
      </section>

      

    </>
  );
};

export default mainContent;
