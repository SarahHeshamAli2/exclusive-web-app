import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import LoadingScreen from './../LoadingScreen/LoadingScreen';
export default function RelatedItemsSlider({allData,flag,rows,prodId}) {
    const{id}=useParams()
    
    function getRelatedProducts() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${prodId}`)
    
    }

    

    const {data,isLoading} = useQuery({queryFn:getRelatedProducts,
        queryKey:['relatedProducts',id] ,
        refetchOnMount:false,
        refetchOnWindowFocus:false
    })
    
    
    if(isLoading ) {
        return <>
    
    <LoadingScreen/>
    </>
    }
    const result = data.data.data

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows : false,
    
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  if(flag){
    settings.arrows = false
  }
  if(rows){
    settings.rows = 2
  }

  const filteredArray = result.filter((prod)=>{return prod.id !=id
  })

  
  

  
  return (
    <Slider {...settings }>
        

    
 {filteredArray?.map((products)=>    <div key={products._id} className="product py-5 my-3 ">
  
   <div  className="repeated">
   <div className=" p-2  relative w-3/4 " >
    <img src={products.imageCover} alt="" className='w-full ' />
    <div className=" absolute top-5 right-5">
      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white">
      <i className="fa-regular fa-heart"></i>

      </div>
    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white my-2">
    <i className="fa-regular fa-eye my-3"></i>
    </div>
    </div>
    </div>
      <Link to={`/product/${products._id }`} className="font-bold">{products.title?.split(' ').slice(0,2).join(" ")}</Link>
      
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
      )} 

      

      

    </Slider>
  );
}