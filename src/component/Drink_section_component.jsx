// !!!!!!!!!!!!!!!!!!!!! Drink section component !!!!!!!!!!!!!!!!!!!!!!

import React from 'react'
import { useNavigate } from 'react-router-dom';




const Drink_section_component = () => {

const navagator=useNavigate()

 const gotostor=(e)=>{    
        e.preventDefault()
        navagator("/shop")
       
}
  return (
    <div className=' container mt-2 pb-4'>
        <div className="row">

            <div className="dring_img col-lg-6">
                <img src="/assets/imges/dring.png" className=' object-fit-contain w-100' alt="" />
            </div>

            <div className="dring_text col-lg-6 pt-5">

               <div className="top_text px-lg-5">
                <p className='schoolbell  schoolbell_text'>~Organic Drinks~</p>
                <h2 className='quicksand quicksand-text'>Organic Drinks <br />
                <span>Easy Healthy</span> - Happy Life</h2>
                <p className="subtitle">The liber tempor cum soluta nobis eleifend option congue doming quod mazim placerat facer possim assum.</p>
               </div>


               <div className="button_text row px-lg-5 py-2">

                <div className="col-lg-6 ">
                <div className='data_title '>
                    <span className='py-1 d-block me-5'>Fresh Fruits :</span> 
                   
                   <p className='pt-1'>
                     Apples, Berries & Cherries
                   </p>
                </div>

                <div className='data_title '>
                    <span className='py-1 d-block me-5'>Ingredient:</span>
                    <p className='pt-1'>
                        Energy, Protein, Sugars
                    </p>
                   
                </div>
                <div className="button add-to-cart mb-4 mb-lg-4 dringbut" onClick={(e)=>{
                gotostor(e)
              }}>Go to Cart</div>
                </div>

                <div className="col-lg-6 ">
                    
                    <div className='data_title '>
                        <span className=' d-block me-5 py-1'>Expiry Date :</span>  
                       <p className='pt-1'>
                           See on the Bottle Cap
                       </p>
                    </div>
                    
                    <div className='data_title '>
                        <span  className=' d-block me-5 py-1'>Bootle Size:</span>
                        <p className='pt-1'>
                             500ml – 1000ml
                        </p>
                        
                    </div>
                    <div className="button view-more dringbut" onClick={(e)=>{
                gotostor(e)
              }}>View More</div>
                </div>

               </div>
            </div>
        </div>
        <div className="row mt-5">
          
           <div  className='col-lg-4 col-md-6 mt-4 position-relative'>
           <div className="biner_text position-absolute ">
                <h4 className=' text-white mt-4 ms-4 pt-3 text-capitalize'>
                    Eat Green <br /> best for family 
                </h4>
                <p className='text-white  ms-4'>
                    free shipping 50 gram
                </p>
            </div>
           <img  className='w-100' src="/assets/imges/biner (2).jpeg" alt="" />

            
            
           </div>
           <div  className='col-lg-4 col-md-6 mt-4 position-relative'>
           <div className="biner_text position-absolute ">
                <h4 className=' text-white mt-4 ms-4 pt-3 text-capitalize'>
                    Eat Green <br /> best for family 
                </h4>
                <p className='text-white  ms-4'>
                    free shipping 50 gram
                </p>
            </div>
           <img  className='w-100' src="/assets/imges/biner (3).jpeg" alt="" />

            
            
           </div>
           <div  className='col-lg-4 col-md-6 mt-4 position-relative'>
           <div className="biner_text position-absolute ">
                <h4 className=' text-white mt-4 ms-4 pt-3 text-capitalize'>
                    Eat Green <br /> best for family 
                </h4>
                <p className='text-white  ms-4'>
                    free shipping 50 gram
                </p>
            </div>
           <img  className='w-100' src="/assets/imges/biner (1).jpeg" alt="" />

            
            
           </div>
        </div>
    </div>
  )
}

export default Drink_section_component
