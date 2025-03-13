// ===================== importing elements ==================
// ---------------- to use hoocks of react to handle my code ------
import React, { useState, useEffect } from 'react'

// -------------- to get data from context api ----------------
import { Usedata } from '../component/ContextAPI'
// ---------------------- to use header component ----------------
import Header from '../component/Header'
// -------------------------- footer component -----------------
import Footer from '../component/Footer'
// --------------- back to top button -------------------
import Back_to_top_button from '../component/Back_to_top_button'


// ----------------------------- main funcion---------------------
const Reading_article = () => {

    // ---------------- all stats or varables that i used ----------
    const { Article, dispatch, Comments } = Usedata();
    const [name, setname] = useState("");
    const [commint, setcommint] = useState("");


    // --------------------- to handel comments data --------------
    const handelsubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: "COMMINT_CASE",
            iteam: {
                image: "/assets/blogs/commint.webp",
                name: name,
                commint: commint,
                id: Article.id
            }
        });

        setname("");
        setcommint("");
    };

    // ------------------ to handel each article comments --------------
    const filteredComments = Comments.filter(commint => commint.id === Article.id);

    return (
        <div >
        {/* ----------------------- header component -------- */}
            <Header />

{/* ----------------------------- article body ------------ */}

            <div className='py-5 '>

                {/* ------------ spacing --------- */}
                <div className="pt-5 pb-3">

                </div>

                {/* --------------- ARTICLE BODY CONTENT --------- */}
                {/*  And in this we used all data of article that we have onclick about it  */}
                <div className="article_content ">
                    <div className="article_blog_img container">
                        <img src={Article.image} className='w-100 rounded-3' alt="" />
                    </div>

                    <div className="article_blog_text container px-5">
                        <div className="bg-white py-5 rounded-3 container px-md-5 w-100 ms-auto">
                            <div className="article_pdata d-flex">
                                <span className='article_category pe-2 pe-md-2'>{Article.category}</span>
                                <span className='pe-2 pe-md-2'>{Article.author}</span>
                                <span className='pe-2 pe-md-2'>{Article.date}</span>
                            </div>
                            <h5 className="article-title fs-2 pt-2">{Article.title}</h5>
                            <p className='pe-md-5   article_paragragh pt-3 pe-md-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti deleniti asperiores autem. Accusamus, sed quidem repudiandae adipisci quas, minima molestiae autem ad totam suscipit fuga, libero rerum pariatur veritatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nobis quas sapiente consequuntur aperiam excepturi animi unde fuga repellat similique, quae eveniet odit. Aspernatur animi, beatae natus esse eaque nihil Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto id dolorem fugiat iure ad assumenda qui sunt magni praesentium numquam possimus vitae molestias aliquam accusamus, minus, exercitationem, fuga maxime labore?
                        </p>
                        <p className='pe-md-5  article_paragragh pt-4 pe-md-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti deleniti asperiores autem. Accusamus, sed quidem repudiandae adipisci quas, minima molestiae autem ad totam suscipit fuga, libero rerum pariatur veritatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nobis quas sapiente consequuntur aperiam excepturi animi unde fuga repellat similique, quae eveniet odit. Aspernatur animi, beatae natus esse eaque nihil Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto id dolorem fugiat iure ad assumenda qui sunt magni praesentium numquam possimus vitae molestias aliquam accusamus, minus, exercitationem, fuga maxime labore?
                        </p>
                        <div className="post_img mt-5 mx-auto justify-content-center">
                            <div className="top_imges justify-content-center row">
                            <img src="/assets/blogs/1 (2).jpeg" className='col-md-6 mb-4' alt="" />
                            <img src="/assets/blogs/1 (3).jpeg" className='col-md-6 mb-4' alt="" />
                                
                            </div>
                            
                        </div>
                        <p className='pe-md-5  article_paragragh pt-4 pe-md-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti deleniti asperiores autem. Accusamus, sed quidem repudiandae adipisci quas, minima molestiae autem ad totam suscipit fuga, libero rerum pariatur veritatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nobis quas sapiente consequuntur aperiam excepturi animi unde fuga repellat similique, quae eveniet odit. Aspernatur animi, beatae natus esse eaque nihil Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto id dolorem fugiat iure ad assumenda qui sunt magni praesentium numquam possimus vitae molestias aliquam accusamus, minus, exercitationem, fuga maxime labore?
                        </p>

                        </div>
                    </div>



                    {/* ------------------- comments data or design  -------------- */}
                    <div className="comments px-sm-5">
                        <div className="container w-50 px-5">
                            <h2 className='leve_coment_title my-5 my-sm-3'>COMMENTS</h2>

                            <div className='commints_content'>
                                {filteredComments.length > 0 ? (
                                    filteredComments.map((commint, index) => (
                                        <div key={index} className='row mb-4'>
                                            <div className="image col-2">
                                                <img src={commint.image} className='w-75' alt="" />
                                            </div>
                                            <div className="commint_data col-10">
                                                <h2>{commint.name}</h2>
                                                <p>{commint.commint}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No comments yet. Be the first to comment!</p>
                                )}
                            </div>

                            <h2 className='leve_coment_title my-5 my-sm-3'>LEAVE A COMMENT</h2>

                            <form onSubmit={handelsubmit}>
                                <p className='mb-4'>Your email address will not be published. Required fields are marked *</p>
                                
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" className="w-100 rounded-5 py-2 px-3 border-0" value={name} onChange={(e) => setname(e.target.value)} placeholder="Name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="w-100 rounded-5 py-2 px-3 border-0"  placeholder="Email" required/>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <textarea className="w-100 rounded-3 py-2 px-3 border-0" rows="6" value={commint} onChange={(e) => setcommint(e.target.value)} placeholder="Message" required></textarea>
                                </div>

                                <button type="submit" className="border-0 mt-3">POST COMMENT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------------- back to top button ------------- */}
            <Back_to_top_button/>
            {/* -------------------- footer component ---------------- */}
            <Footer />
        </div>
    );
};

export default Reading_article;
