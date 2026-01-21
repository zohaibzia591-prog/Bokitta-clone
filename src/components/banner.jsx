import React from 'react'
// import Banner from "../assets/images/banner.webp";
import Banner from "../assets/images/banner-img 2.webp";


const banner = () => {
  return (
    <>
        <section className="pl-11 pt-48 w-ful h-screen " 
            style={{ backgroundImage: `url(${Banner})`, backgroundSize: "110%", backgroundSize: "center", backgroundRepeat:"no-repeat" }}>
                <div>
                  <h1 className="text-white tracking-wide font-light text-6xl leading-[1.3]">
                    The Instant Hijab 
                    <br/>
                    That Looks Good
                    <br/>
                    on You hello
                  </h1>
                  <span className="text-white text-xl font-light ">
                    Explore our Latest Collections
                  </span>
                  <br></br>
        
                  <button
                    className="uppercase tracking-[0.3em] font-semibold mt-3.5 px-6 py-3 
                                        text-sm bg-black text-white hover:bg-blue-600 before:w-full"
                  >
                    <a>Discover More</a>
                  </button>
                </div>
              </section>
    </>
  )
}

export default banner