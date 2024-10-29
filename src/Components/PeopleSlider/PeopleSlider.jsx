import React from "react";
import Slider from "react-slick";
import man from '../../assets/imgs/man.png'
import ema from '../../assets/imgs/ema.png'
import will from '../../assets/imgs/will.png'
function PeopleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
    <div className="person md:w-1/2  ">
    <div className=" bg-[#F5F5F5]  px-5 pt-4 xl:h-[350px] h-[150px] md:h-[250px]  overflow-hidden " >
       <img src={man} alt="man" className="md:w-1/2 mx-auto md:h-[250px] xl:h-auto" />
     
        </div>

    <div className="personDetails my-3">
    <h3 className="text-3xl">Tom Cruise</h3>
        <p>Founder & Chairman</p>

    </div>
        <div className="socialIcons flex gap-3">
        <i className="fa-brands fa-twitter "></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-linkedin-in"></i> 
        </div>
    </div>
    <div className="person md:w-1/2">
    <div className="bg-[#F5F5F5]  px-5 pt-4 xl:h-[350px] h-[150px] overflow-hidden mx-3 md:h-[250px] ">
       <img src={ema} alt="woman" className="md:w-1/2 mx-auto h-[150px]  xl:h-[350px] md:h-[250px]  "  />
     
        </div>

    <div className="personDetails my-3">
    <h3 className="text-3xl">Emma Watson</h3>
        <p>Managing Director</p>

    </div>
        <div className="socialIcons flex gap-3">
        <i className="fa-brands fa-twitter "></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-linkedin-in"></i> 
        </div>
    </div>
    <div className="person md:w-1/2">
    <div className="bg-[#F5F5F5]  px-5 pt-4   h-[150px] xl:h-[350px] overflow-hidden md:h-[250px]">
       <img src={will} alt="man" className="md:w-1/2 mx-auto  md:h-[250px] xl:h-auto" />
     
        </div>

    <div className="personDetails my-3">
    <h3 className="text-3xl">Tom Cruise</h3>
        <p>Founder & Chairman</p>

    </div>
        <div className="socialIcons flex gap-3">
        <i className="fa-brands fa-twitter "></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-linkedin-in"></i> 
        </div>
    </div>


      </Slider>
    </div>
  );
}

export default PeopleSlider;
