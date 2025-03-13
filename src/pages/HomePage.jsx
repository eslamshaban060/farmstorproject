// !!!!!!!!!!!!!!!!!!!! this is a home page of this website !!!!!!!!!!!!!!

/*
  this page will be themain page of this website 

*/

// =================== importing elements ====================

// ------------------- to use react ----------------
import React from 'react'

// ------------------ to use header component -------------
import Header from '../component/Header'

// ------------------ to use footer component -------------
import Footer from '../component/Footer'

// -------------------- to use main component ----------------
import Main from '../component/Main'

// -------------------- to use catetory slider component ----------------
import CategorySlider from '../component/CategorySlider'

// -------------------- to use All product slider ----------------
import Allproductslider from "../component/Allproductslider"
// -------------------- to use Drink_section_component ----------------
import Drink_section_component from '../component/Drink_section_component'
// -------------------- to use Filter_product_slider ----------------
import Filter_product_slider from '../component/Filter_product_slider'
// -------------------- to use Biner_section_2 ----------------
import Biner_section_2 from '../component/Biner_section_2'
// -------------------- to use Bloge_slider ----------------
import Bloge_slider from '../component/Bloge_slider'
// --------------- back to top button -------------------
import Back_to_top_button from '../component/Back_to_top_button'




// =================== main function =========================

const HomePage = () => {

// ------------------------ virables -----------------------



  return (

    <div className='home_page overflow-hidden'>
        
        {/* ----------------- header component ------------ */}

        <Header/>

        {/* ----------------- header component ------------ */}

        <div className="pt-4">
           <Main/>
        </div>

        {/* ----------------- CategorySlider component ------------ */}

        <div className=' container mb-5 pb-2'>
          <CategorySlider/>
        </div>

        {/* ----------------- All product slider component ------------ */}

        <div className=' container mb-5 '>
        <div className="blog_title container text-center my-4">
            <p className='schoolbell '>
            ~ Special Products ~
            </p>
            <h2>
            Weekly Food Offers
            </h2>

          </div>
          <Allproductslider/>
        </div>
        {/* ----------------- All product slider component ------------ */}

        <div className='  mb-5 '>
          <Drink_section_component/>
        </div>

        {/* ----------------- Filter product slider component ------------ */}

        <div className='  mb-5 '>
        <div className="blog_title container text-center ">
            <p className='schoolbell '>
            ~ Special Products ~
            </p>
            <h2>
            Weekly Food Offers
            </h2>

          </div>
          <Filter_product_slider/>
        </div>

        {/* ----------------- Biner_section_2 component ------------ */}

        <div className='  mb-5 '>
          <Biner_section_2/>
        </div>


        {/* ----------------- Blog slider component ------------ */}

        <div className='  my-5 '>
          <div className="blog_title container text-center my-5">
            <p className='schoolbell '>
            ~ Read Our Blog ~
            </p>
            <h2>
              Our Latest Post
            </h2>
            <p className='dis' >
            The liber tempor cum soluta nobis eleifend option mazim.
            </p>
          </div>
          <Bloge_slider/>
        </div>


        {/* ------------------------- back to top button ------------- */}
        <Back_to_top_button/>


        {/* -------------------- footer component ------------ */}
        <Footer/>
    
    </div>
  )
}

export default HomePage
