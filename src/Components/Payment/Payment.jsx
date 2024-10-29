import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/CartContext'
import axios from 'axios'
import ema from '../../assets/imgs/ema.png'
import bkash from '../../assets/imgs/bkash.png'
import visa from '../../assets/imgs/visa.png'
import master from '../../assets/imgs/master.png'
import fire from '../../assets/imgs/fire.png'
import { useNavigate, useParams } from 'react-router-dom'
export default function Payment() {

    

    console.log(window.location.href)    
   const navigate= useNavigate()

    

    const  {cartId , checkOut ,updateUi,cartOwner,setCartOwner}= useContext(cartContext)

const [isLoad, setIsLoad] = useState(false)    
const [isEmpty, setIsEmpty] = useState(false)    
const [isOnline, setIsOnline] = useState(false)  





    function payCashOrder(body) {
        setIsLoad(true)
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}
` , {
    body
} , {
    headers : {
        token : localStorage.getItem('userToken')
    }
}).then((resp)=>{console.log(resp)

    setCartOwner(resp.data.data.user)
    // localStorage.setItem('userId',JSON.stringify(resp.data.data.user))
    setIsLoad(false)
    updateUi()
    navigate('/ordercompleted')
}).catch((err)=>{console.log(err)
    setIsLoad(false)
})


    }
    function payOnline(body) {
        if(window.location.href == 'https://sarahheshamali2.github.io/payment') {

        }
        setIsLoad(true)
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${window.location.href ==  'https://sarahheshamali2.github.io/payment' ?'https://sarahheshamali2.github.io'  : 'http://localhost:5173'}
` , {
    body
} , {
    headers : {
        token : localStorage.getItem('userToken')
    }
}).then((resp)=>{console.log(resp)
    console.log(resp);
    
    // localStorage.setItem('userId',JSON.stringify(resp.data.data.user))

    window.open(resp.data.session.url,'_self')
    setIsLoad(false)


}).catch((err)=>{console.log(err)
    setIsLoad(false)
})


    }

    function takeClientInfo() {
        const clientInfo = {
            phone : document.getElementById('phoneNumber').value , 
            city : document.getElementById('city').value,
            details : document.getElementById('details').value,
        }

        
        const shipping = {
            shippingAddress : clientInfo
        }



        if(isOnline) {
            payOnline(shipping)
        }
        else {
            payCashOrder(shipping)

        }

    }

    function checkIfEmpty (e)
    

{

    e.preventDefault()
const details= document.getElementById('details').value
const city= document.getElementById('city').value
const phoneNumber= document.getElementById('phoneNumber').value

if(details && city && phoneNumber == '') {
    setIsEmpty(true)
    
}
else {
    takeClientInfo()
    setIsEmpty(false)
    
}

}
  return <>
  
  <div className="myContainer py-5 my-5">
<div className="md:flex">

<div className="left md:w-1/2">
<h2 className='text-4xl'>
Billing Details
</h2>
<form  id='myForm' onSubmit={(e)=>{checkIfEmpty(e)}} className="signUpInputs my-6 xl:w-3/4 flex flex-col gap-3">

<label htmlFor='fn' className='text-[#a2a2a2]' >First Name <span className='text-red-500'>*</span></label>
<input  required id='fn'    type="text" className='md:w-3/4 mt-2 py-2 border block focus:outline-none bg-[#F5F5F5]'/>
<label htmlFor='company' className='text-[#a2a2a2]' >Company Name </label>
<input required id='company'  type="text" className='md:w-3/4 mt-2 py-2 border block focus:outline-none bg-[#F5F5F5]'/>

<label htmlFor='details' className='text-[#a2a2a2]' > Street Address <span className='text-red-500'>*</span></label>

<input  required id='details'   name='details'  type="text" className='md:w-3/4 mt-2 py-2 border block focus:outline-none bg-[#F5F5F5]'/>

<label htmlFor='apartment' className='text-[#a2a2a2]' >Apartment, floor, etc. (optional)</label>
<input required id='apartment' name='apartment'  type="text" className='md:w-3/4 mt-2 py-2 border block focus:outline-none bg-[#F5F5F5]'/>





<label htmlFor='city' className='text-[#a2a2a2]' > Town / city <span className='text-red-500'>*</span></label>

<input required id='city'  name='city'  type="text" className='md:w-3/4 mt-2 py-2 border block focus:outline-none bg-[#F5F5F5]'/>

<label htmlFor='phoneNumber' className='text-[#a2a2a2]' >Phone Number <span className='text-red-500'>*</span></label>
<input required id='phoneNumber'  name='phone'  type="tel" className='md:w-3/4 mt-2 py-2 border block focus:outline-none bg-[#F5F5F5]'/>

<label htmlFor='email' className='text-[#a2a2a2]' >Email Adress <span className='text-red-500'>*</span></label>
<input required id='email'  name='email'  type="email" className='md:w-3/4 mt-2 py-2 border block focus:outline-none bg-[#F5F5F5]'/>







</form>

</div>


<div className="right md:w-1/3 mt-20">

{
    checkOut?.data?.products?.map((pro)=>{return <div className="productDetails my-4">
        <div className="flex items-center justify-between">
           <div className='flex items-center'>
           <img src={pro.product.imageCover} alt={pro.product.title}className='w-[50px]'  />
           <h2>{pro?.product?.title?.split(" ").slice(0,2).join(" ")}</h2>
           </div>
           <h2>${pro.price}</h2>
        </div>
       </div>})
}


<div className="total">
<div className="flex justify-between border-b pb-3 my-2 border-black">
        <span>SubTotal:</span>
        <span>{checkOut?.data?.totalCartPrice}$</span>
      </div>
      <div className="flex justify-between border-b pb-3 my-2 border-black">
        <span>Shipping:</span>
  
        <span> {localStorage.getItem('shippingFee')}</span>
      </div>
      <div className="flex justify-between my-2">
        <span>Total:</span>
        <span>{checkOut?.data?.totalCartPrice + Number( localStorage.getItem('shippingFee'))}$</span>
      </div>
</div>
<div className="paymentMethod my-4">
    
<div className="bankPayment flex items-center justify-between">
<div class="flex items-center mb-4">
    <input onClick={()=>{ setIsOnline(true)
    }} id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bank</label>
</div>

<div className="bankIcons flex items-center gap-2">
    <img src={bkash} alt="b-kash" className='w-[30px]'/>
    <img src={visa} alt="visa" className='w-[30px]'/>
    <img src={master} alt="master card" className='w-[30px]'/>
    <img src={fire} alt="online payment" className='w-[30px]'/>
</div>

</div>


<div className="flex items-center">
    <input onClick={()=>{setIsOnline(false)}}  id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cash on delivery</label>
</div>

</div>



{isEmpty ? <button disabled  form='myForm'  className='bg-[#DB4444] text-white px-8 py-2 rounded my-6'>
        
   place Order
        
       </button> : <button  form='myForm' onInput={(e)=>{checkIfEmpty(e)}}  className='bg-[#DB4444] text-white px-8 py-2 rounded my-6'>
        
        {
            isLoad  ? <i className='fa-solid fa-spin fa-spinner'></i> : ' Place Order'
        }
        
       </button> }


        

</div>
</div>
  </div>
  
  </>
}
