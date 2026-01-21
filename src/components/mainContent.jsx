import Baki from "../assets/images/x-baki.webp";
import MicroModal from "../assets/images/micro-modal-lenzing-jersey.webp";
import yearsSale from "../assets/images/year-end-sale.webp";
import modalWoven from "../assets/images/instant-modal-woven.webp";
import design from "../assets/images/the-design.webp";
import scrunchies from "../assets/images/New-Scrunchies.webp";
import lounge from "../assets/images/model-lounge-sets.webp";
import instantChiffon from "../assets/images/instant-chiffon-hijab.jpg";
import Loose from "../assets/images/freestyle-loose.webp"
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



const mainContent = () => {
  return (
    <>
      <section className="mt-20 ">
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
      </section>

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

      <section className="mt-20">
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
                It's a 6 month journey from the drawing board to your wardrobe.
                In our factory, we dream up unique patterns, play with colors on
                different palettes, and bring those ideas to life on fabric
                that's been carefully picked just for hijabis. Creating our
                pin-less instant hijabs involves a process that's far more
                complex than sewing a basic blouse or shawl. It requires
                multiple stages of dyeing and sewing, followed by carefully
                assembling those pieces together. In the end, you get an
                effortlessly stylish pre-sewn hijab, thoughtfully curated and
                tailored just for you.
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
          <h2 className="text-3xl font-light text-black">
                Shop By Fabric:
          </h2>
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

      <section className="mt-20 ">
        <div className="flex justify-center gap-8 items-center w-full ">
          <div className="w-[30%] ">
             
            <h2 className="text-[35px] text-black tracking-[2px] font-light">
              Our Factory
            </h2>

            <p className="font-light">
                We operate with the highest standard and commitment to ethical practices and craftsmanship.
                Here, more than 200 women work diligently, ensuring that every ready-to-wear hijab and underscarf 
                is meticulously crafted from start to finish.
                <br/>
                <br/>
                  Every single pinless instant hijab involves the collective effort of at least 20 skilled women
                  to guarantee an exceptional quality. These incredible women, with their skilled hands and
                  unwavering commitment, are the heartbeat of our creations.

                  <a href="#">
                    <em>
                      <strong className="font-bold text-[15px] text-black">
                          Learn more &gt;&gt;
                      </strong>
                    </em>
                  </a>
              <br />
              <br />
              <a href="#">
                    <em>
                      <strong className="font-bold text-[15px] text-black">
                          Crafted by women for women who embrace hijab & modesty with confidence.
                      </strong>
                    </em>
              </a>
            </p>

              
          </div>

          <div className="w-[50%]">
            <img src={Baki} alt="new-arrivals" className="w-full"></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default mainContent;
