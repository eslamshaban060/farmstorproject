// !!!!!!!!!!!!!!!!!!!!!!! Favourites page !!!!!!!!!!!!!!!!!!!!

/*
    In this page, users can view and manage their favorite products.
*/

// ======================== importing elements ======================

// ------------------- to use react -------------------
import React from 'react';

// ------------------- to use header component --------------
import Header from '../component/Header';
// --------------- to get data from context api ---------
import { Usedata } from '../component/ContextAPI';
import { Products } from '../component/Stordata';
import { useNavigate } from 'react-router-dom';
// --------------- back to top button -------------------
import Back_to_top_button from '../component/Back_to_top_button'
import Footer from '../component/Footer';




const Favourites = () => {


  const {LoveProducts,dispatch}=Usedata()

  const navagator=useNavigate()
  const frequency = {};
  LoveProducts.forEach((item) => {
    const key = JSON.stringify(item); 
    frequency[key] = (frequency[key] || 0) + 1;
  });
  const result = Object.entries(frequency).map(([key, count]) => ({
    item: JSON.parse(key), 
    count: count
  }));

  const gotostor=(e,productid)=>{    
    e.preventDefault()
    navagator("/shop")
   
  }
 // ------------------- to handel cart product ---------------
 const handel_cart_product = (e,productid)=>{
  const openproduct=Products.filter((product)=>product.id===productid)

  e.preventDefault()
  dispatch(
    {

      type:"PRODUCT_CART_CASE",
      iteam:{
        id:openproduct[0].id,
        name:openproduct[0].name,
        category:openproduct[0].category,
        priceBeforeDiscount:openproduct[0].priceBeforeDiscount,
        priceAfterDiscount:openproduct[0].priceAfterDiscount,
        src:openproduct[0].src,
        src2:openproduct[0].src2,
        rating:openproduct[0].rating,
        des1:openproduct[0].des1,
        des2:openproduct[0].des2,
        des3:openproduct[0].des3,

      }
    }
  )
 }
  const deletIteam=(e,productid)=>{
    
    e.preventDefault()
    dispatch(
      {
        type:"DELET_LOVE",
        iteam:productid

      }
    )
  }



  return (
    <div className="favourites">
      <div className="favourites_container">

        {/* ---------------- header component ----------- */}
        {<Header />}


        <div className="page_content pb-5">

            
          <div className="spacing py-5">
            
          </div>
          <div className="cart_product_show">
          <p className='container text-secondary pagedentifyp'>
              Home /
              <span className='pagedentify'>Wishlist</span>
            </p>
          <div className="container mt-4">
            
            {
              result.length>=1?( <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                  <thead>
                    <tr>
                      <th>Images</th>
                      <th className='Courses' >Courses</th>
                      <th>Unit Price</th>
                      <th>Add To Cart</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
  
                    {
                      result.map((product)=>{
                        return(
                          <tr>
                          <td>
                            <img src={product.item.src} alt={product.item.name} width="140" height="120" className="img-fluid" />
                          </td>
                          <td>{product.item.name}</td>
                          <td>${product.item.priceAfterDiscount.toFixed(2)}</td>
                          <td>
                          <button className=' border-0  text-center mx-auto  justify-content-center d-block go_to_card_button go_to_card_button3 py-3 px-4' onClick={(e)=>{
                            handel_cart_product(e,product.item.id)
                          }}>
                              ADD TO CART
                          </button>
                          </td>
                          <td>
                            <button className="btn cartbutton2"onClick={(e)=>{
                              deletIteam(e,product.item.id)
                            }}>&times;</button>
                          </td>
                        </tr>
                        )
                      })
                    }
  
                  </tbody>
                </table>
              </div>):((<div className='w-100  text-center mt-5 pt-5 h6  text-uppercase'>
                <h3 className='empty_cart'>
                  no products in your wishlist
                </h3>
                <div>
                <button className=' border-0  text-center mx-auto  justify-content-center d-block go_to_card_button go_to_card_button3 py-4 px-4 mt-4 fs-6 text-uppercase' onClick={(e)=>{
                  gotostor(e)
                }} >
                      go to store
                </button>
                </div>
              </div>))
            }
           
          </div>
          </div>


        </div>
        <div className="space pb-5">

        </div>
          {/* ------------------------- back to top button ------------- */}
          <Back_to_top_button/>
          {/* -------------------- footer component ------------ */}
          <Footer/>

      </div>
    </div>
  );
};

export default Favourites;
