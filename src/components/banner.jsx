import Banner from "../assets/images/banner-img 2.webp";

const banner = () => {
  return (
    <>
      <section
        className="relative w-full h-[86.3vh] bg-no-repeat bg-cover object-center bg-center"
        style={{
          backgroundImage: `url(${Banner})`
        }}
      >
      <div className="absolute bg-black/10 inset-0">
        <div className="absolute bottom-10 left-10">
          <h1 className=" text-white tracking-wide font-light text-[58px] leading-[1.3]">
            The Instant Hijab
            <br />
            That Looks Good
            <br />
            on You
          </h1>
          <span className="text-white text-xl font-light ">
            Explore our Latest Collections
          </span>
          <br></br>

          <button
            className="uppercase tracking-[0.3em] font-semibold mt-3.5 px-5 py-3 
                                        text-sm bg-white text-black"
          >
            <a>Shop Now</a>
          </button>
        </div>
      </div>
      </section>
    </>
  );
};

export default banner;
