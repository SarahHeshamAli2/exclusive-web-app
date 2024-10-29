import React from 'react'
import qrCode from '../../assets/imgs/qrcode.jpeg'
import playStore from '../../assets/imgs/pstore.png'
import appleStore from '../../assets/imgs/apple.png'
export default function Footer() {
 return <>
 

 <footer className=' bg-black text-white p-4 '>


<div className="innerFooter  md:p-3 md:mx-auto myContainer   md:flex container justify-between block flex-wrap sm:justify-start ">

  <div className='parentFooter   lg:w-1/5 sm: 1/4'>
    <div className="inner px-3">
    <ul>
      <li className='my-3'>
        <h2 className='text-2xl'> Exclusive</h2>
      </li>
      <li className='my-3'>
        <h6 className='text-xl'> Subscribe</h6>
      </li>
      <li className='my-3'>
        <p>Get 10% off your first order</p>
      </li>
      <li className='my-3'>
       
<div className="input relative inline-block">
<input className="shadow appearance-none bg-transparent border border-white rounded  py-3 flex items-center px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="email" placeholder='Enter your email'/>
<i className="fa-solid fa-forward text-white absolute right-5 top-[40%] -translate-y-1/2"></i>
</div>
      </li>
    </ul>
    </div>
  </div>
  <div className='parentFooter  lg:w-1/5   sm: 1/4'> 
    <div className="inner px-3">
    <ul >
      <li className='my-3'>
        <h2 className='text-xl'> Support</h2>
      </li>
      <li className='my-3'>
       <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
      </li>
      <li className='my-3'>
        <p>exclusive@gmail.com</p>
      </li>
      <li className='my-3'>
        <p>+88015-88888-9999</p>
      </li>

    </ul>
    </div>
  </div>
  <div className='parentFooter  lg:w-1/5  sm: 1/4 '> 
    <div className="inner px-3">
    <ul >
      <li className='my-3'>
        <h2 className='text-xl'> Account</h2>
      </li>
      <li className='my-3'>
       <p>My Account</p>
      </li>
      <li className='my-3'>
        <p>Login / Register</p>
      </li>
      <li className='my-3'>
        <p>Cart</p>
      </li>
      <li className='my-3'>
        <p>Wishlist</p>
      </li>
      <li className='my-3'>
        <p>Shop</p>
      </li>

    </ul>
    </div>
  </div>
  <div className='parentFooter  lg:w-1/5   sm: 1/4'> 
    <div className="inner px-3">
    <ul >
      <li className='my-3'>
        <h2 className='text-xl'> Quick Link</h2>
      </li>
      <li className='my-3'>
       <p>Privacy Policy</p>
      </li>
      <li className='my-3'>
        <p>Terms Of Use</p>
      </li>
      <li className='my-3'>
        <p>FAQ</p>
      </li>
      <li className='my-3'>
        <p>Contact</p>
      </li>
  

    </ul>
    </div>
  </div>
  <div className='parentFooter  lg:w-1/5  sm: 1/4 '> 
    <div className="inner px-3">
    <ul >
      <li className='my-3'>
        <h2 className='text-xl'> Download App</h2>
      </li>
      <li className='my-3'>
       <p className='text-xs text-[#dcdada]'>Save $3 with App New User Only</p>
      </li>
      <li className='my-3 '>

  
  <div className="inner flex items-center">
    <img src={qrCode} alt="qr code "  className='md:w-1/2 w-1/4'/>
  <div className="stores ">
    <img src={playStore} alt="" className='w-[113px]'/>
    <img src={appleStore} alt=""  className='w-[113px]'/>



  </div>
  </div>

      </li>
      <li className='my-3 socialMediaIcons flex gap-3'>
      <i className="fa-brands fa-facebook-f"></i>
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-linkedin-in"></i>      </li>

  

    </ul>
    </div>
  </div>

</div>
 

 </footer>

 </>
}
