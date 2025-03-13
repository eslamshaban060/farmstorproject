// !!!!!!!!!!!!!!!!!!!!!!! Cart page !!!!!!!!!!!!!!!!!!!!

/*
    In this page, customers can review the items added to their cart before proceeding to checkout.
*/

// ======================== importing elements ======================

// ------------------- to use react -------------------
import React, { useEffect, useState } from 'react';

// ------------------- to use header component --------------
import Header from '../component/Header';
// --------------- to get data from context api ---------
import { Usedata } from '../component/ContextAPI';
import { useNavigate } from 'react-router-dom';
// --------------- back to top button -------------------
import Back_to_top_button from '../component/Back_to_top_button'
import Footer from '../component/Footer';
import Applaycopone from '../component/Applaycopone';

const Cart = () => {

  const {CartProducts,dispatch}=Usedata()
  const navagator=useNavigate()
  

  const frequency = {};

  CartProducts.forEach((item) => {
    const key = JSON.stringify(item); 
    frequency[key] = (frequency[key] || 0) + 1;
  });
  
  const result = Object.entries(frequency).map(([key, count]) => ({
    item: JSON.parse(key), 
    count: count
  }));


  const decreaseQuantity=(e,productid)=>{
    
    e.preventDefault()
    dispatch(
      {
        type:"DELET_PRODUCT",
        iteam:productid

      }
    )
  }

  const deletIteam=(e,productid)=>{
    
    e.preventDefault()
    dispatch(
      {
        type:"DELET_Iteam",
        iteam:productid

      }
    )
  }
  const gotostor=(e,productid)=>{    
    e.preventDefault()
    navagator("/shop")
   
  }


  const increaseQuantity=(e,productid)=>{
     const openproduct=CartProducts.filter((product)=>product.id===productid)
    
      // --------------- to handel routing ----------------
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

  return (
    <div className="cart">
      <div className="cart_container ">
        
        {/* ---------------- header component ----------- */}
        {<Header />}

        <div className="spacing py-5">

        </div>
        <div className="cart_product_show pb-5">
        <p className='container text-secondary pagedentifyp'>
              Home /
              <span className='pagedentify'>Cart</span>
        </p>
        {
             result.length>=1? (<div className="container mt-4">
        <div className="table-responsive">
              <table className="table table-bordered text-center align-middle">
                <thead>
                  <tr>
                    <th>Images</th>
                    <th className='Courses' >Courses</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
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
                        <td >
                          <button className="btn cartbutton1" onClick={(e)=>{
                            decreaseQuantity(e,product.item.id)
                          }}>
                            -
                          </button>
                          <p className="mx-3 btn mt-3 d-inline-block cartbutton3">{product.count}</p>
                          <button className="btn  cartbutton1" onClick={(e)=>{
                            increaseQuantity(e,product.item.id)
                          }}>
                            +
                          </button>
                        </td>
                        <td>${((product.item.priceAfterDiscount)*(product.count)).toFixed(2)}</td>
                        <td>
                          <button className="btn cartbutton2" onClick={(e)=>{
                            deletIteam(e,product.item.id)
                          }}>&times;</button>
                        </td>
                      </tr>

                      )
                    })
                  }
  
                </tbody>
              </table>
              
            </div>
            <div className='card_totals'>

              <Applaycopone/>
              </div>
             </div>):(<div className='w-100  text-center mt-5 pt-5 h6  text-uppercase'>
              <h3 className='empty_cart'>
                no products in your cart
              </h3>
              <div>
              <button className=' border-0  text-center mx-auto  justify-content-center d-block go_to_card_button go_to_card_button3 py-4 px-4 mt-4 fs-6 text-uppercase' onClick={(e)=>{
                gotostor(e)
              }} >
                    go to store
              </button>
              </div>
            </div>)
          }
        </div>

          {/* ------------------------- back to top button ------------- */}
          <Back_to_top_button/>
          {/* -------------------- footer component ------------ */}
          <Footer/>

      </div>
    </div>
  );
};

export default Cart;
