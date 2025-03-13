// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Filter product slider !!!!!!!!!!!!!!!!!!

// ====================== importing elements ================

import React, { useState, useEffect } from "react";

// ------------------ product data ---------------------
import { Products } from "./Stordata";

// =============== to make a slider ================
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ------------------- to make navagation ---------------
import { useNavigate } from "react-router-dom";
import { Usedata } from "./ContextAPI";
import { Toaster, toast } from "react-hot-toast";
import { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Filter_product_slider = () => {
  const [active, setactive] = useState(0);
  const [filtered_products, setfiltered_products] = useState([...Products]);
  const sliderefrence = useRef(null);
  const [numoflove, setnumoflove] = useState([]);

  const { dispatch, LoveProducts } = Usedata();
  const [discound, setdiscound] = useState([]);
  const go_to_prouct_page = useNavigate();

  const handel_product_page = (e, productid) => {
    // --------------- to handel routing ----------------
    e.preventDefault();
    // ------------------ to go to product page -----------------
    go_to_prouct_page("/product");

    const openproduct = Products.filter((product) => product.id === productid);

    dispatch({
      type: "OPEN_PRODUCT",
      iteam: {
        id: openproduct[0].id,
        name: openproduct[0].name,
        category: openproduct[0].category,
        priceBeforeDiscount: openproduct[0].priceBeforeDiscount,
        priceAfterDiscount: openproduct[0].priceAfterDiscount,
        src: openproduct[0].src,
        src2: openproduct[0].src2,
        rating: openproduct[0].rating,
        des1: openproduct[0].des1,
        des2: openproduct[0].des2,
        des3: openproduct[0].des3,
      },
    });
  };

  useEffect(() => {
    const discounds = Products.map((product) => {
      return Math.floor(
        ((product.priceBeforeDiscount - product.priceAfterDiscount) /
          product.priceBeforeDiscount) *
          100
      );
    });
    setdiscound(discounds);
  }, []);

  const nextbutton = () => {
    sliderefrence.current.slickNext();
  };
  const prevbutton = () => {
    sliderefrence.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // -------------------- active_category---------------

  const active_category = (index, category) => {
    const filterd_product = Products.filter((product) => {
      if (category === "All") {
        return Products;
      }

      if (category === product.category) {
        return product;
      }
    });
    setfiltered_products(filterd_product);

    return setactive(index);
  };

  // ------------------- to handel cart product ---------------
  const handel_cart_product = (e, productid) => {
    const openproduct = Products.filter((product) => product.id === productid);
    toast("You added " + openproduct[0].name + " to cart", { duration: 3000 });

    e.preventDefault();
    dispatch({
      type: "PRODUCT_CART_CASE",
      iteam: {
        id: openproduct[0].id,
        name: openproduct[0].name,
        category: openproduct[0].category,
        priceBeforeDiscount: openproduct[0].priceBeforeDiscount,
        priceAfterDiscount: openproduct[0].priceAfterDiscount,
        src: openproduct[0].src,
        src2: openproduct[0].src2,
        rating: openproduct[0].rating,
        des1: openproduct[0].des1,
        des2: openproduct[0].des2,
        des3: openproduct[0].des3,
      },
    });
  };

  useEffect(() => {
    const redicon = LoveProducts.map((iteam) => iteam.id);
    setnumoflove(redicon);
  }, [LoveProducts]);
  //  ----------------- to handel love cart --------------
  const handel_love_products = (e, productid) => {
    const openproduct = Products.filter((product) => product.id === productid);

    if (!numoflove.includes(productid)) {
      toast("You added " + openproduct[0].name + " to wishlist", {
        duration: 3000,
      });
    }

    // --------------- to handel routing ----------------
    e.preventDefault();

    dispatch({
      type: "PRODUCT_LOVE_CASE",
      iteam: {
        id: openproduct[0].id,
        // name: openproduct[0].name,
        category: openproduct[0].category,
        priceBeforeDiscount: openproduct[0].priceBeforeDiscount,
        priceAfterDiscount: openproduct[0].priceAfterDiscount,
        src: openproduct[0].src,
        src2: openproduct[0].src2,
        rating: openproduct[0].rating,
        des1: openproduct[0].des1,
        des2: openproduct[0].des2,
        des3: openproduct[0].des3,
      },
    });
  };

  const categoryes = Products.map((category, index) => {
    return category.category;
  });
  const new_category = [...new Set(categoryes)];
  const new_category2 = ["All", ...new_category];

  return (
    <div className=" container  productslider1 productslider2">
      <Toaster
        toastOptions={{ className: "productToust" }}
        containerStyle={{
          top: 100,
        }}
      />
      <div
        className="arrowbutton pre"
        onClick={() => {
          prevbutton();
        }}
      >
        <IoIosArrowBack size={20} />
      </div>
      <div
        className="arrowbutton nex"
        onClick={() => {
          nextbutton();
        }}
      >
        <IoIosArrowForward size={20} />
      </div>
      <div className=" py-2 pb-3 text-center">
        {new_category2.map((category, index) => {
          return (
            <span
              className="mx-2  fw-medium text-capitalize category_name btn"
              style={{ color: active === index ? "#96AE00" : "#2D2C6E" }}
              id={index}
              onClick={() => {
                active_category(index, category);
              }}
            >
              {category}
            </span>
          );
        })}
      </div>

      <Slider
        ref={sliderefrence}
        Slider
        {...settings}
        className="product_continer allpoduct_container"
      >
        {filtered_products.map((product, index) => {
          return (
            <div className="product  my-3 mx-1 pe-3 pe-md-0 rounded-3">
              <div className="bigcart mx-1">
                <div className="card  rounded-3  position-relative" key={index}>
                  <img
                    src={"/" + product.src}
                    className="imge1 card-img-top rounded-3 "
                    alt="..."
                  />
                  <img
                    src={"/" + product.src2}
                    className="imge2  card-img-top rounded-3"
                    alt="..."
                  />

                  <div className="discound position-absolute">
                    <p>{discound[index]}%</p>
                    <p className=" position-absolute text-danger px-1 hotproduct">
                      {discound[index] >= 50 ? "Hote" : ""}
                    </p>
                  </div>
                  <div className="procucticons  text-center fs-6  position-absolute">
                    <i
                      className="fa-regular fa-heart "
                      style={{
                        backgroundColor:
                          numoflove.includes(product.id) && "red",
                      }}
                      onClick={(e) => {
                        handel_love_products(e, product.id);
                      }}
                    ></i>
                    <i
                      className="fas fa-shopping-cart my-4"
                      onClick={(e) => {
                        handel_cart_product(e, product.id);
                      }}
                    ></i>
                    <i
                      className="fa fa-eye "
                      onClick={(e) => {
                        handel_product_page(e, product.id);
                      }}
                    ></i>
                  </div>

                  <div className="card-body">
                    <p className="product_category">{product.category}</p>
                    <h6 className="card-title">{product.name}</h6>

                    <div className="rating">
                      {Array(Math.floor(product.rating))
                        .fill(<i className="far fa-star"></i>)
                        .map((star) => {
                          return star;
                        })}
                    </div>
                    <p className="product_prices text-danger fs-5 fw-medium">
                      {product.priceAfterDiscount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}{" "}
                      <span>
                        {product.priceBeforeDiscount.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </span>
                    </p>
                    <button
                      className=" border-0 text-center mx-auto  justify-content-center d-block go_to_card_button d-none"
                      onClick={(e) => {
                        handel_cart_product(e, product.id);
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Filter_product_slider;
