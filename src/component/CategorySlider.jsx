// !!!!!!!!!!!!!!!!!!!!!!!!! Category slider component !!!!!!!!!!!!

// ================== importing elements ================

import React from 'react'

// ---------------import category data --------------
import { Categories } from './Stordata'

// ---------------- to make aslider with react slick ----------------
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const CategorySlider = () => {

    const settings = {
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        autoplay: false, 
        autoplaySpeed: 1000,               

        responsive:[
            {
            breakpoint: 1400,
            settings :{
                slidesToShow: 6,
                autoplay: true, 
                autoplaySpeed: 1000,               
            }
            },

            {
            breakpoint: 1200,
            settings :{
                slidesToShow: 5, 
                autoplay: true, 
                autoplaySpeed: 1000,  
            }
            },
            {
            breakpoint: 770,
            settings :{
                slidesToShow: 3, 
                autoplay: true, 
                autoplaySpeed: 1000,  
            }
            },
            {
            breakpoint: 500,
            settings :{
                slidesToShow: 3, 
                autoplay: true, 
                autoplaySpeed: 1000,  
            }
            },
            {
            breakpoint: 430,
            settings :{
                slidesToShow: 2, 
                autoplay: true, 
                autoplaySpeed: 1000,  
            }
            },
           
        ]
    }
     



  return (
   
    <Slider {...settings} className='mb-4 category_slider '>
        {
            Categories.map((category)=>{

                return(                            
                            
                     <div className="box rounded-2 bg-white   text-center  justify-content-center">
     
                        <img src={category.image} alt={category.name} className=' mx-auto  mt-4 mb-3'/>
                        <h5>
                            {category.name}
                        </h5>


                    </div>                           
                            
                    )

            })}
    </Slider>
  )
}

export default CategorySlider
