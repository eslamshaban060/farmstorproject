// !!!!!!!!!!!!!!!!!!!!!!! Shop page !!!!!!!!!!!!!!!!!!!!

/*
    In this page, users can browse and view available products.
*/

// ======================== importing elements ======================

// ------------------- to use react -------------------
import React, { useEffect, useState } from 'react';

// ------------------- to use header component --------------
import Header from '../component/Header';

// ------------------- to use header component --------------
import Footer from '../component/Footer'

// ------------------- to use header component --------------
import { Categories } from '../component/Stordata';

// ---------------- to make links ------------------
import { Link, Outlet,NavLink } from 'react-router-dom';

// --------------- to get category slider ----------------
import CategorySlider from '../component/CategorySlider';
//------------------------- imporort products data------------------
import { Products } from '../component/Stordata';
// --------------- back to top button -------------------
import Back_to_top_button from '../component/Back_to_top_button'



const Shop = () => {


  // ------------------- our varables -----------------
  const [active,setactive]=useState(2)
  const [yourSearch,setyourSearch]=useState("")
  const rattingvalues=[5,4,3,2,1]
  const [selected_ratings, setselected_ratings] = useState([]);
  const [maxprice, setmaxprice] = useState(1000);
  const [mainprice, setmainprice] = useState(0);
  const [selected_category, setselected_category] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([...Products]);
  

/// ================== تصفية حسب التصنيف ==================
const category_fiter_function = (name) => {
  setselected_category(
    selected_category.includes(name)
      ? selected_category.filter((category) => category !== name)
      : [...selected_category, name]
  );
};

// ================== تصفية حسب التقييم ==================
const rating_fiter_function = (rating_value) => {
  setselected_ratings(
    selected_ratings.includes(rating_value)
      ? selected_ratings.filter((rate) => rate !== rating_value)
      : [...selected_ratings, rating_value]
  );
};

// ================== تصفية حسب السعر ==================
const search_by_price = (e) => {
  e.preventDefault();
  applyFilters();
};

// ================== تطبيق جميع الفلاتر ==================
const applyFilters = () => {
  let filtered = [...Products];

  // تطبيق تصفية التصنيفات
  if (selected_category.length > 0) {
    filtered = filtered.filter((product) =>
      selected_category.includes(product.category)
    );
  }

  // تطبيق تصفية التقييمات
  if (selected_ratings.length > 0) {
    filtered = filtered.filter((product) =>
      selected_ratings.includes(Math.floor(product.rating))
    );
  }

  // تطبيق تصفية السعر
  filtered = filtered.filter(
    (product) =>
      Number(maxprice) >= product.priceAfterDiscount &&
      product.priceAfterDiscount >= Number(mainprice)
  );

if(yourSearch.trim() !==""){
  filtered = filtered.filter((product) =>product.name.toLowerCase().includes(yourSearch.toLowerCase()) 
);
}

  setFilteredProducts(filtered);
};

// ================== تشغيل التصفية عند تغيير أي متغير ==================
useEffect(() => {
  applyFilters();
}, [selected_category, selected_ratings,yourSearch]);

  // ------------------- to set product design mode -------------
  const activeButton=(index)=>{

  return(
    setactive(index)
  )

  }


// ==================== fillterde by price ===================

// const search_by_price=(e)=>{
//   e.preventDefault()
//   const pricefilter=final_filter_by_category.filter((product)=>{
//     if(Number(maxprice)>=product.priceAfterDiscount && product.priceAfterDiscount>=Number(mainprice)){
//       return(
//         product
//       )
//     }
//   })
//   setfinal_filter_by_category(pricefilter)
// }




  return (
    <div className="shop  overflow-hidden">
      <div className="shop_container">

        {/* ---------------- header component ----------- */}
        {<Header />}

         
        {/* ------------------------  products -------------------*/}

        <div className="store py-5">

            <div className=" py-5 mt-4  container">


              <div className="row  ">

                <div className="filters  col-lg-3   container  rounded-3  d-lg-block  rounded-3 p-0 h-100 px-4 rounded-3"  >

                {/* ------------------ seaarch by name------------- */}

                  <div className=" container bg-white pt-4 rounded-3">
                    <form className="d-flex w-100 form_blog bg-white " role="search">
                      <input className="w-100 rounded-2  search_blog py-1 px-2 border-0" type="search" placeholder="Search" value={(yourSearch)} onChange={(e)=>{
                        return(
                          setyourSearch(e.target.value)
                        )

                      }} aria-label="Search"  />
                      
                    </form>
                  </div>
                  {/* ---------------- filltered by category --------- */}

                  <div className='filter_by_category px-4 filter_by_rating container  bg-white rounded-b-3  '>
                    <div className='contint py-4'>
                      {
                        Categories.map((Categorie)=>{

                          return(
                            <div className="form-check pt-1 " >
                              <input className="form-check-input" onChange={()=>{
                              category_fiter_function(Categorie.name)
                            }} type="checkbox" value={Categorie.name} id={Categorie.name}/>
                              <label className="form-check-label" for={Categorie.name}>
                                {Categorie.name}
                              </label>
                              </div>
                          )

                        })
                      }
                    </div>

                  </div>

                  {/* ------------------- filltered by price ----------- */}

                  <div className="faltered_by_prace container  bg-white py-2">
                    
                  <form className='row bg-white  searech_form mx-auto py-4'>
                      <div className="mb-3 col-6">
                       
                      <input className="w-100 rounded-2  search_blog py-1 px-2 border-0"  type='number' placeholder="Min" value={mainprice} onChange={(e)=>{
                          return(
                            setmainprice(e.target.value)
                          )
                        }}  />
                       
                      </div>
                      <div className="mb-3 col-6">
                        <input className="w-100 rounded-2  search_blog py-1 px-2 border-0"  type='number' placeholder="Max" value={maxprice} onChange={(e)=>{
                          return(
                            setmaxprice(e.target.value)
                          )

                        }}  />
                      </div>
                      
                      <button className=' border-0 text-center mx-auto  justify-content-center d-block go_to_card_button go_to_card_button3 w-75 px-4' onClick={(e)=>{
                        search_by_price(e) 
                      }} type="submit">
                            Search
                      </button>
                    </form>
                  </div>

                  {/* ----------------------- filltered by stars or rating  ------------ */}

                  <div className='filter_by_rating p-4  container  bg-white rounded-b-3 mb-4 '>
                    {
                      rattingvalues.map((rating_value)=>{

                        return(
                          <div className="form-check pt-1 " >
                            <input className="form-check-input" onChange={()=>{
                            rating_fiter_function(rating_value)
                          }} type="checkbox" value={rating_value} id={rating_value}/>
                            <label className="form-check-label" for={rating_value}>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star pe-1"></i>
                              ({rating_value})
                            </label>
                            </div>
                        )

                      })
                    }
                  

                  </div>
                  <div className=' d-none d-lg-block bg-white   container rounded-3 p-0 h-100'>
                    <img src="/assets/imges/biner.png"  className="w-100" alt="" />
                  </div>

                </div>

                {/* =------------------------ products---------- */}


                <div className="products col-lg-9  ps-4">

                  <CategorySlider/>

                  <div className="showfilter bg-white    mb-4 rounded-2">
                    <div className="d-flex justify-content-between px-4 ">
                      <p  className='pt-3 show_nom_of_product'>
                         Showing  {filteredProducts.length===0 ? 0 : 1} - { filteredProducts.length} 
                      </p>
                      <div className="buttons d-flex justify-content-between gap-sm-3 gap-2 ">
                      <button className="nav-link active d-block "id="1" onClick={()=>{
                        activeButton(1)
                      }}   type="button" role="tab"  >
                      <NavLink to="stor1" className="sror1" style={{color:active ===1 ?  " #96AE00" :"#bcbcbe"}}>

                                             <i>
                                                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="currentColor"></path>
                                                   <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z" fill="currentColor"></path>
                                                   <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z" fill="currentColor"></path>
                                                   <path d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z" fill="currentColor"></path>
                                                   <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="currentColor"></path>
                                                   <path d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z" fill="currentColor"></path>
                                                   <path d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z" fill="currentColor"></path>
                                                   <path d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z" fill="currentColor"></path>
                                                   <path d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z" fill="currentColor"></path>
                                                   <path d="M20 4C21.1046 4 22 3.10457 22 2C22 0.89543 21.1046 0 20 0C18.8954 0 18 0.89543 18 2C18 3.10457 18.8954 4 20 4Z" fill="currentColor"></path>
                                                   <path d="M20 10C21.1046 10 22 9.10457 22 8C22 6.89543 21.1046 6 20 6C18.8954 6 18 6.89543 18 8C18 9.10457 18.8954 10 20 10Z" fill="currentColor"></path>
                                                   <path d="M20 16C21.1046 16 22 15.1046 22 14C22 12.8954 21.1046 12 20 12C18.8954 12 18 12.8954 18 14C18 15.1046 18.8954 16 20 16Z" fill="currentColor"></path>
                                                   </svg>
                                             </i>
                       </NavLink>
                      </button>


                      <button className="nav-link" type="button" role="tab" aria-controls="nav-popular" aria-selected="false" tabindex="-1" onClick={()=>{
                        activeButton(2)
                      }} >
                      <NavLink to="stor2" className="sror1" style={{color:active ===2 ?  " #96AE00" :"#bcbcbe"}}>

                                             <i>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="currentColor"></path>
                                                   <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z" fill="currentColor"></path>
                                                   <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z" fill="currentColor"></path>
                                                   <path d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z" fill="currentColor"></path>
                                                   <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="currentColor"></path>
                                                   <path d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z" fill="currentColor"></path>
                                                   <path d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z" fill="currentColor"></path>
                                                   <path d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z" fill="currentColor"></path>
                                                   <path d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z" fill="currentColor"></path>
                                                   </svg>
                                             </i>
                                             </NavLink>

                      </button>

                     
                      <button className="nav-link "   type="button" role="tab" aria-controls="nav-product" onClick={()=>{
                        activeButton(3)
                      }} >
                      <NavLink to="stor3" style={{color:active===3 ?  " #96AE00" :"#bcbcbe"}} >
                                             <i>
                                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="currentColor"></path>
                                                   <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z" fill="currentColor"></path>
                                                   <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z" fill="currentColor"></path>
                                                   <path d="M20 2C20 2.552 19.553 3 19 3H7C6.448 3 6 2.552 6 2C6 1.448 6.448 1 7 1H19C19.553 1 20 1.447 20 2Z" fill="currentColor"></path>
                                                   <path d="M20 8C20 8.552 19.553 9 19 9H7C6.448 9 6 8.552 6 8C6 7.448 6.448 7 7 7H19C19.553 7 20 7.447 20 8Z" fill="currentColor"></path>
                                                   <path d="M20 14C20 14.552 19.553 15 19 15H7C6.448 15 6 14.552 6 14C6 13.447 6.448 13 7 13H19C19.553 13 20 13.447 20 14Z" fill="currentColor"></path>
                                                </svg>
                                             </i>
                                             </NavLink>

                      </button>
                      </div>
                      <p  className='pt-3'>
                        Show {filteredProducts.length}
                      </p>
                    </div>
                  </div>

                  <div className="ourproducts  ">
                      {
                         <Outlet context={filteredProducts} />

                      }

                  </div>


                </div>
              </div>
            </div>

        </div>

        {/* ------------------------- back to top button ------------- */}
        <Back_to_top_button/>
        {/* ----------------------- footer -------------------- */}

        {<Footer />}

      </div>
    </div> 
  );
};

export default Shop;
