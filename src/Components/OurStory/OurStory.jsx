import React from 'react'
import woman from '../../assets/imgs/story.jpeg'
import PeopleSlider from '../PeopleSlider/PeopleSlider'
import OurHelp from '../OurHelp/OurHelp'
export default function OurStory() {
return <>


<div className="myContainer md:mt-[100px] mt-[60px]">
<section className='ourStory  py-5  md:flex items-center'>
<div className="leftSide md:w-1/2">
    <div className="ourStory">
        <h2 className='text-5xl'>Our Story</h2>
        <div className="w-3/4">
        <p className='my-5'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p></div>
    </div>
</div>

<div className="rightSide md:w-1/2">
    <img src={woman} alt="women stories"  className='w-full'/>
</div>

</section>

<section className='md:flex justify-between py-5  '>
    <div className="first text-center border p-5 ">
   <div className='w-14 h-14 bg-black rounded-full text-white  flex items-center justify-center mx-auto border-8 border-[#c1c1c1] '>
   <i className="fa-solid fa-store"></i>   </div>
   <h3 className='text-xl font-bold my-2'>
   10.5k 
   </h3>
   <span>Sellers active our site</span>
    </div>
    <div className="first text-center border p-5 ">
   <div className='w-14 h-14 bg-black rounded-full text-white flex items-center justify-center mx-auto border-8 border-[#c1c1c1] '>
   <i className="fa-solid fa-dollar-sign"></i>   
     </div>
   <h3 className='text-xl font-bold my-2'>
   33k
   </h3>
   <span>Monthly Produduct Sale</span>
    </div>
    <div className="first text-center border p-5 ">
   <div className='w-14 h-14 bg-black rounded-full text-white flex items-center justify-center mx-auto border-8 border-[#c1c1c1] '>
   <i className="fa-solid fa-gift"></i>   
     </div>
   <h3 className='text-xl font-bold my-2'>
   45.5k 
   </h3>
   <span>Customer active in our site</span>
    </div>
    <div className="first text-center border p-5 ">
   <div className='w-14 h-14 bg-black rounded-full text-white flex items-center justify-center mx-auto border-8 border-[#c1c1c1] '>
   <i className="fa-solid fa-sack-dollar"></i>   
   </div>
   <h3 className='text-xl font-bold my-2'>
   25k 
   </h3>
   <span>Anual gross sale in our site</span>
    </div>

  </section>



  <section className='personSider py-10 overflow-hidden border-b-2'>

<PeopleSlider/>

  </section>
  

  <div className="ourHelp my-3">
    <OurHelp/>
  </div>
</div>




</>
}
