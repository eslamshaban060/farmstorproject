// !!!!!!!!!!!!!!!!!!!!!!! Register page !!!!!!!!!!!!!!!!!!!!

/*
    In this page, users can register to create a new account.
*/

// ======================== importing elements ======================

// ------------------- to use react -------------------
import React, { useState } from 'react';

// ------------------- to use header component --------------
import Header from '../component/Header';

// ---------------- to use footer component---------------------
import Footer from '../component/Footer';

// ----------------- to make a link -----------------
import { Link ,useNavigate} from 'react-router-dom';

// ------------------------ to share user data -------------------------

import { Usedata } from '../component/ContextAPI';
import { useRef } from 'react';



// ====================== main function ===================

const Register = () => {
const emailref=useRef(null)

  // ======================= creating stats ================

  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  // const [loginstat,setloginstat]=useState("no")
  const navigationtologin =useNavigate()
  const {dispatch}= Usedata()

// ==================== functons ==============

const submitbutton=(e)=>{
  e.preventDefault()
 
  
if(!email.includes("@")){
  emailref.current.style.color="red"
  return;
}  
  if(name.trim()!==""&& email.trim()!==""&& password.trim()!==""){
    

    dispatch(
      {
        type:"USER_CASE",
        iteam:{
          name:name,
          email:email,
          password:password,
          loginstat:false
        }
      }
    )
    navigationtologin("/login")
  }
 
  setname("")
  setpassword("")

  setemail("")


}



  return (
    <div className="register">
      <div className="register_container">

        {/* ---------------- header component ----------- */}
        {<Header />}
         {/* -------------- space ----------- */}
         <div className="pt-5 pb-4">

        </div>
        {/* ---------------- content of this page  ---------------- */}

        <div className="container-md formcontiner w-100 p-5 mb-5 pb-5 " >
          
          <form className='mt-5 mx-auto p-5 rounded-3 mb-5 '>
             {/* ------------------- form top -------------- */}
             <div className="row gap-md-2 gap-4">
                {/* -------------- lock icon ---------- */}
                <div className="icon col-2">
                  <i className="fa fa-lock"
                  ></i>
                </div>

                {/* ------------------- head -------------------- */}

               <div className="col-9">
               <p className='fs-5 fw-medium '>
                   Sign Up
                </p>
                <p className='p_of_register'>
                   Your personal data will be used to support your experience throughout this website, to manage access to your account.
                </p>
               </div>
              </div>


            {/* ------------------ name -------------- */}
            <div className="mb-3">
              <div className="icon">
                <i className="fa fa-user">
                </i>
              </div>
              <input type="text" className="w-100 rounded-2 px-3 pt-3 pb-3 border-0 bg-white " id="exampleInputEmail1" placeholder="Name" value={name}  onChange={(e)=>{
                setname(e.target.value)
              }}  required />
              
            </div>
            {/* ------------------ email -------------- */}
            <div className="mb-3">
              <div className="icon">
              <i className="fa fa-envelope"></i>
              </div>
              <input type="email" className="w-100 rounded-2 px-3 pt-3 pb-3 border-0  ps-5" ref={emailref} placeholder="Email address" value={email}onChange={(e)=>{
                setemail(e.target.value)
                
              }} required />
              
            </div>


            {/* -------------------- password --------------- */}
            <div className="mb-3">
              <div className="icon">
              <i className="fa fa-key"></i>
              </div>
              <input type="password" className="w-100 rounded-2 px-3 pt-3 pb-3 border-0 bg-white " placeholder="Passwords" id="exampleInputPassword1" value={password}  onChange={(e)=>{
                setpassword(e.target.value)
              }} required />
            </div>

            {/* ---------------- to login page ------------- */}
            <p className='logindirection'>
                <Link to="/login">Aready have an account?</Link>
            </p>

            
           
            
            {/* --------------------- Submit button -------------------- */}
            <button type="submit" className="btn text-white w-100 pt-3 pb-3" onClick={submitbutton}>Submit</button>

          </form>
          
        </div>
        

        {/* ------------------------- foooter component ------- */}
          <Footer/>
      </div>
    </div>
  );
};

export default Register;
