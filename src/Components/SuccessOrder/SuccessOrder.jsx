import React from 'react'
import ship from '../../assets/imgs/ship.jpg'
import { Link } from 'react-router-dom'

export default function SuccessOrder() {
 return <>
 
 <div className='myContainter my-5 py-4 '>
   <div className="mx-auto lg:w-1/2 text-center">
   <img src={ship} alt="online shopping" className='w-full' />
   <p className='font-bold'>your order has been sent </p>
   <p>thank you for shopping with us</p>
   <Link to={"/allorders"}>
  <button className='bg-[#DB4444] text-white p-3 rounded my-2'>view your orders</button>

  </Link>
   </div>
 </div>
 
 </>
}
