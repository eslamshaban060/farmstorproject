// !!!!!!!!!!!!!!!!!!!!!!!!! Biner_section_2 !!!!!!!!!!!!!!!!!!!

// ====================== importing elements ===============
import React from 'react'
import { useNavigate } from 'react-router-dom';



const Biner_section_2 = () => {
    const navagator=useNavigate()
    const gotostor=(e)=>{    
        e.preventDefault()
        navagator("/shop")
       
      }
  return (
    <div className='Biner_section_2  d-none d-md-block '>
     
      <div className='container p-5 pt-5 pt-md-0  pt-md-5 text-white ps-0 ps-xl-5  '>
       <div className=" container p-5 pt-5 pt-md-0  pt-md-5 ps-0 ps-xl-5 Biner_section_2_continer">
       <p className='pt-5 schoolbell text-white'>
            ~ Deals Of The Day ~
        </p>
        <h2 className='fs-1'>
            Premium Drinks <br />
            Fresh Farm Product
        </h2>
        <p className='w-50 pt-2'>
            The liber tempor cum soluta nobis eleifend option congue <br />
            doming quod mazim placerat facere possum assam going through.
        </p>
        <div className="salle_time pt-4">
            <p className=' text-capitalize fw-medium fs-6  d-none d-lg-block'>
                 hurry up! Offer End In:
            </p>
            <h2 className='pb-3  d-none d-lg-block'>
                0 <span className='pe-5'> 
                    Days
                </span>
                0 <span className='pe-5'>
                    HOUR
                </span>
                0 <span className='pe-5'>
                    MINUTE
                </span>
                0 <span className='pe-5'>
                    SECOUND
                </span>
            </h2>
            <div className='time-buttons'>
                <button className=' time-button1' onClick={(e)=>{
                gotostor(e)
              }}>
                    Shop Now
                </button>
                <button className=' time-button2' onClick={(e)=>{
                gotostor(e)
              }}>
                        View Menue
                </button>
            </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Biner_section_2
