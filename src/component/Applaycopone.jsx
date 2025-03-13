import React, { useState, useEffect } from "react";
// --------------- to get data from context api ---------
import { Usedata } from "../component/ContextAPI";
import { useNavigate } from "react-router-dom";

const Applaycopone = () => {
  const { CartProducts, dispatch, User } = Usedata();
  const [coponevalue, setcoponevalue] = useState("");
  const navagator = useNavigate();

  const frequency = {};

  CartProducts.forEach((item) => {
    const key = JSON.stringify(item);
    frequency[key] = (frequency[key] || 0) + 1;
  });

  const result = Object.entries(frequency).map(([key, count]) => ({
    item: JSON.parse(key),
    count: count,
  }));

  // total price
  const [totalprice, settotalprice] = useState(0);
  const [originalprice, setoriginalprice] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const applaycopone = (e) => {
    e.preventDefault();
    if (!isCouponApplied) {
      if (coponevalue === "eslam") {
        settotalprice(originalprice * 0.5);
        setIsCouponApplied(true);
        setcoponevalue("");
      }
    }
  };

  useEffect(() => {
    const totalprices = result.reduce((accu, cuurent) => {
      return accu + cuurent.item.priceAfterDiscount * cuurent.count;
    }, 0);
    setoriginalprice(totalprices);
    if (!isCouponApplied) {
      settotalprice(totalprices);
    } else {
      settotalprice(totalprices / 2);
    }
  }, [result, isCouponApplied]);

  const gocheckout = (e, productid) => {
    e.preventDefault();
    if (User.loginstat === true) {
      navagator("/checkout");
    } else {
      navagator("/register");
    }
    dispatch({
      type: "TOTAL_PRICE",
      iteam: {
        originalprice: originalprice,
        totalprice: totalprice,
      },
    });
  };

  return (
    <div>
      <div class="container mt-5">
        <div class="row justify-content-center my-5 ">
          <div className="copone col-md-6 px-4">
            <form
              action=""
              className="row totalprices mb-4"
              onSubmit={(e) => {
                applaycopone(e);
              }}
            >
              <h2 class=" mb-3  text-capitalize">applay copone</h2>
              <input
                type="text"
                value={coponevalue}
                className="mt-2 rounded-5 col-lg-6 me-1 py-1"
                onChange={(e) => {
                  setcoponevalue(e.target.value);
                }}
              />
              <button className=" border-0 col-lg-4 ms-lg-3 text-center me-auto   d-block go_to_card_button go_to_card_button3 py-4 px-2 mt-2  text-uppercase">
                applay copone
              </button>
            </form>
          </div>
          <div class="col-lg-5 col-md-6 totalprices">
            <h2 class=" mb-3">Cart Totals</h2>
            <div class="border rounded p-3">
              <div class="d-flex justify-content-between border-bottom pb-2 mb-2">
                <span class="text-muted">Subtotal</span>
                <span class="text-muted">{totalprice.toFixed(2)}</span>
              </div>
              <div class="d-flex justify-content-between border-bottom pb-2 mb-2">
                <span class="text-muted">Tax</span>
                <span class="text-muted">$30.00</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="text-muted">Total</span>
                <span class=" text-muted">{(totalprice + 30).toFixed(2)}</span>
              </div>
            </div>

            <button
              className=" border-0  text-center me-auto   d-block go_to_card_button go_to_card_button3 py-4 px-4 mt-2  text-uppercase"
              onClick={(e) => {
                gocheckout(e);
              }}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applaycopone;
