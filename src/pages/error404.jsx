// !!!!!!!!!!!!!!!!!!!! error page !!!!!!!!!!!!!!!!!!!!!!

/*
    we use this page when we dont have right pathe in our url in our website 

*/


// ==================== importing element ================

// --------------------- to use react-----------------
import React from 'react'

// ------------------ to use css app fille ---------------
import "../App.css"


// ================ main function ====================

const Error404 = () => {
  return (
    <div className='error_page '>
        <div className="container ">

            {/* -------------------- imge ------------------ */}
            <div className="error_img w-100 mt-5 mx-auto pt-5 w-100 d-flex">
                <img  className='mx-auto' src="https://html.hixstudio.net/htdocs_error/something-lost.png" alt="" />
            </div>
            {/* ----------------- error text ----------------- */}
            <div className="error_text text-center mt-4">

                <h2 className='fs-2'>
                     Oops, looks like the page is lost.
                </h2>

                <p className='fs-4'>
                     This is not a fault, just an accident that was not intentional.
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Error404
