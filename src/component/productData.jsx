// ================== Product Data Component ==================

// =============== Importing Required Modules ===============
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Usedata } from "../component/ContextAPI";
import { Products } from "./Stordata";
import { toast } from "react-hot-toast";

// =================== ProductData Component ====================
const ProductData = () => {
  // --------------- Fetch Product Data from Context --------------
  const { Product, dispatch } = Usedata();
  const goToCartdl = useNavigate();

  const goToCartd = (e) => {
    e.preventDefault();
    goToCartdl("/cart");
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

  return (
    <div>
      <div className="main rounded-4 px-3">
        <div className="row bg-white rounded-3 py-5 ">
          {/* Product Image Section */}
          <div className="col-md-5 text-center">
            <img
              src={Product.src}
              alt={Product.name}
              className="img-fluid rounded"
              style={{ maxHeight: "350px" }}
            />
          </div>

          {/* Product Details Section */}
          <div className="col-md-7 ">
            <div className="product_details container ">
              <h4 className="product_details_title">{Product.name}</h4>
              <p className="text-muted">Category: {Product.category}</p>
            </div>

            {/* Product Description and Pricing */}
            <div className="pt-3 pb-2 about_product">
              {/* Product Rating */}
              <p>
                {[...Array(5)].map((_, i) =>
                  i < Math.floor(Product.rating) ? (
                    <FaStar key={i} className="text-warning" />
                  ) : (
                    <FaRegStar key={i} className="text-secondary" />
                  )
                )}{" "}
                ({Product.rating})
              </p>

              {/* Product Price */}
              <h3 className="text-danger">${Product.priceAfterDiscount}.00</h3>
              <p className="text-muted text-decoration-line-through">
                ${Product.priceBeforeDiscount}.00
              </p>

              {/* Product Features */}
              <ul className="product-show-describe">
                <li>{Product.des1}</li>
                <li>{Product.des2}</li>
                <li>{Product.des3}</li>
              </ul>
            </div>

            <div className="mt-3  row ps-2">
              {/* Action Buttons */}
              <div className="col-5 product_go_tocard">
                <button
                  className=" border-0  text-center mx-auto  justify-content-center d-block go_to_card_button  go_to_card_button3  go_to_card_button33  py-3 "
                  onClick={(e) => {
                    handel_cart_product(e, Product.id);
                  }}
                >
                  ADD TO CART
                </button>
              </div>
              {/* Action Buttons */}
              <div className="col-5 product_go_tocard">
                <button
                  className=" border-0  text-center mx-auto  justify-content-center d-block go_to_card_button go_to_card_button3 py-3 px-4"
                  onClick={goToCartd}
                >
                  GO TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
