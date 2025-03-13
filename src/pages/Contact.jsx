// !!!!!!!!!!!!!!!!!!!!!!! Contact page !!!!!!!!!!!!!!!!!!!!

/*
    In this page, customers can contact us by filling out a form or accessing contact information.
*/

// ======================== importing elements ======================

// ------------------- to use react -------------------
import React from "react";
// ------------------- to use header component --------------
import Header from "../component/Header";
// -------------- import Back_to_top_button and footer ---------
import Back_to_top_button from "../component/Back_to_top_button";
import Footer from "../component/Footer";
import { useState } from "react";

const Contact = () => {
  const [name, setname] = useState("");
  const [commint, setcommint] = useState("");
  const [email, setemail] = useState("");
  const handelsubmit = () => {
    setname("");
    setcommint("");
    setemail("");
  };
  return (
    <div className="contact ">
      <div className="contact_container">
        {/* ---------------- header component ----------- */}
        {<Header />}

        {/* ----------------- page content ------------- */}

        <div className="content_page_content">
          <div className="spacing py-5"></div>
          <section id="branches overflow-hidden">
            <div class="container text-center pt-5 pb-5">
              <div className="blog_title container text-center my-4">
                <span class="badge badge-custom my-2">CONTACT US</span>
                <h2>Looking For Orfarm?</h2>
                <p className="dis">
                  The liber tempor cum soluta nobis eleifend option congue
                </p>
              </div>

              <div class="row mt-4">
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="branch-card w-100">
                    <div class=" branch-img1"></div>

                    <h5 class="fw-bold mt-3">RUE PELLEPORT - PARIS</h5>
                    <p className="text-muted">
                      Add: Heaven Stress, Beverly Melbourne <br />
                      Phone: (+100) 123 456 7890
                      <br />
                      Email: Orfarm@google.com
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="branch-card ">
                    <div class=" branch-img2"></div>

                    <h5 class="fw-bold mt-3">PROSPECT - NEW YORK</h5>
                    <p className="text-muted">
                      Add: Heaven Stress, Beverly Melbourne <br />
                      Phone: (+100) 123 456 7890
                      <br />
                      Email: Orfarm@google.com
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="branch-card ">
                    <div class=" branch-img3"></div>
                    <h5 class="fw-bold mt-3">BUDAPEST - HUNGARY</h5>
                    <p className="text-muted">
                      Add: Heaven Stress, Beverly Melbourne <br />
                      Phone: (+100) 123 456 7890
                      <br />
                      Email: Orfarm@google.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gray-50 pb-5 py-12">
            <div className=" container pb-5">
              <div className="row container">
                {/* Map Column - Left Side */}
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="h-100 min-h-[600px]  w-100 rounded-2 shadow-sm">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7008881.247458094!2d25.947355876983!3d26.494124096879126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2s!4v1708280554015!5m2!1sen!2s"
                      className="w-100 h-100 iframegy1 border-0"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                {/* Form Column - Right Side */}
                <div className=" comments col-lg-6 pt-md-4 ps-md-4">
                  <h2 className="leve_coment_title my-5 my-sm-3">
                    LEAVE A REPLY
                  </h2>

                  <form onSubmit={handelsubmit} className="pt-2">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="w-100 rounded-5 py-3 px-3 border-0"
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="w-100 rounded-5 py-3 px-3 border-0"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <textarea
                        className="w-100 rounded-3 py-2 px-3 border-0"
                        rows="10"
                        value={commint}
                        onChange={(e) => setcommint(e.target.value)}
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="border-0 mt-3">
                      SEAND MASSAGE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ------------------------- back to top button ------------- */}
        <Back_to_top_button />

        {/* ---------------- footer component ---------------- */}

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
