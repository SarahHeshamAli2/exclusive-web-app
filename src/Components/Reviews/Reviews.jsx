import React from 'react'
import reviews from '../../assets/imgs/reviews.jpg'

export default function Reviews() {
  return <>
  
<div className="myContainer ">
        <div className="lg:w-1/3 mt-[50px] mx-auto text-center">
            <img src={reviews} alt="reviews" className='w-full'/>
            <p className='text-3xl my-2'>No reviews yet !</p>
        </div>
</div>
  </>
}
