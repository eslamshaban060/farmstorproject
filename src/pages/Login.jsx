// !!!!!!!!!!!!!!!!!!!!!!! Login page !!!!!!!!!!!!!!!!!!!!

/*
    In this page, customers can log in to access their accounts.
*/

// ======================== importing elements ======================

// ------------------- to use react -------------------
import{ React,useState} from 'react';

// ------------------- to use header component --------------
import Header from '../component/Header';

// ---------------- to use footer component---------------------
import Footer from '../component/Footer';

// ----------------- to make a link -----------------
import { Link ,useNavigate} from 'react-router-dom';

// ---------------- style fille ---------
import "../App.css"

// ------------------------ to share user data -------------------------
import { Usedata } from '../component/ContextAPI';







const Login = () => {


  // ======================= creating stats ================
  const [lemail,setlemail]=useState("")
  const [lpassword,setlpassword]=useState("")  
  const {User,dispatch}=Usedata()
  const navigatehome=useNavigate()


  // console.log(User)
  // ==================== functons ==============

  // ---------------- submitbutton function -------------
  const lsubmitbutton=(e)=>{
    e.preventDefault()
    if( lemail.trim()!==""&& lpassword.trim()!==""){

        if(lemail.trim()===User.email && lpassword.trim()===User.password ){


          navigatehome("/")

          dispatch(
            {
              type:"USER_CASE",
              iteam:{
                name:User.name,
                email:User.email,
                password:User.password,
                loginstat:true
              }
            }
          )

        }
       

    }


    setlpassword("")

    setlemail("")


  }


  return (
    <div className="login">
      <div className="login_container register_container">

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
                  <i className="fa fa-unlock"
                  ></i>
                </div>

                {/* ------------------- head -------------------- */}

               <div className="col-9">
               <p className='fs-5 fw-medium '>
                    Login Here
                </p>
                <p className='p_of_register'>
                  Your personal data will be used to support your experience throughout this website, to manage access to your account.
                </p>
               </div>
              </div>


            {/* ------------------ email -------------- */}
            <div className="mb-3">
              <div className="icon">
              <i className="fa fa-envelope"></i>
              </div>
              <input type="email" className="w-100 rounded-2 px-3 pt-3 pb-3 border-0 bg-white ps-5" id="exampleInputEmail1" placeholder="Email address" value={lemail}  onChange={(e)=>{
                setlemail(e.target.value)
              }}  />
              
            </div>


            {/* -------------------- password --------------- */}
            <div className="mb-3">
              <div className="icon">
              <i className="fa fa-key"></i>
              </div>
              <input type="password" className="w-100 rounded-2 px-3 pt-3 pb-3 border-0 bg-white " placeholder="Passwords" id="exampleInputPassword1" value={lpassword}  onChange={(e)=>{
                setlpassword(e.target.value)
              }}/>
            </div>

            {/* ---------------- to login page ------------- */}
            
            <p className='logindirection'>
                <Link to="/register"> Forget password ?</Link>
            </p>


            {/* --------------------- Submit button -------------------- */}
            <button type="submit" className="btn text-white w-100 pt-3 pb-3" onClick={lsubmitbutton}>Submit</button>

          </form>
          
        </div>      


        {/* ------------------------- foooter component ------- */}
        <Footer/>


      </div>
    </div>
  );
};

export default Login;
