// !!!!!!!!!!!!!!!!!!!!!!! Main component !!!!!!!!!!!!!!!!!!!!

// ======================== importing elements ======================

// ------------------- to use react -------------------
import React from 'react';

// --------------------- tom make cursle -------------------
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


// =============== main function ===================
const Main = () => {
  const navagator=useNavigate()
  const sliderefrence=useRef(null)


  const nextbutton=()=>{
    sliderefrence.current.slickNext();
  }
  const prevbutton=()=>{
    sliderefrence.current.slickPrev();
  }
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
    
  };
  const gotostor=(e)=>{    
    e.preventDefault()
    navagator("/shop")
   
  }
  return (

    <div className='main_component mt-5 productslider1 productslider3  overflow-hidden'>
        
        <div className="arrowbutton pre" onClick={()=>{
        prevbutton()
      }}><IoIosArrowBack size={20}  />
      </div>
      <div className="arrowbutton nex" onClick={()=>{
        nextbutton()
      }}><IoIosArrowForward size={20}  />
      </div>


      <Slider {...settings} ref={sliderefrence} className='carousel1 overflow-hidden container mb-0 mt-5'>
      <div className="carousel-item1   pt-1 row"  >
              <div className="d-sm-flex">
              <div className="col-md-6 col-xl-5 slide1_text pt-md-5 mt-md-5  ">

                <p className='d-none d-md-block' >TOP SELLER IN THE WEEK</p>

                <h1 className='schoolbell main_header  fs-1 fw-bold py-3 ' >The Best<br/>Health Fresh.</h1>

                <p className='pe-lg-5 mainp'>
                    Presentation matters. Our fresh Vietnamese vegetable rolls look good and taste even better
                </p>
                <button className='text-capitalize px-3 py-2 slide_button border-0 rounded-2 mt-xl-4 mt-lg-1 position-absolute' onClick={(e)=>{
                gotostor(e)
              }}>
                    shop now
                </button>
                </div>
                <div className="col-md-6 col-xl-7 pt-5 me-0 ">
                <img src="assets/main_imge/1 (1).png" className="d-block pt-5 pt-xl-0 col-lg-12 ms-lg-5 w-100 col-sm-11 mt-sm-5 mt-lg-0 pt-md-5" alt="..."/>
                </div>
              </div>
      </div>
      <div className="carousel-item1   pt-1 row"  >
              <div className="d-sm-flex">
              <div className="col-md-6 col-xl-5 slide1_text pt-md-5 mt-md-5  ">

                <p className='d-none d-md-block' >TOP SELLER IN THE WEEK</p>

                <h1 className='quicksand py-3 schoolbell main_header  fs-1 fw-bold' > Take Fresh Good Bread  Crumble.</h1>

                <p className='pe-lg-5 mainp'>
                    Presentation matters. Our fresh Vietnamese vegetable rolls look good and taste even better
                </p>
                <button className='text-capitalize px-3 py-2 slide_button border-0 rounded-2 mt-xl-4 mt-lg-1 position-absolute'onClick={(e)=>{
                gotostor(e)
              }}>
                    shop now
                </button>
                </div>
                <div className="col-md-6 col-xl-7 pt-5 me-0 ">
                <img src="assets/main_imge/1 (2).png" className="d-block pt-5 pt-xl-0 col-lg-12 ms-lg-5 w-100  col-sm-11 mt-sm-5 mt-lg-0 pt-md-5" alt="..."/>
                </div>
              </div>
      </div>
      <div className="carousel-item1   pt-1 row"  >
              <div className="d-sm-flex">
              <div className="col-md-6 col-xl-5  slide1_text pt-md-5 mt-md-5  ">

                <p className='d-none d-md-block' >TOP SELLER IN THE WEEK</p>

                <h1 className='quicksand py-3 schoolbell main_header  fs-1 fw-bold' >Chose your<br/>Health Life style.</h1>

                <p className='pe-lg-5 mainp'>
                    Presentation matters. Our fresh Vietnamese vegetable rolls look good and taste even better
                </p>
                <button className='text-capitalize px-3 py-2 slide_button border-0 rounded-2 mt-xl-4 mt-lg-1 position-absolute' onClick={(e)=>{
                gotostor(e)
              }}>
                    shop now
                </button>
                </div>
                <div className="col-md-6 col-xl-7 pt-5 me-0">
                <img src="assets/main_imge/1 (3).png" className="d-block  pt-5 pt-xl-0 col-lg-12 ms-lg-5 w-100 col-sm-11 mt-sm-5 mt-lg-0 pt-md-5" alt="..."/>
                </div>
              </div>
      </div>

    </Slider>

  </div>
  )
}

export default Main
