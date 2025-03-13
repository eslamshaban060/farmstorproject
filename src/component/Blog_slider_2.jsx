// !!!!!!!!!!!!!!!!!!!!!!!!! Blog_slider_2 !!!!!!!!!!!!!!!!!!!!!

// ================== importing elements ==================

import React from 'react'
import { Articles } from './Stordata'
// ---------------------- to make aslider -----------------
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";





const Blog_slider_2 = () => {
    const settings = {
        infinite: true,     
        speed: 500,          
        slidesToShow: 3,     
        slidesToScroll: 1,   
        autoplay: true,      
        autoplaySpeed: 3000, 
        dots:false,
        responsive: [
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
              },
            },
            
          ],
      };
  return (
    <div className='   px-md-3 ms-5 ms-md-3 mx-auto'>
     <Slider {...settings}>
        {
            Articles.map((article)=>{
                return(
                    <div className="card article_card  position-relative" >
                    <div>
                    <div className="card-body card-body2 position-absolute text-white rounded-3   text-center ">
                        {/* <div className=" d-flex text-white  justify-content-center text-center ">
                            <span className=' pe-4 text-center'>
                                {article.category}
                            </span>
                            <span className='pe-4'>
                                {article.author}
                            </span>
                            <span className='pe-4'>
                                {article.date}
                            </span>
                        </div>
                      <h5 className="card-title pt-1 px-5 text-white fs-4"> {article.title}</h5>
                      <p href="#" className=" border-0  article_button2">Countiue Reading</p> */}
                    </div>
                    <div className="card-img-top1  rounded-3 ">
                    <img src={article.image} className="card-img-top " alt="..."/>
                    </div>
                 
                    </div>
                  </div>
                )
            })
        }
      </Slider>
    </div>
  )
}

export default Blog_slider_2
