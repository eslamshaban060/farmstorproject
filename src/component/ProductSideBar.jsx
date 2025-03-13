// ========================= Importing Required Elements =========================
import { React, useState, useEffect } from "react";

// ------------------- Importing Product Data -------------------
import { Products } from "../component/Stordata";

// ------------- Importing the function to retrieve data from Context API -------------
import { Usedata } from "../component/ContextAPI";
// ------------------- to make navagation ---------------
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

// ====================== Main Function of the Component ==================
const ProductSideBar = () => {
  const { Product } = Usedata();
  const samecategory = Products.filter(
    (product) => product.category === Product.category
  );

  const sideBarProduct =
    samecategory.length > 2 ? samecategory.slice(0, 2) : [];
  const { dispatch, LoveProducts } = Usedata();
  const [discound, setdiscound] = useState([]);
  const go_to_prouct_page = useNavigate();
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
    // ----------- Calculating the discount percentage for each product in the same category -----------
    const discounds = samecategory.map((product) => {
      return Math.floor(
        ((product.priceBeforeDiscount - product.priceAfterDiscount) /
          product.priceBeforeDiscount) *
          100
      );
    });

    // ----------- Updating the state with the calculated values -----------
    setdiscound(discounds);
  }, []);

  return (
    <div>
      {/* ---------------------- Sidebar Product Section ---------------------- */}
      <div className="sideBar rounded-3 p-0 h-100 d-none d-lg-block">
        {/* ---------------------- Sidebar Banner Image ---------------------- */}
        <img
          src="/assets/imges/biner.png"
          className="w-100 object-fit-cover"
          alt=""
        />

        <div className="pt-1 mt-3 bg-white rounded-3">
          {/* ---------------------- Container for Sidebar Products ---------------------- */}
          <div className="product_continer">
            {sideBarProduct.map((product, index) => {
              return (
                <div className="product mx-1 mt-2 rounded-3">
                  <div className="bigcart">
                    {/* ---------------------- Sidebar Product Card ---------------------- */}
                    <div
                      className="card sidbarproduct border-0 rounded-3 position-relative"
                      key={index}
                    >
                      {/* ---------------------- Product Images (Main & Hover) ---------------------- */}
                      <img
                        src={"/" + product.src}
                        className="imge1 card-img-top rounded-3"
                        alt="..."
                      />
                      <img
                        src={"/" + product.src2}
                        className="imge2 card-img-top rounded-3"
                        alt="..."
                      />

                      {/* ---------------------- Discount Badge ---------------------- */}
                      <div className="discound position-absolute">
                        <p>{discound[index]}%</p>
                        <p className="position-absolute text-danger px-1 hotproduct">
                          {discound[index] >= 50 ? "Hot" : ""}
                        </p>
                      </div>

                      {/* ---------------------- Product Action Icons (Wishlist, Cart, View) ---------------------- */}
                      <div className="procucticons text-center fs-6 position-absolute">
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
                          className="fa fa-eye"
                          onClick={(e) => {
                            handel_product_page(e, product.id);
                          }}
                        ></i>
                      </div>

                      {/* ---------------------- Product Details ---------------------- */}
                      <div className="card-body">
                        <p className="product_category">{product.category}</p>
                        <h6 className="card-title">{product.name}</h6>

                        {/* ---------------------- Product Rating ---------------------- */}
                        <div className="rating">
                          {Array(Math.floor(product.rating))
                            .fill(<i className="far fa-star"></i>)
                            .map((star) => {
                              return star;
                            })}
                        </div>

                        {/* ---------------------- Product Prices (Before & After Discount) ---------------------- */}
                        <p className="product_prices text-danger fs-5 fw-medium">
                          {product.priceAfterDiscount.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                          <span>
                            {product.priceBeforeDiscount.toLocaleString(
                              "en-US",
                              { style: "currency", currency: "USD" }
                            )}
                          </span>
                        </p>

                        {/* ---------------------- Button to Navigate to Cart ---------------------- */}
                        <button
                          className="border-0 text-center mx-auto justify-content-center d-block go_to_card_button"
                          onClick={(e) => {
                            handel_cart_product(e, product.id);
                          }}
                        >
                          GO TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSideBar;
