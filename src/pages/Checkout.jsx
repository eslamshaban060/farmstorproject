// !!!!!!!!!!!!!!!!!!!!!!! Checkout page !!!!!!!!!!!!!!!!!!!!

/*
    in this page i will check all my orders and the personal data as acustomer 

*/

// ======================== importing elements ======================

// ------------------- to use react -------------------
import React from "react";

// ------------------- to use header component --------------
import Header from "../component/Header";
import { Usedata } from "../component/ContextAPI";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { CartProducts, Totalprice } = Usedata();
  const { dispatch } = Usedata();
  const goToHome = useNavigate();

  const frequency = {};

  CartProducts.forEach((item) => {
    const key = JSON.stringify(item);
    frequency[key] = (frequency[key] || 0) + 1;
  });

  const result = Object.entries(frequency).map(([key, count]) => ({
    item: JSON.parse(key),
    count: count,
  }));
  const empityYourCard = (e) => {
    e.preventDefault();
    dispatch({
      type: "EMPITY_CARD",
      iteam: [],
    });
    goToHome("/");
  };

  return (
    <div className="checkout">
      <div className="checkout_continer">
        {/* ---------------- header component ----------- */}
        {<Header />}
        <div className="space py-5"></div>

        <div class="container chekoutpage py-5">
          <div class="row">
            <div class="col-md-6">
              <div class=" p-4">
                <h4 class="mb-3">Billing Details</h4>
                <form>
                  <div class="mb-3">
                    <label class="form-label">
                      Country <span class="text-danger">*</span>
                    </label>
                    <select class="w-100 py-2 px-3">
                      <option>United States</option>
                      <option>Egypt</option>
                      <option>Germany</option>
                    </select>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="form-label">
                        First Name <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        c
                        className="checkoutinput w-100 py-2 px-3"
                      />
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label">
                        Last Name <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        c
                        className="checkoutinput w-100 py-2 px-3"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Company Name</label>
                    <input
                      type="text"
                      c
                      className="checkoutinput w-100 py-2 px-3"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">
                      Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      c
                      className="checkoutinput w-100 py-2 px-3"
                      placeholder="Street address"
                    />
                    <input
                      type="text"
                      c
                      className="checkoutinput w-100 mt-4 py-2 px-3 mt-2"
                      placeholder="Apartment, suite, unit etc. (optional)"
                    />
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="form-label">
                        Town / City <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        c
                        className="checkoutinput w-100 py-2 px-3"
                      />
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label">
                        State / County <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        c
                        className="checkoutinput w-100 py-2 px-3"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="form-label">
                        Postcode / Zip <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        c
                        className="checkoutinput w-100 py-2 px-3"
                      />
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label">
                        Email Address <span class="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="checkoutinput w-100 py-2 px-3"
                      />
                    </div>
                  </div>

                  <div class="mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input me-2 mt-2"
                    />
                    <label class="form-check-label">Create an account?</label>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Order Notes</label>
                    <textarea
                      class="checkoutinput w-100 py-2 px-3"
                      rows="3"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>

            <div class="col-md-6 ">
              <div class=" finalorder p-4">
                <h4 class="mb-3">Your Order</h4>
                {result.length >= 1 ? (
                  <table class="table table1 w-50">
                    <tbody>
                      <tr>
                        <td>Product</td>
                        <td class="text-end">Total</td>
                      </tr>
                    </tbody>

                    <tbody>
                      {result.map((product) => {
                        return (
                          <tr>
                            <td className="form-check-label">
                              {product.item.name} × {product.count}
                            </td>
                            <td class="text-end form-check-label">
                              $
                              {(
                                product.item.priceAfterDiscount * product.count
                              ).toFixed(2)}
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="mt-5">
                        <td>Cart Subtotal</td>
                        <td class="text-end">
                          ${Totalprice.totalprice.toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td class="text-end ">$30.00</td>
                      </tr>
                      <tr>
                        <td>Order Total</td>
                        <td class="text-end ">
                          ${(Totalprice.totalprice + 30).toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div>
                    <p className="py-5 text-center">
                      No products in your summary
                    </p>
                  </div>
                )}
                <div class="accordion" id="paymentOptions">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#bankTransfer"
                      >
                        Direct Bank Transfer
                      </button>
                    </h2>
                    <div
                      id="bankTransfer"
                      class="accordion-collapse collapse show"
                      data-bs-parent="#paymentOptions"
                    >
                      <div class="accordion-body">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won’t be shipped until the funds have cleared in our
                        account.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#chequePayment"
                      >
                        Cheque Payment
                      </button>
                    </h2>
                    <div
                      id="chequePayment"
                      class="accordion-collapse collapse"
                      data-bs-parent="#paymentOptions"
                    >
                      <div class="accordion-body">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won’t be shipped until the funds have cleared in our
                        account.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#paypal"
                      >
                        PayPal
                      </button>
                    </h2>
                    <div
                      id="paypal"
                      class="accordion-collapse collapse"
                      data-bs-parent="#paymentOptions"
                    >
                      <div class="accordion-body">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won’t be shipped until the funds have cleared in our
                        account.
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  class="btn orderfinalbutton w-100 mt-3"
                  onClick={(e) => {
                    empityYourCard(e);
                  }}
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
