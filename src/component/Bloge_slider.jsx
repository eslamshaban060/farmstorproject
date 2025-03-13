// ======================== blog slider ======================

// ========================= importing elements ============
import React from 'react'

// ---------------------- to make aslider -----------------
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

// ------------------- data of articles --------------------
import { Articles } from './Stordata'

// -------------------------- to go to readig page  --------------
import { useNavigate } from 'react-router-dom';
// -------------------- import data from context api -------------
import { Usedata } from './ContextAPI';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRef } from 'react';




const Bloge_slider = () => {



  const sliderefrence=useRef(null)
  const navagation = useNavigate()
  const {dispatch}=Usedata()

  // ==================== open to reade =================
  const open_to_reade2=(article)=>{
    navagation("/article")

    dispatch(
      {
        type:"ARTICLE_CASE",
        iteam:{
          id: article.id,
          category: article.category,
          author: article.author,
          date: article.date,
          title: article.title,
          description: article.description,
          image: article.image,
        }
      })

  }
  const nextbutton=()=>{
    sliderefrence.current.slickNext();
  }
  const prevbutton=()=>{
    sliderefrence.current.slickPrev();
  }
  
    const settings = {
        dots: false, 
        infinite: true,     
        speed: 500,          
        slidesToShow: 4,     
        slidesToScroll: 1,   
        autoplay: true,      
        autoplaySpeed: 3000,
 
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
          arrows: false,
      };


  return (
    <div className=' container productslider1 pb-5 '>

<div className="arrowbutton   pre" onClick={()=>{
        prevbutton()
      }}><IoIosArrowBack size={20}  />
      </div>
      <div className="arrowbutton nex" onClick={()=>{
        nextbutton()
      }}><IoIosArrowForward size={20}  />
      </div>

     <Slider {...settings}  ref={sliderefrence}  >
        {
            Articles.map((article)=>{
                return(
                    <div className="card article_card " >
                    <div>
                    <div className="card-img-top1  ">
                    <img src={article.image} className="card-img-top " alt="..."/>
                    </div>
                    <div className="card-body">
                        <div className="article_pdata d-flex  ">
                            <span className='article_category pe-2 pe-md-2'>
                                {article.category}
                            </span>
                            <span className='pe-2 pe-md-2'>
                                {article.author}
                            </span>
                            <span className='pe-2 pe-md-2'>
                                {article.date}
                            </span>
                        </div>
                      <h5 className="card-title pt-1"> {article.title}</h5>
                      <p className="card-text">{article.description}</p>
                      <button href="#" className=" border-0 bg-white article_button"  onClick={()=>{
                          open_to_reade2(article)
                        }}>Countiue Reading</button>
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

export default Bloge_slider
