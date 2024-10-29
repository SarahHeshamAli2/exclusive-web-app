import axios from 'axios'
import HomeSlider from '../HomeSlider/HomeSlider'
import ProductsSlider from '../ProductsSlider/ProductsSlider'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import jbl from "../../assets/imgs/jbl.png"
import ps from "../../assets/imgs/ps.png"
import women from '../../assets/imgs/women.jpeg'
import speaker from '../../assets/imgs/speaker.png'
import perfume from '../../assets/imgs/perfume.png'
import OurHelp from '../OurHelp/OurHelp'
import { useQuery } from 'react-query'
import useAllCategories from '../CustomHooks/useAllCategories'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useGetAllData from './../CustomHooks/useGetAllData';


export default function Home() {
  useEffect(()=>{
    window.scrollTo({top : 0 , behavior:'smooth'})

   
  },[])

  const{categoriesData} = useAllCategories()
  
  const {allData} = useGetAllData()

console.log(allData?.data?.data?.data);

const products = allData?.data?.data?.data






if(allData.isError){
  return <>
  <h2>There is Error !</h2>
  </>
}

if(allData.isLoading){
  return <>
  
  <LoadingScreen/>
  </>
}


return <>


  <div className='md:mt-[100px] mt-[60px] myContainer '>

  <div className="  mt-[50px] md:flex items-center  gap-5">
  <aside className='border-r-2 border-gray-200 md:w-1/4 '>
  
   {
    categoriesData?.data.data.map((category)=> <p key={category._id} className='font-semibold my-3 '>
      {category.name}
    </p>)
  }
    
  
  
  </aside>
  
  <div className="slider  md:w-[70%]">
  
  <HomeSlider/>
  </div>
  
  </div>
    <section className="mainSection my-5 py-5">
    <div className="flex items-center mx-5">
  
    <div className="today w-[20px] h-[40px] bg-[#DB4444] rounded">
  
  </div>
  <span className='ms-3 text-[#DB4444] font-bold'>Today's</span>
    </div>
  
  
    <div className="flashSale  mx-5 md:flex items-center  w-1/2 my-5">
      <h3 className='md:text-4xl text-2xl'>Flash Sales</h3>
    
    <div className="counter flex md:mx-10">
    <div className="days">
     <p className='mx-3'>Days</p>
     <p className='mx-3 text-3xl  font-bold'>03</p>
     </div>
      
      <div className="hours">
     <p className='mx-3'>Hours</p>
     <p className='mx-3 text-3xl  font-bold'>03</p>
     </div>
     
     <div className="mins">
     <p className='mx-3'>Minutes</p>
     <p className='mx-3 text-3xl font-bold '>03</p>
     </div>
     
     <div className="secs">
     <p className='mx-3'>Seconds</p>
     <p className='mx-3 text-3xl  font-bold'>03</p>
     </div>
    </div>
  
    </div>
  
    </section>
    <section className="produtsSection m-5  py-10 overflow-hidden border-b-2 ">
    
  <ProductsSlider products={products}/>
  
  
  
  <div className='text-center my-3'>


<Link to='/allproducts'>

<button className='bg-[#DB4444] text-white py-4 px-10 rounded'>View all products</button>

</Link>  
  </div>
    </section>
  
  
  
    <section className="mainSection my-5 py-5">
    <div className="flex items-center mx-5">
  
    <div className="today w-[20px] h-[40px] bg-[#DB4444] rounded">
  
  </div>
  <span className='ms-3 text-[#DB4444] font-bold'>Categories</span>
    </div>
  
  
    <div className="flashSale  mx-5 flex items-center  w-1/2 my-5">
      <h3 className='md:text-4xl text-2xl'>Browse By Category</h3>
    
    
    </div>
  
    </section>
  
    <section className="produtsSection m-5  py-10 overflow-hidden border-b-2 ">
    
    <CategoriesSlider/>
    
    
    
  
      </section>
  
  
      <section className="mainSection my-5 py-5">
    <div className="flex items-center mx-5">
  
    <div className="today w-[20px] h-[40px] bg-[#DB4444] rounded">
  
  </div>
  <span className='ms-3 text-[#DB4444] font-bold'>This Month</span>
    </div>
  
  
    <div className="flashSale  mx-5 block md:flex items-center justify-between   my-5">
      <h3 className='md:text-4xl text-2xl'>Best Selling Products</h3>
    
      <div className='md:text-center my-3'>
  <Link to='/allproducts' >
  
  <button className='bg-[#DB4444] text-white  py-4 px-10 rounded'>View all </button>
  </Link>
  
  </div>
  
    </div>
  
    </section>
    <section className="produtsSection m-5  py-10 overflow-hidden  ">
    
    <ProductsSlider products={products} flag={true}/>
  
  
  
    </section>
    <div className="jblSection my-5">
      <div className="blackFrame bg-black md:flex items-center md:text-start  text-center p-2 md:p-0">
        <div className="leftSide md:w-1/2 ms-5 ">
          <span className='text-[#00FF66] '>Categories</span>
          <h3 className='md:text-5xl text-2xl text-white my-5'>Enhance Your Music Experience</h3>
          <div className="counting md:flex grid grid-cols-2 gap-4 my-5">
            <div className="hours w-20 flex items-center justify-center flex-col h-20 bg-white rounded-full ">
              <p className='font-bold'>23</p>
              <span>Hours</span>

            </div>
            <div className="hours w-20 flex items-center justify-center flex-col h-20 bg-white rounded-full ">
              <p className='font-bold'>05</p>
              <span>Days</span>

            </div>
            <div className="hours w-20 flex items-center justify-center flex-col h-20 bg-white rounded-full ">
              <p className='font-bold'>59</p>
              <span>Minutes</span>

            </div>
            <div className="hours w-20 flex items-center justify-center flex-col h-20 bg-white rounded-full ">
              <p className='font-bold'>35</p>
              <span>Seconds</span>

            </div>
          </div>
          <button className='bg-[#00FF66] text-white py-3 my-5 px-10 rounded'>Buy Now</button>
        </div>
        <div className="rightSide mx-auto w-1/2">
      <img src={jbl} alt="jbl" className='w-full' />
        </div>
      </div>
    </div>

    <section className="mainSection my-5 py-5">
    <div className="flex items-center mx-5">
  
    <div className="today w-[20px] h-[40px] bg-[#DB4444] rounded">
  
  </div>
  <span className='ms-3 text-[#DB4444] font-bold'>Our Products</span>
    </div>
  
  
    <div className="flashSale  mx-5 flex items-center  w-1/2 my-5">
      <h3 className='md:text-4xl text-2xl'>Explore Our Products</h3>
    
    
  
    </div>
  
    </section>
  
    <section className="produtsSection m-5  py-10 overflow-hidden  ">
    
    <ProductsSlider products={products} isLoading = {allData.isLoading} rows={true}/>
  
    <div className='text-center my-7'>
<Link to='/allproducts'>
<button className='bg-[#DB4444] text-white py-4 px-10 rounded'>View all products</button>

</Link>  
  </div>
  
    </section>

    <div className="newArrival my-5">
    <section className="mainSection mt-5 py-5">
    <div className="flex items-center mx-5">
  
    <div className="today w-[20px] h-[40px] bg-[#DB4444] rounded">
  
  </div>
  <span className='ms-3 text-[#DB4444] font-bold'>Featured</span>
    </div>
  
  
    <div className="flashSale  mx-5 flex items-center  w-1/2 ">
      <h3 className='md:text-4xl text-2xl'>New Arrival</h3>
    
    
  
    </div>
  
    </section>


    <div className="imgsCollection md:flex gap-3">
      <div className="leftSide md:w-1/2 bg-black relative">
        <img src={ps} alt="play station" className='w-full' />
        <div className="psText text-white absolute bottom-7 start-5 w-1/2">
        <h6 className='text-2xl' >PlayStation 5.</h6>
        <p className='my-4 text-sm w-3/4'>Black and White version of the PS5 coming out on sale.</p>
        <button className='border-b-2'>Shop Now</button>
        </div>
      </div>


<div className="rightSide md:w-1/2">
  <div className="women bg-[#0D0D0D] text-white flex justify-around items-center  ">
  <div className="womenText p-4 mt-5">
  <h6 className='text-2xl' >Women’s Collections</h6>
  <p className='my-2 text-sm'>Featured woman collections that give you another vibe.</p>
  <button className='border-b-2'>Shop Now</button>

  </div>

  <img src={women} alt="women" className=' transform -scale-x-100 w-1/2 '/>
  </div>

<div className="flex gap-3 item mt-4">
<div className="speakers w-1/2 bg-black relative py-4 px-3">
  <img src={speaker} alt="speaker" className='w-full' />
  <div className="speakerText text-white absolute bottom-5 pb-5">
  <h6 className='text-2xl' >Speakers</h6>
        <p className='text-sm my-2 '>Amazon wireless speakers</p>
        <button className='border-b-2'>Shop Now</button>
  </div>
  </div>
<div className="speakers w-1/2 bg-black relative py-4 px-3">
  <img src={perfume} alt="gucci perfume" className='w-full' />
  <div className="speakerText text-white absolute bottom-0 pb-5">
  <h6 className='text-2xl' >Perfume</h6>
        <p className='text-sm my-2'>GUCCI INTENSE OUD EDP</p>
        <button className='border-b-2'>Shop Now</button>
  </div>
  </div>

</div>
</div>
    </div>
    </div>


    <div className="ourHelp my-6">
      <OurHelp/>
    </div>


    </div>









</>
}
