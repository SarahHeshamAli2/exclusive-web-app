import React, { useContext, useEffect, useState } from 'react'
import perfume from '../../assets/imgs/perfume.png'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import axios from 'axios'
import RelatedItemsSlider from './../RelatedItemsSlider/RelatedItemsSlider';
import { cartContext } from '../../Context/CartContext'


export default function ProductDetails() {

   const{ addProductToCart,isLoad,addProductToWishlist,isWishListLoad}= useContext(cartContext)
    const{id}=useParams()




    function getProductDetails() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

    }
   
    const [mainImage, setMainImage] = useState(null)
    useEffect(()=>{

    },[])
  const {data,isLoading,isError,error,isSuccess} = useQuery({
    queryKey : ['productDetails' ,id],
    queryFn : getProductDetails,
    refetchOnWindowFocus:false,
    refetchOnMount:false,
    
    




})



useEffect(() => {
    
    setMainImage(data?.data.data.imageCover)
  }, [data])

  useEffect(()=>{

    window.scrollTo({top : 0 , behavior:'smooth'})
  },[])
if(isLoading) {
    
    return <LoadingScreen/>
}


const product = data.data.data

     



function displaySmallImg(src) {
    setMainImage(src)

    
}

function activeClass(e) {

    let allBtn = document.querySelectorAll('.btnS')
    for(let i =0 ; i  < allBtn.length ; i++) {
        if(allBtn[i].classList.contains('activeBtn')) {
            allBtn[i].classList.remove('activeBtn')
        }
     
        e.classList.add('activeBtn')
    }
    

    

}
 
return <>
          


<section className='productDetails myContainer py-6 md:flex gap-5 mt-[100px]'>

    <div className="leftSide flex md:w-[40%]   gap-3 ">
        <div className="smallImgs w-[20%] cursor-pointer">
        {product.images.slice(0,4).map((img,ind)=> {         return   <img key={ind} src={img}alt="" onClick={()=>displaySmallImg(img)}  className='w-full mb-2  bg-[#F5F5F5]'/>
})}
      
   
          
        </div>
        <div className="mainImg w-[90%]">
            <img  src={mainImage} alt="" className='w-full bg-[#F5F5F5]'/>
        </div>
    </div>

    <div className="rightSide ">
        <div className="productInfo my-5 md:my-0">
            <h2 className='text-2xl font-bold'>{product.title.split(" ").slice(0,8).join(" ")}</h2>
            <p className='my-2'>{product.ratingsAverage} <i className="fa-solid fa-star text-orange-300"></i>
            ({product.ratingsQuantity} reviews) | <span className='text-[#00FF66]'>in stock</span>
            </p>
            <p className='text-2xl font-semibold my-2'>${product.price}</p>
            <p>{product.description.split(" ").slice(0,10).join(" ")}</p>
          
        </div>
        <div className="horizontalLine w-50 h-[1px] bg-black my-5">

        </div>

        <div className="colours flex gap-4 my-3">
            <p>Colours:</p>
           <button className='bg-red-400 w-5 h-5 rounded-full'></button>
           <button className='bg-[#A0BCE0] w-5 h-5 rounded-full'></button>
        </div>

        {product.category.name != 'Electronics' ?     <div className="sizes flex gap-4 my-3">
            <p>Size:</p>


<div className="sizesBtns" onClick={(e)=>activeClass(e.target)}>
                <button  className='border border-black px-2 py-1 rounded text-sm btnS'>XS</button>
            <button className='border border-black px-2 py-1 rounded text-sm btnS'>S</button>
            <button className='border border-black px-2 py-1 rounded text-sm btnS'>M</button>
            <button className='border border-black px-2 py-1 rounded text-sm btnS'>L</button>
            <button className='border border-black px-2 py-1 rounded text-sm btnS'>XL</button>
</div>
        </div> : ''}
    
        <div className="buy flex items-center gap-4">
        <div className="quantity">

        </div>
        <div className="buyBtn">
            <button  onClick={()=>addProductToCart(id)} className='px-8 py-2 text-white bg-[#DB4444] rounded'>
                
                {isLoad ? <i className="fa-solid fa-spinner fa-spin"></i> :     'Add to cart'}
            
                
                </button>
        </div>
        <div className="wishList">
        <i onClick={()=>{addProductToWishlist(id)}} className= { isWishListLoad ? "fa-regular fa-heart hover:text-[#DB4444] transition-all[200ms] cursor-pointer fa-spin" : "fa-regular fa-heart hover:text-[#DB4444] transition-all[200ms] cursor-pointer border-2 p-2 rounded"  }   ></i>
        </div>
        </div>

        <div className="return my-5 w-3/4">
            <div className="upperReturn flex items-center gap-2 border rounded-t border-black p-4">
            <i className="fa-solid fa-truck-fast block fa-2x "></i>
            <div>
            <h6>Free Delivery</h6>
            <p className='text-xs underline'>Enter your postal code for Delivery Availability</p>
            </div>
            </div>
            <div className="lowerReturn flex items-center gap-2 rounded-b border-black border rounded-black p-4">
            <i className="fa-solid fa-rotate fa-2x"></i>
            <div>
            <h6>Return Delivery</h6>
            <p  className='text-xs underline'>Free 30 Days Delivery Returns. Details</p>
            </div>
            </div>
        </div>
    </div>

</section>

<div className="relatedItems myContainer ">
<section className="mainSection">
    <div className="flex items-center mx-5">
  
    <div className="today w-[20px] h-[40px] bg-[#DB4444] rounded">
  
  </div>
  <span className='ms-3 text-[#DB4444] font-bold'>Related Items</span>
    </div>
  
  

  
    </section>
<RelatedItemsSlider prodId={product.category._id} allData={product}/>
</div>
</>
}
