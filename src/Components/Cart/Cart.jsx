import React, { useContext, useEffect, useState } from 'react'
import emptyCart from '../../assets/imgs/emptyCart.png'
import { cartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import LoadingScreen from '../LoadingScreen/LoadingScreen'

export default function Cart() {
  const [shippingFee, setShippingFee] = useState(Number(localStorage.getItem('shippingFee')))
  const [coupon, setCoupon] = useState(localStorage.getItem('coupon'))
  const {getUserCart, totalCartPrice,
    numberOfCartItems,
    deleteSpecificCartItem
    ,
    isCartLoad,
    allCartProducts,updateProductCount,isLoad , setNumberOfCartItems}=useContext(cartContext)
    const [btnValue, setBtnValue] = useState([])

    
    console.log(coupon);
    console.log(shippingFee);
    
    
if(coupon != '' && coupon !=null) {
  
  localStorage.setItem('shippingFee',0)

}
else {
  
  localStorage.setItem('shippingFee',20)

}
   
useEffect(()=>{
  getUserCart()
  window.scrollTo({top : 0 , behavior:'smooth'})
},[])


function applyCoupon() {

 localStorage.setItem('shippingFee',0)
 localStorage.setItem('coupon',coupon)
  setShippingFee(0)
  toast.success('coupon applied !')
}



function removeCoupon() {
  localStorage.setItem('shippingFee',20)
  setShippingFee(20)

  localStorage.removeItem('coupon')  
  localStorage.removeItem('focus')  
  setCoupon('')
  toast.error('coupon removed !')
}

function addNewCoupon(event) {
  setCoupon(event.target.value)

}
function updateCoupon(){
  if(localStorage.getItem('coupon') != '' && localStorage.getItem('coupon')) {
    localStorage.setItem('focus','focus')

  }

}
function handleUpdateCount(prodId,count,e,btn) {
  setBtnValue([prodId,e])

  
  
  updateProductCount(prodId,count)
}
return <>



{isCartLoad ? <LoadingScreen/> : <section  className='cart myContainer py-5 mt-[100px]'>
{

  numberOfCartItems == 0 ? <div className='md:w-1/4 mx-auto text-center'>
  
  <img src={emptyCart} alt="empty cart"  className='w-full'/>
  <p className='font-bold'>Looks Like your cart is empty !</p>
  <Link to={"/"}>
  <button className='bg-[#DB4444] text-white p-3 rounded my-2'>Back to shop</button>

  </Link>
  </div>
  
  
  
  
  :<div className="wrapped">
  <div className="productInfo flex justify-between items-center shadow-sm md:p-5 ">
    <h2>Product</h2>
    <h2>Price</h2>
    <h2>Quantity</h2>
    <h2>Subtotal</h2>
  </div>
  {allCartProducts?.map((pro)=><div key={pro?._id} className="productInfo flex justify-between items-center shadow-sm md:p-5">
  <div >
  <div className='prod'>
  <i onClick={()=>{deleteSpecificCartItem(pro.product._id)}} className="fa-solid fa-xmark text-red-500 cursor-pointer"></i>
  
  <Link to={`/product/${pro.product._id}`}>
  
  <div className=' flex items-center w-10'>
  <img src={pro?.product.imageCover} alt="" className='w-full'/>
  <p>{pro?.product?.title?.split(" ").slice(0,2).join(" ")}</p>
  </div>
  </Link>
    </div>
  </div>
    <h2>${pro?.price}</h2>
    <div className=''>
      {pro.count <= 1 ? <i onClick={()=>{deleteSpecificCartItem(pro.product._id)}} className="fa-solid fa-trash-can cursor-pointer text-red-600"></i> :   <button value={'decr'} onClick={(e)=>{handleUpdateCount(pro.product._id,pro.count -1,e.currentTarget.value)}}>{isLoad && btnValue[0] == pro.product._id && btnValue[1]== 'decr'? <i className="fa-solid fa-spinner fa-spin"></i>: '-'}</button>
    }
    
    <input readOnly type="number" className='w-8  mx-2 rounded border [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder={pro?.count}/>
   
    <button value={'incr'} onClick={(e)=>{handleUpdateCount(pro.product._id,pro.count +1 ,e.currentTarget.value,e.currentTarget)}}>{isLoad && btnValue[0] == pro.product._id &&  btnValue[1]=='incr'? <i className="fa-solid fa-spinner fa-spin"></i>: '+'}</button>
    </div>
  
    <h2>${pro?.price * pro.count}</h2>
  </div>)}
  <div className="flex justify-between my-5">
    <Link to={"/"} className='border rounded border-black px-4 py-2'>Return To Shop</Link>
   
    <button  className='border rounded border-black px-4 py-2'>Update Cart</button>
  </div>
  
  <div className="coupon md:flex justify-between my-4 py-5">
    <div className="leftSide md:w-1/2">
      <input type="text" onFocus={updateCoupon} value={coupon} onChange={function(e){addNewCoupon(e)}} className='border  border-black rounded px-4 py-2' />
  
      {localStorage.getItem('focus') ? <button name='test' onClick={applyCoupon} className='bg-[#DB4444] text-white px-6 py-2 rounded md:ms-2'>
        
        
        Update Coupon</button> :''}
      {
        shippingFee == 0 || localStorage.getItem('coupon')?  <button onClick={removeCoupon} className='bg-[#DB4444] text-white px-6 py-2 rounded md:ms-2'>
        
        
        Remove Coupon</button>  :     <button onClick={applyCoupon} className='bg-[#DB4444] text-white px-6 py-2 rounded md:ms-2'>
        
        
        Apply Coupon</button> 
      }
  
     
    </div>
    <div className="rightSide border md:w-1/4 p-5 border-black text-center my-2">
      <h3 className='text-start font-bold'>Cart Total</h3>
      <div className="flex justify-between border-b pb-3 my-2 border-black">
        <span>SubTotal:</span>
        <span>{totalCartPrice}$</span>
      </div>
      <div className="flex justify-between border-b pb-3 my-2 border-black">
        <span>Shipping:</span>
        {
          shippingFee == 0 ?       <span  className='text-green-600'> <i onClick={removeCoupon} className="fa-solid fa-xmark text-red-400 cursor-pointer"></i> Free delivery applied !</span>
  : ''
        }
     
        <span>{shippingFee}</span>
      </div>
      <div className="flex justify-between my-2">
        <span>Total:</span>
        <span>{totalCartPrice + shippingFee}$</span>
      </div>
      <Link to='/payment'>
      <button className='bg-[#DB4444] text-white py-2 px-5 rounded'>Proceed to Checkout</button>

      </Link>
    </div>
  </div>
  
  </div>
}


</section>
}




</>
}
