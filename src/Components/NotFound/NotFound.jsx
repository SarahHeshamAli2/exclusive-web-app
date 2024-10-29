import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NotFound() {
return <>

<ul className='flex w-[30%] justify-center py-6 '>
  <li>
    <Link to='/home'>Home</Link>
  </li>
  <li className='mx-3'>/</li>
  <li className='font-bold'>
   404 Error
  </li>
</ul>
<section className='my-20 p-20'>
  <div className="notFound  flex flex-col items-center ">
    <h4 className='lg:text-8xl text-4xl'>
    404 Not Found
    </h4>
    <p className='my-5'>
    Your visited page not found. You may go home page.
    </p>
    <button className='bg-[#DB4444] hover:bg-[#b43c3c] transition-all text-white px-10 py-3  my-5'>Back to home page</button>
  </div>
</section>



</>
}
