// !!!!!!!!!!!!!!!!!!!!!!! About page !!!!!!!!!!!!!!!!!!!!

/*
    In this page, we will provide details about the company or individual, such as mission, vision, and history.
*/

// ======================== importing elements ======================

// ------------------- to use react -------------------
import React from 'react';

// -------------- to use footer component -----------
import Footer from '../component/Footer';

// ------------------- to use header component --------------
import Header from '../component/Header';
// ---------------- to make navagate-----------
import { Link } from 'react-router-dom';
// ---------------- Testimonials data ---------------
import { Testimonials } from '../component/Stordata';
// ---------------------- to make aslider -----------------
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
// ----------------------- Back_to_top_button----------
import Back_to_top_button from '../component/Back_to_top_button';




const About = () => {

  const settings = {
    dots: false, 
    infinite: true,     
    speed: 500,          
    slidesToShow: 3,     
    slidesToScroll: 1,   
    autoplay: true,      
    autoplaySpeed: 3000,

    responsive: [
    
        {
          breakpoint: 1180,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };



  return (
    <div className="about">
      <div className="about_container">

        {/* ---------------- header component ----------- */}
        {<Header />}



        {/* ---------------------- page content -------------- */}
        <div className=' overflow-hidden'>

          <section  className='page_title overflow-hidden' >
          <div class="container hero-content">
            <h6 class="text-uppercase top_title">ABOUT FOR ORFARM</h6>
            <h1 class="fw-bold title_header">Unique People</h1>
            <p class="lead  px-2 px-md-0">
                Over 25 years of experience, we have crafted thousands of strategic discovery processes that <br className=' d-none d-md-block' /> enable us to peel back the layers which enable us to understand, connect.
            </p>
            <a href="#about_us" class="btn btn-custom">ABOUT US</a>
        </div>

          </section>

        {/* -------- about_us section ------------ */}

          <section className='about_us py-5 overflow-hidden' id="about_us" >

            <div class="container pt-5">
              <div class="row align-items-center">
                  <div class="col-lg-6 text-center">
                      <img src="/assets/main_imge/1 (2).png" alt="Food Image" class="business-img w-75 py-5"/>
                  </div>
                  
                  <div class="col-lg-5 h-100 pb-5  overflow-hidden h-auto pe-3">
                      <span class="badge-custom">ABOUT US</span>
                      <span class="text-muted ms-2">WELCOME TO ORFARM</span>
                      <h2 class="fw-bold about_section_title mt-4 mb-3">We Help Your <br/> Digital Business Grow</h2>
                      <p class="text-muted">
                          We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences, and print materials.
                      </p>
                      <ul class="check-list">
                          <li>Track your daily activity.</li>
                          <li>Start a private group video call.</li>
                          <li>All the lorem ipsum generators on the Internet.</li>
                      </ul>
                  </div>
              </div>

              <div class="row text-center mt-5">
                  <div class="col-lg-4 col-md-6">
                      <div class="feature-box">
                          <img src="/assets/imges/1 (1).svg" alt="" />
                          <h5>Select Your Products</h5>
                          <p>Choose from select produce to start. Keep, add, or remove items.</p>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="feature-box">
                      <img src="/assets/imges/1 (1).svg" alt="" />
                      <h5>Our Shop Orfarm</h5>
                          <p>We provide 100+ products, provide enough nutrition for your family.</p>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="feature-box">
                      <img src="/assets/imges/1 (1).svg" alt="" />
                      <h5>Delivery To Your</h5>
                          <p>Delivery to your door. Up to 100km and it’s completely free.</p>
                      </div>
                  </div>
              </div>
             </div>

          </section>


        {/* -------- why_choose_us section ------------ */}
        <section class="py-5 why_choose_us  ">
            <div class="container text-center ">
              <div className="blog_title container text-center my-5">
                <p className='schoolbell '>
                  ~ Why Choose Us ~
                </p>
                <h2>
                  Our Amazing Work
                </h2>
                <p className='dis' >
                  The liber tempor cum soluta nobis eleifend option congue doming quod mazim
                </p>
              </div>
                
                <div class="row mt-4 pb-5">
                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0">
                            <img src="/assets/imges/chose (1).png" class="img-fluid" alt="Who We Are"/>
                            <div class="card-body">
                                <h5 class="section-title">Who We Are</h5>
                                <p class="subtitlec">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor labore et dolore dignissimos cumque.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0">
                        <img src="/assets/imges/chose (2).png" class="img-fluid" alt="Who We Are"/>
                        <div class="card-body">
                                <h5 class="section-title">Our Products</h5>
                                <p class="subtitlec">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor labore et dolore dignissimos cumque.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0">
                        <img src="/assets/imges/chose (3).png" class="img-fluid" alt="Who We Are"/>
                        <div class="card-body">
                                <h5 class="section-title">How We Work</h5>
                                <p class="subtitlec">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor labore et dolore dignissimos cumque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      {/* -------- Good_Performance section ------------ */}

        <section class="py-5 Good_Performance">
            <div class="container text-center">
              <div className="blog_title container text-center my-5">
                  <p className='schoolbell '>
                  ~ Good Performance ~
                  </p>
                  <h2>
                    Our Working Ability
                  </h2>
                  <p className='dis' >
                  The liber tempor cum soluta nobis eleifend option congue doming quod mazim.
                  </p>
                </div>

                
                  <div class="row mt-4">
                    <div class="col-12 rounded-4  position-relative">
                          <img src="/assets/imges/vedio.jpeg" class="img-fluid container rounded-4" alt="Working Ability"/>
                          <svg width="20" height="22" viewBox="0 0 20 22"  className=" svg_vedio_icon position-absolute"  fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.6499 6.58886L15.651 6.58953C17.8499 7.85553 18.7829 9.42511 18.7829 10.8432C18.7829 12.2613 17.8499 13.8308 15.651 15.0968L15.6499 15.0975L12.0218 17.195L8.3948 19.2919C8.3946 19.292 8.3944 19.2921 8.3942 19.2922C6.19546 20.558 4.36817 20.5794 3.13833 19.8697C1.9087 19.1602 1.01562 17.5694 1.01562 15.0382V10.8432V6.64818C1.01562 4.10132 1.90954 2.51221 3.13721 1.80666C4.36609 1.1004 6.1936 1.12735 8.3942 2.39416C8.3944 2.39428 8.3946 2.3944 8.3948 2.39451L12.0218 4.49135L15.6499 6.58886Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" ></path> 
                      </svg>
                      </div>
                    
                    </div>
                
                <div class="row my-5 Good_Performance-content mx-2 mx-md-0">
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-success">5465+</h4>
                        <h5 class="section-title">Active Clients</h5>
                        <p class="subtitlec">Sed ut perspiciatis unde omnis iste natus sit accusantium doloremque.</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-success">4968+</h4>
                        <h5 class="section-title">Projects Done</h5>
                        <p class="subtitlec">Sed ut perspiciatis unde omnis iste natus sit accusantium doloremque.</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-success">565+</h4>
                        <h5 class="section-title">Team Advisors</h5>
                        <p class="subtitlec">Sed ut perspiciatis unde omnis iste natus sit accusantium doloremque.</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-success">495+</h4>
                        <h5 class="section-title">Users Online</h5>
                        <p class="subtitlec">Sed ut perspiciatis unde omnis iste natus sit accusantium doloremque.</p>
                    </div>
                </div>
            </div>
        </section>


      {/* -------- What makes us different section ------------ */}

        <section class="py-5 What_makes_us_different">
            <div class="container text-center">
            <div className="blog_title container text-center my-5">
                  <p className='schoolbell '>
                  ~ Why choose us? ~
                  </p>
                  <h2>
                   What makes us different
                  </h2>
                  <p className='dis' >
                  The liber tempor cum soluta nobis eleifend option congue doming quod mazim.
                  </p>
                </div>
                
                <div class="row mt-4 data_make_diffrence pb-5">
                    <div class="col-md-6 col-lg-3 mb-3">
                        <div class="card p-4 border-0 shadow-sm">
                            <img src="/assets/imges/makedeffrence (1).svg" class="mx-auto makediffrenceimge" alt="Fresh Food"/>
                            <h5 class="mt-3">100% Fresh Food</h5>
                            <p>Adjust global theme options and see design changes in real-time.</p>
                            <Link to="/shop" className='go_from_about_to_stor'  >
                              LEARN MORE
                            </Link>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-3">
                        <div class="card p-4 border-0 shadow-sm">
                        <img src="/assets/imges/makedeffrence (2).svg" class="mx-auto makediffrenceimge" alt="Fresh Food"/>
                        <h5 class="mt-3">Premium Quality</h5>
                            <p>Adjust global theme options and see design changes in real-time.</p>
                            <Link to="/shop" className='go_from_about_to_stor'  >
                              LEARN MORE
                            </Link>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-3">
                        <div class="card p-4 border-0 shadow-sm">
                        <img src="/assets/imges/makedeffrence (3).svg" class="mx-auto makediffrenceimge" alt="Fresh Food"/>
                        <h5 class="mt-3">100% Natural</h5>
                            <p>Adjust global theme options and see design changes in real-time.</p>
                            <Link to="/shop" className='go_from_about_to_stor'  >
                              LEARN MORE
                            </Link>

                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-3">
                        <div class="card p-4 border-0 shadow-sm">
                        <img src="/assets/imges/makedeffrence (4).svg" class="mx-auto makediffrenceimge" alt="Fresh Food"/>
                        <h5 class="mt-3">100% Organic Goods</h5>
                            <p>Adjust global theme options and see design changes in real-time.</p>
                            <Link to="/shop" className='go_from_about_to_stor'  >
                              LEARN MORE
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>


      {/* --------testimonials section ------------ */}

        <section className='testimonials'>

          <div class="container my-5 pb-5">
          <div className="blog_title container text-center my-5">
                  <p className='schoolbell '>
                     ~ Happy Customer ~
                  </p>
                  <h2>
                    What Client Says
                  </h2>
                  <p className='dis' >
                  The liber tempor cum soluta nobis eleifend option congue doming quod mazim.
                  </p>
                </div>
              
              <div class="row mt-4 ">
              <Slider {...settings}>
                {Testimonials.map((iteam,index)=>{
                  return(
                    <div class="col-md-6 col-lg-4 mb-3 " key={index}>
                        <div class="testimonial-card p-4 me-3">
                            <img src={iteam.image} alt="Leonardo Roben" class="testimonial-img mx-auto"/>
                            <p class="mt-3 px-2 pt-2">{iteam.review}</p>
                            <div class="stars">★★★★★</div>
                            <h6 class="fw-bold mt-2">{iteam.name}</h6>
                            <p class="text-muted">{iteam.position}</p>
                        </div>
                    </div>
                  )
                })}
              </Slider>
              </div>
          </div>

        </section>

        </div>
       {/* ------------------------- back to top button ------------- */}
       <Back_to_top_button/>

        {/* ---------------- footer component ---------------- */}

         <Footer/>

      </div>
    </div>
  );
};

export default About;
