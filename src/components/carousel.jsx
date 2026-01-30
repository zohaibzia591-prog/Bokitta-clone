import { useState } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  "Beautiful!",
  "I Love it!",
  "Crisp and timeless",
  "Perfect!",
  "My Favourite!",
];
const slides_content = [
  "1 I love it, the quality is good and it’s very soft ! There are some wrinkles on it, even after washing. Let's see",
  "2 I love it, the quality is good and it’s very soft ! There are some wrinkles on it, even after washing. Let's see",
  "So nice!",
  "Beautiful",
  "Perfect!",
  "One of my favourite!",
  "Crisp And Timeless!",
  "I love it but...",
  "Cheerful but elegent!",
  "feminine,pretty blush pink!",
];

const slide_stars = [
    <div className='flex'>
        <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
        <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
        <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
        <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
        <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
    </div>
]

export default function Carousel() {
  const [active, setActive] = useState(0);

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>

            {/* left content */}
    <div className="flex justify-center items-center">
        <div className=''>
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

            {/* Right conetent */}
    
    <div className="relative w-full max-w-xl">
      
      {/* Slides */}
      
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg flex items-center justify-center">
        {/* <div className='flex'>
                <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
                <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
                <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
                <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
                <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
        </div> */}
        
        <h2 className="text-3xl font-semibold transition-all duration-700">
                {slides[active]}
        </h2>
        <p>{slides_content[active]} </p>
        <div>
            <Swiper slidesPerView={4} spaceBetween={10} 
                      >
                <SwiperSlide>Item 1</SwiperSlide>
                <SwiperSlide>Item 2</SwiperSlide>
                <SwiperSlide>Item 3</SwiperSlide>
                <SwiperSlide>Item 4</SwiperSlide>
            </Swiper>
        </div>

        
        
      </div>
       

      {/* Indicators */}
      {/* <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-3 h-3 rounded-full ${
              active === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div> */}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full">
        
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full">
        
        ›
      </button>
    </div>
    </div>
    </>
  );
}




