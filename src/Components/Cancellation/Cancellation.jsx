import React from 'react'
import cancel from '../../assets/imgs/cancel.jpg'
export default function Cancellation() {
return <>

<div className="myContainer ">
        <div className="lg:w-1/3 mt-[50px] mx-auto text-center">
            <img src={cancel} alt="cancellation" className='w-full'/>
            <p className='text-3xl my-2'>No cancel orders yet !</p>
        </div>
</div>


</>
}
