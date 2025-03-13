// !!!!!!!!!!!!!!!!!!!!!!!!!!!!! product revew component !!!!!!!!!!!!!!!!

// ========================= importing elements ==================
import {React,useState} from 'react'
// ----------------- to get and shar data from context api----------
import { Usedata } from '../component/ContextAPI'

const ProductRevew = () => {
 const [name, setname] = useState("");
 const [commint, setcommint] = useState("");
 const [email, setemail] = useState("");
 const [rating, setrating] = useState(0);
 const {dispatch,Product,ProductComments}=Usedata()
 const [hover, setHover] = useState(0);


// --------------------- to handel comments data --------------
const handelsubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: "PRODUCT_COMMINT_CASE",
            iteam: {
                image: "/assets/blogs/commint.webp",
                name: name,
                commint: commint,
                rating:hover,
                id: Product.id
            }
        });

        setname("");
        setcommint("");
        setemail("");
        hover(0);
        rating(0);
};



// ------------------ to handel each article comments --------------
 const filteredComments = ProductComments.filter(commint => commint.id === Product.id);


  return (
    <div className="px-0" >
      <div className='main rounded-3 p-md-5 p-2 bg-white py-4 mt-4 w-100 '>
            <div className="revews_title">
                 <h2>
                     Reviews ({filteredComments.length})
                 </h2>
            </div>


            {/* --------------- comments data or design  -------------- */}
                    <div className="comments mt-4">
                        <div className="container  ">
                            <h2 className='leve_coment_title my-5 my-sm-3'>PRODUCT REVIEWS</h2>

                             <div className='commints_content py-3 '>
                                {filteredComments.length > 0 ? (
                                    filteredComments.map((commint, index) => (
                                        <div key={index} className='row mb-4'>
                                            <div className="image col-2">
                                                <img src={commint.image} className='w-75' alt="" />
                                            </div>
                                            <div className="commint_data col-10  ps-5 ps-lg-2 pt-lg-3 text-wrap">
                                                <h2 className=" text-capitalize fs-5" >{commint.name}</h2>
                                                <p className="   comment_content_text">{commint.commint}</p>
                                                <p className="fs-4 commint_ratin_star">
                                                   {([...Array(commint.rating)]).map((_,i)=>{
                                                        
                                                        return(
                                                            <span key={i} span style={{color:"#daa520"}}>
                                                             ★
                                                            </span>
                                                        )
                                                    })} 
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No reviews yet. Be the first to revew!</p>
                                )}
                            </div> 

                            <h2 className='leve_coment_title my-5 my-sm-3'>LEAVE A REVIEW</h2>

                            <form onSubmit={handelsubmit} className="pt-2">
                               
                                
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" className="w-100 rounded-5 py-3 px-3 border-0" value={name} onChange={(e) => setname(e.target.value)} placeholder="Name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="w-100 rounded-5 py-3 px-3 border-0"  placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required/>
                                    </div>
                                </div>


                                <div className="takerating pt-3   ">
                                    <span  className="take_rating py-3" >rating : </span>
                                    {([...Array(5)]).map((_,index)=>{
                                        const starValue = index + 1;
                                        return(
                                           <span key={index} onClick={()=>{
                                            setrating(starValue)
                                           }} 
                                           onMouseEnter={() => setHover(starValue)}

                                           onMouseLeave={() => setHover(rating)}
                                             style={{color:starValue<=(hover||rating)?"#daa520":""}} >★</span>
                                        )
                                    })}
                                </div>



                                <div className="mt-4">
                                    <textarea className="w-100 rounded-3 py-2 px-3 border-0" rows="10" value={commint} onChange={(e) => setcommint(e.target.value)} placeholder="Message" required></textarea>
                                </div>

                                <button type="submit" className="border-0 mt-3">POST REVIEW</button>
                            </form>
                        </div>
                    </div>            
      </div>
    </div>
  )
}

export default ProductRevew
