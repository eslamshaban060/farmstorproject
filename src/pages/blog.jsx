// !!!!!!!!!!!!!!!!!!!!! blog page !!!!!!!!!!!!!!!!!!!!!
/*
    IN THIS PAGE WE WILL PUT OUT PLOGS OR SHAR OUT NEWS 
*/

// ================= IMPORTING ELEMENTS =================

// ------------------- to use react ------------------
import React, { useState } from 'react'

// ---------------------- to use header-------------------
import Header from '../component/Header'

// -------------- to use footer component -----------
import Footer from '../component/Footer';
// -------------- to use Blog_slider_2  component -----------
import Blog_slider_2 from '../component/Blog_slider_2';
// -------------- to use Articles data -----------
import { Articles } from '../component/Stordata';

// ------------------------ to share artcle with context api ---------
import { Usedata } from '../component/ContextAPI';
// --------------------- to direct to new page ---------------
import { useNavigate } from 'react-router-dom';
// ------------------------ back to top button -------------
import Back_to_top_button from '../component/Back_to_top_button';

const Blog = () => {
  const {dispatch} = Usedata()
  const [yourSearch,setyourSearch]=useState("")
  const [tag_article,settag_article]=useState([...Articles])
  const [article_id,setarticle_id]=useState(0)
  const navigation = useNavigate()

  // ---------------------- open article to reade ---------------
  const open_to_reade=(article)=>{
    navigation("/article")
     dispatch(
      {
        type:"ARTICLE_CASE",
        iteam:{
          id: article.id,
          category: article.category,
          author: article.author,
          date: article.date,
          title: article.title,
          description: article.description,
          image: article.image,
        }
      }

     )
  }


  // ========================== to handel faler by category =========

  const tage_filter = (category,id) => {
    // ---------------- design buttons of categores ------------
    setarticle_id(id)


    // -------------------- filter by category -----------------

    const filteredArticles = Articles.filter((article) =>{
      if( category ===  article.category ){
        return{
          article
        }
      }
      if(category === "All"){
        return(
          Articles
        )
      }
    });
     
    settag_article(filteredArticles)
    
  };

// ==================== to handel filter by search =================
  const filterearticles=tag_article.filter((article)=>{
    return(
      article.title.toLocaleLowerCase().includes(yourSearch.toLocaleLowerCase())

    )})

    const catetgores= Articles.map((article)=>{
      return(
        article.category
      )
    })
    const uniqu_category= ["All",...new Set (catetgores)]

  return (
    <div className='blog  overflow-hidden'>

      <div className="blog_continer">

        {/* ------------------ header component --------------- */}
        <div>
        {
            <Header/>
        }
        </div>
        {/* ------------------ header slider component --------------- */}
        <div className='py-5'>
          <div className='py-5'>
          </div>
          {
             <Blog_slider_2/>
          }
        </div>

        <div className="bolges_body  container pb-5">
          <div className="row pb-5">
            <div className="side_bar  col-lg-3  ">
              <nav className="navbar w-100 ">
              <div className="container-fluid">
                <form className="d-flex w-100 form_blog" role="search">
                  <input className="w-100 rounded-2  search_blog py-1 px-2 border-0" type="search" placeholder="Search" value={(yourSearch)} onChange={(e)=>{
                    return(
                      setyourSearch(e.target.value)
                    )

                  }} aria-label="Search"  />
                  
                </form>
              </div>
            </nav>

            <div className="blog_filter_categores">
            <h2 className='tags  text-uppercase'>
              Tags
            </h2>
              {
                uniqu_category.map((category1,id)=>{
                  return(
                   

                    <button className='mx-2  rounded-5 px-3 border-0 py-1 my-1' id={id}  onClick={()=>{
                      tage_filter(category1,id)
                    }}  style={{color : id===article_id? "#ffffff":"#2D2C6E",backgroundColor:id===article_id ? "#96AE00":"#2d2c6e0c"}}  >
                      {
                        category1
                      }
                    </button>
                  )
                })
              }
            </div>
            <div className="recent_blogs w-100 pb-3">
              <h2 className='tags  text-uppercase'>
                  recent posts
              </h2>
                 <div className="row pb-5 ">
                 {
                    Articles.slice(0,6).map((article)=>{
                      return(
                        <div onClick={()=>{
                          open_to_reade(article)
                        }} className='recent_article col-lg-12 col-sm-6 col-12 pt-3'>
                            <div className="row ">
                                  <div className="image col-4">
                                     <img src={article.image}  alt="" />
                                  </div>
                                  <div className="title col-7">
                                    <h2>
                                     {article.title}
                                    </h2>
                                    <p>
                                    {article.date}
                                    </p>
                                  </div>
                            </div>
                        </div>

                      )
                    })
                  }
                 </div>
              </div>

            </div>

{/* ------------------------------------------------------------ */}
            <div className="all_articles col-lg-9  ps-md-4">
            <div className="row ">
                   
                      {filterearticles.length > 0 ?
                            (    filterearticles.map((article)=>{
                                    return(
                                        <div className="col-md-6 mb-4">
                                             <div className="card article_card " >
                                            <div>
                                            <div className="card-img-top1  rounded-3 ">
                                            <img src={article.image} className="card-img-top  rounded-3" alt="..."/>
                                            </div>
                                            <div className="card-body">
                                                <div className="article_pdata d-flex  ">
                                                    <span className='article_category pe-2 pe-md-2'>
                                                        {article.category}
                                                    </span>
                                                    <span className='pe-2 pe-md-2'>
                                                        {article.author}
                                                    </span>
                                                    <span className='pe-2 pe-md-2'>
                                                        {article.date}
                                                    </span>
                                                </div>
                                              <h5 className="card-title pt-1"> {article.title}</h5>
                                              <p className="card-text">{article.description}</p>
                                              <button href="#" className=" border-0 bg-white article_button" onClick={()=>{
                                                open_to_reade(article)
                                              }} >Countiue Reading</button>
                                            </div>
                                            </div>
                                          </div>
                                        </div>
                                    )
                                })
                            ):(
                              <h2 className=' text-capitalize no_articles fs-1 text-center pt-5 mt-5'>
                                no articles 🤷‍♂️
                              </h2>
                            )
                          
                          }
                  </div>
              </div>

              
            </div>
          </div>
        </div>
        
        {/* ----------------- back to top button ------------- */}
         <Back_to_top_button/>

        {/* ----------------Footer component ---------------- */}
        
        {
          <Footer/>
        }
      </div>

  )
}

export default Blog

