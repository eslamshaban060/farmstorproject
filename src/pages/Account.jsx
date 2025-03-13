// !!!!!!!!!!!!!!!!!!!!!!!! USER PAGE !!!!!!!!!!!!!!!!!!!!!!!!

/*
    in this page theuser can finde has data 

*/

// ===================== importing elements =====================

import React from 'react'

// ----------------- to use header -------------------
import Header from '../component/Header'

// -------------------- to use footer ----------------
import Footer from '../component/Footer'

// -------------------- to use footer ----------------
import { Usedata } from '../component/ContextAPI'

// -------------------- to use footer ----------------
import { Link,useNavigate } from 'react-router-dom'



const Account = () => {


    // ----------------- variables------------------

    const {User,dispatch}=Usedata()
    const navegartor =useNavigate()



    // -------------------- function ----------------
    const Logout=()=>{
        dispatch(
            {type:"USER_CASE",
            iteam:{ name:"",
                email:"",
                password:"",
                loginstat:false
                }
            }
        )
        navegartor("/register")
    }



    return (

        <div className='register_container'>
            
            {/* ----------------- header component ------------ */}
    
            <Header/>
              
            {/* -------------- space ----------- */}
            <div className="pt-5 pb-4">

            </div>
            {/* ------------------- page content ----------------- */}

            
                    <div className="container-md formcontiner w-100 p-5  mb-5 pb-5 " >
                      
                      <form className='mt-5 mx-auto p-5 rounded-3 mb-5 h-auto'>



                         {/* ------------------- form top -------------- */}
                         <div className="row gap-md-2 gap-4">
                        {/* -------------- lock icon ---------- */}
                        <div className="icon  d-block mx-auto text-center use_icon user_page_icon w-100 mb-4">
                            <img src="/assets/blogs/commint.webp" alt="" />
                        </div>
            
                            
            
                           <div className="col-12 text-center ">
                          
                            <p className='p_of_register'>
                              Hello with you in our web site 
                            </p>
                           </div>
                          </div>
            
            
                        {/* ------------------ email -------------- */}
                        <div className="mb-3">
                          <div className="icon">
                          <i className="fa fa-envelope"></i>
                          </div>
                          <input type="text" className="w-100 rounded-2 userpageinput  pt-3 pb-3 border-0 bg-white  " id="exampleInputEmail1" placeholder="Email address" value={" email : "+ User.email}  />
                          
                        </div>
            
            
                        {/* -------------------- password --------------- */}
                        <div className="mb-3">
                          <div className="icon">
                          <i className="fa  fa-regular fa-user"></i>
                          </div>
                          <input type="text" className="w-100 rounded-2 userpageinput px-2 pt-3 pb-3 border-0 bg-white text-capitalize" placeholder="Passwords" id="exampleInputPassword1" value={" name  : "+User.name}  />
                        </div>
            
            
                        {/* --------------------- Submit button -------------------- */}
                        <button type="submit" className="btn text-white w-100 pt-3 pb-3" onClick={Logout}>Log out</button>
            
                      </form>
                      
                    </div>  


            {/* -------------------- footer component ------------ */}
            <Footer/>
        
        </div>
      )
}

export default Account
