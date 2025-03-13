// !!!!!!!!!!!!!!!!!!!!!!! Footer component !!!!!!!!!!!!!!!!!!!!

// ======================== importing elements ======================

// ------------------- to use react -------------------
import React from "react";

const Footer = () => {
  return (
    <div className="Footer w-100">
      <div className="footerbackground">
        <div className="Footer_container container">
          {/* -------------------- Top section ---------------- */}

          <div className="top_section container pt-5">
            <div className="row justify-content-between">
              <div className="part col-lg-2 col-md-4 col-6 text-white mt-3 justify-content-center text-center">
                <img
                  className="my-2"
                  src="https://html.hixstudio.net/orfarm/assets/img/icon/feature-icon-1.svg"
                  alt=""
                />
                <h6>Fast Delivery</h6>
                <p>Across West & Midel East</p>
              </div>
              <div className="part col-lg-2 col-md-4 col-6 text-white mt-3 justify-content-center text-center">
                <img
                  className="my-2"
                  src="https://html.hixstudio.net/orfarm/assets/img/icon/feature-icon-2.svg"
                  alt=""
                />
                <h6>safe payment</h6>
                <p>100% Secure Payment</p>
              </div>
              <div className="part col-lg-2 col-md-4 col-6 text-white mt-3 justify-content-center text-center">
                <img
                  className="my-2"
                  src="https://html.hixstudio.net/orfarm/assets/img/icon/feature-icon-5.svg"
                  alt=""
                />
                <h6>Curated items</h6>
                <p>From Handpicked Sellers</p>
              </div>
              <div className="part col-lg-2 col-md-4 col-6 text-white mt-3 justify-content-center text-center">
                <img
                  className="my-2"
                  src="	https://html.hixstudio.net/orfarm/assets/img/icon/feature-icon-3.svg"
                  alt=""
                />
                <h6>Online Discount</h6>
                <p>Add Multi-buy Discount</p>
              </div>
              <div className="part col-lg-2 col-md-4 col-6 text-white mt-3 justify-content-center text-center">
                <img
                  className="my-2"
                  src="https://html.hixstudio.net/orfarm/assets/img/icon/feature-icon-4.svg"
                  alt=""
                />
                <h6>Help Center</h6>
                <p>Dedicated 24/7 Support</p>
              </div>
            </div>
            <hr className="bg-white border-white" />
          </div>

          {/* -------------------- medium section ---------------- */}

          <div className="medium_section">
            <div className="row gap-lg-5 gap-md-4">
              <div className="part col-md-3  col-5 text-white mt-3 justify-content-center pt-3 ">
                <h6>Let Us Help You</h6>
                <p>
                  <p className="emailp d-inline">
                    If you have any question, please <br />
                    contact us at:
                  </p>{" "}
                  <span>eslamshaban060@gmail.com</span>
                </p>
              </div>

              <div className="part col-sm-3 col-md-3 col-lg-2 col-5 text-white mt-3 text-center  mt-4 pt-2">
                <p className="emailp">Socal Media</p>
                <div className="social_media">
                  <a href="#" className="text-white">
                    {" "}
                    <i className="fab fa-facebook-f ms-2"></i>
                  </a>
                  <a href="#" className="text-white">
                    <i className="fab fa-twitter ms-2"></i>
                  </a>
                  <a href="#" className="text-white">
                    <i className="fab fa-youtube ms-2"></i>
                  </a>
                  <a href="#" className="text-white">
                    <i className="fab fa-pinterest-p ms-2"></i>
                  </a>
                  <a href="#" className="text-white">
                    <i className="fab fa-skype ms-2"></i>
                  </a>
                </div>
              </div>

              <div className="part col-md-5 ms-lg-auto col-11 text-white mt-3 justify-content-center text-center pt-4">
                <div className="input-group mb-3 bg-white py-2 px-1 ps-3 rounded-2">
                  <input
                    type="email"
                    className="  bg-white border-0 py-2"
                    placeholder="Your email address..."
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="border-0 "
                    type="submit"
                    id="button-addon2"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
            <hr className="bg-white border-white" />
          </div>

          {/* -------------------- buttom section ---------------- */}

          <div className="buttom_section">
            <div className="row justify-content-between pb-4 ">
              {/* ------------------compy_rights------------- */}
              <div className="compy_rights text-white mt-1 justify-content-center py-2 col-md-6 text-md-start text-center gap-5">
                <p>
                  <p className="emailp d-inline ">
                    Copyright ©{" "}
                    <span className="text-capitalize">Eslam shaban goamh</span>{" "}
                    all rights reserved.
                  </p>
                </p>
              </div>
              <div className="paymethod col-md-6 text-center justify-content-center mt-2 ms-auto ps-lg-5 ">
                <div className="ps-lg-5 ms-auto">
                  <img
                    className="pt-1 ps-lg-5 ms-lg-5"
                    src="https://html.hixstudio.net/orfarm/assets/img/shape/footer-payment.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
