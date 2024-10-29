import React, { useContext, useEffect, useState } from 'react'
import ema from '../../assets/imgs/ema.png'
import { cartContext } from '../../Context/CartContext'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import empty from '../../assets/imgs/emptywishlist.png'
import { Link } from 'react-router-dom'

export default function Wishlist() {


  const {getWishList,wishListProducts,addProductToCart,isWish,removeFromWishList,isCartLoad,isLoad,setWishListCount} =  useContext(cartContext)
  const [id, setId] = useState(null)
  useEffect(()=>{

    getWishList()
    window.scrollTo({top : 0 , behavior:'smooth'})
    
  },[])

  function handleLoading (id) {
    addProductToCart(id)
    setId(id)
  }

  function handleDelete(id) {
    removeFromWishList(id)
    setId(id)
  }
 return <>

 
{isWish ? <LoadingScreen/> :  <section className= 'md:mt-[100px] mt-[70px] myContainer'>


{wishListProducts?.length ==0 ?  <div className='md:w-1/4 mx-auto text-center'>
  
  <img src={empty} alt="empty wishList"  className='w-full'/>
  <p className='font-bold'>Looks Like your wishlist is empty !</p>
  <Link to={"/"}>
  <button className='bg-[#DB4444] text-white p-3 rounded my-2'>Back to shop</button>

  </Link>
  </div> :  <div className="wrapped">
  <div className="wish flex items-center justify-between">
  <h2>WishList({wishListProducts?.length})</h2>
</div>

<div className="wishProducts grid grid-cols-2 md:grid-cols-4 my-4">
{wishListProducts?.map((pro)=><div key={pro.id} className="product w-3/4 relative">
<img src={pro.imageCover} alt="" className='w-full' />
<button onClick={()=>{handleLoading(pro.id)}} className='bg-black text-white w-full py-2 text-[11px] md:text-[16px] '> <i className="fa-solid fa-cart-shopping me-1  md:mx-3"> </i>{isLoad  && id == pro.id? <i className="fa-solid fa-spinner fa-spin"></i>:'Add to Cart'}</button>
<h6 className='font-bold'>{pro.title?.split(' ').slice(0,2).join(" ")}</h6>
<div className="price flex">
{pro.priceAfterDiscount ?  <h6 className="text-[#DB4444] ">${pro.priceAfterDiscount}</h6> :''}
<h6 className={pro.priceAfterDiscount ?  'line-through mx-3' : ''}>${pro.price}</h6>
</div>
  <i onClick={()=>{handleDelete(pro.id)}} className={isCartLoad && id == pro.id ? 'fa-solid fa-spin fa-spinner absolute top-0 end-0 ' :"fa-regular hover:text-red-500 fa-trash-can absolute top-0 end-0 cursor-pointer"}></i>

</div>)}


</div>
  </div> }
 

</section>}
 
 
 
 
 
 
 
 
 </>
}
