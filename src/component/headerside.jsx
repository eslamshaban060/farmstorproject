// !!!!!!!!!!!!!!!!!!! Headerside component !!!!!!!!!!!!!!!!!

// ==================== impotring elements ======================

// ---------------------- to use react -------------------
import React from 'react'

// --------------------- import app css fille ------------
import "../App.css"
// -------------------- import link ----------------
import { Link } from 'react-router-dom'




// =================== main function ====================

const Headerside = () => {
  return (
    <div className='header_side'>
      <div className="headerside_continer">
        
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header   ">

            
            <div type="button" className=" mx-auto " data-bs-dismiss="offcanvas" aria-label="Close">
                <h5 className='text-white mx-auto'>
                Close  <span className='ms-2 mt-2'>
                <i className="fas fa-times"></i>
                </span>
                </h5>
            </div>

        </div>
        <div className="offcanvas-body">
            <div className="offcanvas_buttoms">
                <p className='text-white text-center py-2'>
                    WHAT ARE YOU LOOKING FOR 
                </p>
                <input type="search" className='mx-auto d-block w-100 container p-3 position-relative' placeholder="Search products..." />
                <i className="fa fa-search position-absolute " ></i>
                <button className='p-3  w-50 bg-white mt-2 Sign'>
                    <Link to='/register'className='list-unstyled'>
                      Sign in
                    </Link>
                </button>
                <button className='p-3  w-50 bg-white mt-2 '>
                    <Link>
                        Wish list
                    </Link>
                </button>
            </div>
            <ul className='mt-5'>
                <Link to="/" className='headerlink'>
                <li className='text-white fs-5 border-bottom py-2'>
                    Home 
                </li>
                </Link >
                <Link to="/shop" className='headerlink'>
                <li className='text-white fs-5 border-bottom py-2'>
                    Shop
                </li>
                </Link>
                <Link to="/blog" className='headerlink'>
                <li className='text-white fs-5 border-bottom py-2'>
                    Blog
                </li>
                </Link>
                <Link to="/about" className='headerlink'>
                <li className='text-white fs-5 border-bottom py-2'>
                    About Us
                </li>
                </Link>
                <Link to="/contact" className='headerlink'>
                <li className='text-white fs-5 border-bottom py-2'>
                    Contact Us
                </li>
                </Link>
            </ul>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default  Headerside
