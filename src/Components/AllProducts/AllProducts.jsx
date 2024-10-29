import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'
import useGetAllData from '../CustomHooks/useGetAllData'
import LoadingScreen from './../LoadingScreen/LoadingScreen';

export default function AllProducts() {

    const{ addProductToCart,isLoad,addProductToWishlist ,isWishListLoad}= useContext(cartContext)
    const {        allData     } = useGetAllData()
    const [btnValue, setBtnValue] = useState([])
    useEffect(()=>{
        window.scrollTo({top : 0 , behavior:'smooth'})
    
       
      },[])

    if(allData.isLoading) {
        return <LoadingScreen/>
    }    
const products = allData.data.data.data
function handleAddToWishList(id,e) {
    addProductToWishlist (id)
    setBtnValue(id)
    console.log(btnValue);
    
    
  }

  return <>
  
  { <section className='allProducts   myContainer md:mt-[100px] mt-[60px]'>
    <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 ">
    {products?.map((products)=>     <div key={products._id} className="product py-5 my-3 ">
 <div className="wrapper group overflow-hidden relative">
 <div onClick={()=>addProductToCart(products._id)} className="bg-[#db4444a1] text-white rounded p-2 flex items-center justify-center absolute top-1/2 -translate-y-1/2 end-0 left-0 z-40 opacity-0 group-hover:opacity-100 transition-[3000ms] cursor-pointer">


  {isLoad ? <i className="fa-solid fa-spinner fa-spin"></i>  : '  Add to cart'}
  </div>

   <div className="repeated">
<div className=" p-2  relative w-3/4  " >
    <img src={products.imageCover} alt="" className='w-full ' />
    <div className=" absolute top-5 right-5">
      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
      <i onClick={(e)=>{handleAddToWishList(products._id)}} className={isWishListLoad && btnValue == products._id? "fa-regular fa-heart hover:text-[#DB4444] transition-all[200ms] cursor-pointer fa-spin" : 'fa-regular fa-heart hover:text-[#DB4444] transition-all[200ms] cursor-pointer'}></i>

      </div>
<Link  to={`/product/${products._id}`}>

<div className="w-6 h-6 rounded-full flex items-center justify-center bg-white my-2 ">
    <i className="fa-regular fa-eye my-3 hover:text-green-500"></i>
    </div>
</Link>
    </div>
    </div>
      <h6 className="font-bold">{products.title?.split(' ').slice(0,2).join(" ")}</h6>
      
      <div className="flex">
      
     {products.priceAfterDiscount ?  <h6 className="text-[#DB4444]">${products.priceAfterDiscount}</h6> :''}
      <h6 className={products.priceAfterDiscount ?  'line-through mx-3' : ''}>${products.price}</h6>
      </div>

<div className="flex items-center">
<div className="me-3">
<span>{products.ratingsAverage}</span>
<i className="fa-solid fa-star text-orange-300"></i>
</div>
<span>({products.ratingsQuantity})</span>
</div>
</div>
</div>
   
    </div>
      )}
    </div>


  </section> }
  </>
}
