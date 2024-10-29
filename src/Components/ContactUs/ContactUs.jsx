import React, { useEffect } from 'react'

export default function ContactUs() {

    useEffect(()=>{
        window.scrollTo({top : 0 , behavior:'smooth'})
    
       
      },[])

return <>
<section className= ' contactUs py-8 md:flex justify-center gap-5 md:mt-[100px] mt-[80px] myContainer'>


    <div className="leftSide border md:w-1/4 px-6 py-10">
        <div className="callUs flex items-center gap-2">
        <div className='bg-[#DB4444] w-8 h-8 rounded-full flex items-center justify-center text-white'>
        <i className="fa-solid fa-phone"></i>
        </div>
        <p>Call To Us</p>
        </div>
        <p className='my-3'>We are available 24/7, 7 days a week.</p>
        <p className='border-b pb-5 border-black'>Phone: +8801611112222</p>
        <div className="callUs flex items-center gap-2 my-4">
        <div className='bg-[#DB4444] w-8 h-8 rounded-full flex items-center justify-center text-white'>
        <i className="fa-regular fa-envelope"></i>        </div>
        <p>Write To US</p>
        </div>
        <p className=''>Fill out our form and we will contact you within 24 hours..</p>
        <p className='my-3'>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
    </div>

    <div className="rightSide border p-8">
        <form >

<input type="text" placeholder='Your Name '  className='bg-[#F5F5F5] p-2   focus:outline-none focus:border-black' />
<span class="asterisk_input">  </span>            

<input type="Email" placeholder='Your Email '  className='bg-[#F5F5F5] p-2   focus:outline-none focus:border-black' />
<span class="asterisk_input">  </span>            
<input type="number" placeholder='Your Phone '  className='bg-[#F5F5F5] p-2   focus:outline-none focus:border-black' />
<span class="asterisk_input">  </span>    

<div className='my-5'>

<textarea  rows="8" class=" ' p-2.5 w-full rounded-none text-sm resize-none text-gray-900 bg-[#F5F5F5]  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Message"></textarea>

</div>
<button className='bg-[#DB4444] float-end text-white py-2 px-8 rounded text-sm my-3'>Send Message</button>


        </form>
    </div>

</section>



</>
}
