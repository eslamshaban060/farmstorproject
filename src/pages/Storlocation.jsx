import React from "react";
import Back_to_top_button from "../component/Back_to_top_button";
import Header from "../component/Header";
// -------------- to use footer component -----------
import Footer from "../component/Footer";

const StoreLocator = () => {
  const stores = [
    {
      id: 1,
      name: "RUE PELLEPORT - PARIS",
      address: "Heaven Stress, Beverly Melbourne",
      phone: "(+100) 123 456 7890",
      email: "Orfarm@google.com",
      hours: "09:00 AM - 18:00 PM",
      image: "/assets/imges/contact (1).jpg",
    },
    {
      id: 2,
      name: "RUE PELLEPORT - PARIS",
      address: "Heaven Stress, Beverly Melbourne",
      phone: "(+100) 123 456 7890",
      email: "Orfarm@google.com",
      hours: "09:00 AM - 18:00 PM",
      image: "/assets/imges/contact (2).jpg",
    },
    {
      id: 3,
      name: "RUE PELLEPORT - PARIS",
      address: "Heaven Stress, Beverly Melbourne",
      phone: "(+100) 123 456 7890",
      email: "Orfarm@google.com",
      hours: "09:00 AM - 18:00 PM",
      image: "/assets/imges/contact (3).jpg",
    },
    {
      id: 4,
      name: "RUE PELLEPORT - PARIS",
      address: "Heaven Stress, Beverly Melbourne",
      phone: "(+100) 123 456 7890",
      email: "Orfarm@google.com",
      hours: "09:00 AM - 18:00 PM",
      image: "/assets/imges/contact (4).jpg",
    },
  ];

  return (
    <div className=" overflow-hidden ">
      {/* Header Section */}

      {/* ------------------ header component --------------- */}
      <div>{<Header />}</div>
      <div className="space pb-4 pt-5"></div>
      <div className="py-5" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container text-center">
          <h1 className="display-5 fw-bold mb-2 Locator">Store Locator</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a
                  href="/"
                  className="text-decoration-none tohomelinkfromlocator"
                >
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Store Locator
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row pb-5 ">
          {/* Store List */}
          <div className="col-lg-6  locationScroll mb-4 overflow-y-scroll">
            {stores.map((store) => (
              <div key={store.id} className="card mb-4 border-0 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={store.image}
                      alt={store.name}
                      className="img-fluid h-100 w-100 object-fit-cover"
                      style={{ minHeight: "200px" }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title mb-3">{store.name}</h5>
                      <div className="card-text ">
                        <p className="mb-1">
                          <span className="fw-medium locationtext">Add: </span>
                          {store.address}
                        </p>
                        <p className="mb-1">
                          <span className="fw-medium locationtext">
                            Phone:{" "}
                          </span>
                          {store.phone}
                        </p>
                        <p className="mb-1">
                          <span className="fw-medium locationtext">
                            Email:{" "}
                          </span>
                          {store.email}
                        </p>
                        <p className="mb-0">
                          <span className="fw-medium locationtext">
                            Opening Hours:{" "}
                          </span>
                          {store.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="col-lg-6 ps-lg-5">
            <div className="card border-0 shadow-sm h-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7008881.247458094!2d25.947355876983!3d26.494124096879126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2s!4v1708280554015!5m2!1sen!2s"
                className="w-100 h-100"
                style={{ minHeight: "600px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------- back to top button ------------- */}
      <Back_to_top_button />

      {/* ----------------Footer component ---------------- */}

      {<Footer />}
    </div>
  );
};

export default StoreLocator;
