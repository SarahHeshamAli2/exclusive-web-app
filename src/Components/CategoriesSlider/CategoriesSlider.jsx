import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useAllCategories from "../CustomHooks/useAllCategories";
export default function CategoriesSlider() {
    

    const {categoriesData } = useAllCategories()






  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true, responsive: [
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
  return (
    
    <Slider {...settings}>
        
 
 {categoriesData.data.data.map((categories)=>      <div key={categories._id} className="category md:!w-3/4 border p-5 my-8 text-center  ">
 <img src={categories.image} alt={categories.name} className="w-full h-[300px] sm:h-[200px]" />
  
      <h6 className="font-bold my-3">{categories.name}</h6>
      



    </div>
      )}

      

      

    </Slider>
  );
}