import axios, { all } from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import LoadingScreen from './../LoadingScreen/LoadingScreen';
import order from '../../assets/imgs/order.svg'
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';


export default function AllOrders() {
const [allOrder, setallOrder] = useState(null)
const{cartOwner}= useContext(cartContext)

useEffect(()=>{

    if(cartOwner) {
        getAllOrders()

    }
  
   window.scrollTo({top : 0 , behavior:'smooth'})
},[])
const userId = JSON.parse(localStorage.getItem("userId"))


    async function getAllOrders () {


try {
    const {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${cartOwner}`)
    setallOrder(data)
    console.log(data);
    
    
} catch (error) {
    console.log("error" , error);
}        
    }
return <> 
{   cartOwner==null || allOrder?.length==0 ? <div className='md:w-1/3 mx-auto text-center mt-[60px] md:mt-[100px]'>
  
  <img src={order} alt="empty cart"  className='w-full'/>
  
  <Link to={"/"}>
  <button className='bg-[#DB4444] text-white p-3 rounded my-2'>Start making some</button>

  </Link>
  </div>  : ""}
  <div className="myContainer  py-5">
{allOrder?.map((order,ind)=> <div className=" mt-20 border border-1 my-2 rounded-1" key={ind}>
<div className="">
    <div className="inner-col pt-3 ps-3">
        <p>Placed On: <span className='mx-2 font-bold'>{order.createdAt.slice(0, 10)}</span></p>
        <p>Total price: <span className='mx-2  font-bold'>{order.totalOrderPrice}</span>$</p>
        <span>Payment method : <span className='mx-2  font-bold'>{order.paymentMethodType}</span></span>

    </div>
</div>
{
    order?.cartItems?.map((item)=> <div  key={item.id}>
    <div className="inner flex items-center">
        <div className='w-[20%]'>
        <img src={item.product.imageCover} alt="" className='w-full '/>
        </div>
        <div className='mx-2'>
            <h5 className='product font-bold'>{item?.product?.brand?.name}</h5>
            <h5 className='p-item'>{item.product.title}</h5>
        </div>
    </div>
</div>)
}
</div>)}
</div>


</>
}
