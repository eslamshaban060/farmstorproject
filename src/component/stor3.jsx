// !!!!!!!!!!!!!!!!!!!!!!!!!!!! product stor style 3  !!!!!!!!!!!!!!!!!!!!!!

// ======================= importin elements  ========================

import { React, useEffect, useState } from "react";

// -------------------- import product data ----------------
import { Products } from "./Stordata";
import { useOutletContext } from "react-router-dom";
// ------------------- to make navagation ---------------
import { useNavigate } from "react-router-dom";
import { Usedata } from "./ContextAPI";
import { Toaster, toast } from "react-hot-toast";

const Stor3 = () => {
  const [discound, setdiscound] = useState([]);
  const go_to_prouct_page = useNavigate();
  const final_filltered_products = useOutletContext();
  const { dispatch, LoveProducts } = Usedata();
  const [numoflove, setnumoflove] = useState([]);

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

  useEffect(() => {
    const discounds = final_filltered_products.map((product) => {
      return Math.floor(
        ((product.priceBeforeDiscount - product.priceAfterDiscount) /
          product.priceBeforeDiscount) *
          100
      );
    });
    setdiscound(discounds);
  }, []);

  return (
    <div className="product_continer mx-3">
      <div className="row">
        {final_filltered_products.map((product, index) => {
          return (
            <div className="product my-2 ">
              <div
                className="card  rounded-3 pb-4 pb-m-0 position-relative row d-flex"
                key={index}
              >
                <div className="d-inline row d-flex">
                  <div className="col-sm-3 ">
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
                  </div>

                  <div className=" col-md-4 col-lg-5 ">
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

                      <ul className="product_describtion mt-2">
                        <li>{product.des1}</li>
                        <li>{product.des2}</li>
                        <li>{product.des3}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-5    justify-content-center productstyle3data">
                    <p className="product_prices text-danger fs-5 fw-medium  text-start ms-5 ps-3">
                      {product.priceAfterDiscount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>

                    <button
                      className=" border-0 text-center mx-auto  justify-content-center d-block go_to_card_button go_to_card_button3  px-4"
                      onClick={(e) => {
                        handel_cart_product(e, product.id);
                      }}
                    >
                      ADD TO CART
                    </button>
                    <div className="icon3 mt-3 text-center ">
                      <i
                        className="fa-regular fa-heart me-1 rounded-5 p-1"
                        style={{
                          backgroundColor:
                            numoflove.includes(product.id) && "red",
                        }}
                        onClick={(e) => {
                          handel_love_products(e, product.id);
                        }}
                      ></i>
                      Wish List
                      <i
                        className="fa fa-eye ms-3 me-1"
                        onClick={(e) => {
                          handel_product_page(e, product.id);
                        }}
                      ></i>{" "}
                      Preview
                    </div>
                    <Toaster
                      toastOptions={{ className: "productToust" }}
                      containerStyle={{
                        top: 100,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stor3;
