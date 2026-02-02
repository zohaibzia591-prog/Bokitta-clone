import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import ReviewCard from "./reviewCard";

export default function ReviewSlider() {
  const reviews = [
    {
      title: "Perfect!",
      text: "I love the color combination! Perfect!",
      product: "GrayBlack – Instant Hijab",
    },
    {
      title: "I Love It!",
      text: "Fits perfectly and it's easy to use. ❤️❤️❤️❤️❤️",
      product: "Kuala Lumpur Beige – Instant Hijab",
    },
    {
      title: "One of my favorites!",
      text: "I wear it every single day !!",
      product: "Sea – Crepe Chiffon",
    },
    {
      title: "My favorite!",
      text: "I simply love it !",
      product: "Skylight – Crepe Chiffon",
    },
    {
      title: "Amazing!",
      text: "Soft fabric and premium quality.",
      product: "Nude – Chiffon",
    },
    {
      title: "Crisp And Timeless",
      text: "A classic must-have in my hijab collection. The crisp white shade is so fresh and clean, instantly brightening",
      product: "Bright white - BASICS Plain Lite Chiffon",
    },
    {
      title: "I LOve It But!",
      text: "I love it, the quality is good and it’s very soft ! There are some wrinkles on it, even after washing. Let's see",
      product: "Nude – Chiffon",
    },
    {
      title: "I Love It!",
      text: "I simple love it. The inner is a light fabric which makes it perfect for hot weather!",
      product: "Nude – Chiffon",
    },
    {
        title:"Cheerful but elegant!",
        text:"This is such a cheerful and elegant piece! The soft yellow color instantly brightens my face and adds a fresh,",
        product:"Soft Yellow Satin Crinkled -",
    }
  ];
  console.log(reviews);

  return (
    <div className="max-w-7xl mx-auto  py-6 bg-amber-500">

      <Swiper
        modules={[Navigation]}
        autoplay={{delay: 5000}}
        navigation
        loop
        spaceBetween={5}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}
