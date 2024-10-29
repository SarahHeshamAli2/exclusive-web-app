import React from 'react'

export default function OurHelp() {
  return <>
  
  <section className='md:flex justify-between md:p-20 '>
    <div className="first ">
   <div className='w-14 h-14 bg-black rounded-full text-white flex items-center justify-center md:mx-auto border-8 border-[#c1c1c1] '>
   <i className="fa-solid fa-truck-fast block"></i>
   </div>
   <h3 className='text-xl font-bold my-2'>
   FREE AND FAST DELIVERY
   </h3>
   <span>Free delivery for all orders over $140</span>
    </div>
    <div className="first ">
   <div className='w-14 h-14 bg-black rounded-full text-white flex items-center my-2   md:mx-auto justify-center border-8 border-[#c1c1c1] '>
   <i className="fa-solid fa-headphones-simple"></i>   </div>
   <h3 className='text-xl font-bold my-2'>
   24/7 CUSTOMER SERVICE
      </h3>
   <span>Friendly 24/7 customer support</span>
    </div>
    <div className="first ">
   <div className='w-14 h-14 bg-black rounded-full text-white md:mx-auto flex items-center my-2 justify-center border-8 border-[#c1c1c1] '>
   <i className="fa-solid fa-money-check"></i>   </div>
   <h3 className='text-xl font-bold my-2'>
   MONEY BACK GUARANTEE
   </h3>
   <span>We reurn money within 30 days</span>
    </div>
  </section>
  
  </>
}
