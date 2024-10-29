import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iphone from '../../assets/imgs/iphone.jpeg'
import shoe from '../../assets/imgs/shoe.png'
import sony from '../../assets/imgs/sony.png'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="blackFrame bg-black py-2 lg:px-6 md:flex items-center">
          <div className="innerContent text-white px-5">
          <div className="apple flex items-center my-4">
          <i class="fa-brands fa-apple lg:fa-3x my-4 fa-2x "></i>
          <p className="ms-3">iPhone 14 Series</p>
          </div>
          <h2 className="lg:text-5xl text-lg w-3/4">Up to 10% off Voucher</h2>
        <div className="flex items-center">
        <p className="my-4 underline cursor-pointer mx-2">Shop Now</p>
        <i class="fa-solid fa-arrow-right"></i>
        </div>
          </div>
        <img src={iphone} alt="iphone mobile" className='w-full md:w-[200px] md:h-[300px]'/>
        </div>
    
      </div>
      <div>
      <div className=" py-2 lg:px-6 flex items-center">
          <div className="innerContent  px-5">
          
          <h2 className="lg:text-5xl text-lg">Up to 25% off Voucher</h2>
        <div className="flex items-center">
        <p className="my-4 underline cursor-pointer mx-2">Shop Now</p>
        <i class="fa-solid fa-arrow-right"></i>
        </div>
          </div>
        <img src={shoe} alt="addidas shoe" className="lg:w-[496px] w-[150px] md:w-[200px] h-[300px]"/>
        </div>
      </div>
      <div>
      <div className=" py-2 lg:px-6 flex items-center">
          <div className="innerContent  px-5">
          
          <h2 className="lg:text-5xl text-lg">Up to 60% off Voucher</h2>
        <div className="flex items-center">
        <p className="my-4 underline cursor-pointer mx-2">Shop Now</p>
        <i class="fa-solid fa-arrow-right"></i>
        </div>
          </div>
        <img src={sony} alt="headphones sony" className="lg:w-[496px] w-[150px] md:w-[200px] h-[300px]"/>
        </div>
      </div>

    </Slider>
  );
}