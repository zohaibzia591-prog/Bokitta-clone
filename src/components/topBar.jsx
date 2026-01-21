import React from 'react'

const TopBar = () => {
  return (
    <div>
        <section className='flex justify-around w-screen bg-black py-2 text-center cursor-pointer'>
          <div className=' text-white'>
            <span className='uppercase font-bold text-xs tracking-[0.2em]'>Free Shipping</span>
            <p className='underline decoration-white text-white text-sm font-light'><a href='#'>On Orders Over US$50* to USA,Australia and Gulf countries</a></p>
          </div>
          <div className=' text-white'>
            <span className='uppercase font-bold text-xs tracking-[0.2em]'>Sign up Now</span>
            <p className='underline decoration-white text-sm font-light'><a href='#'>Join our Loyalty program & earn rewards </a></p>
          </div>
        </section>
    </div>
  )
}

export default TopBar;


