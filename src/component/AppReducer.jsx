// !!!!!!!!!!!!!!!!!!!!!!!!! APP REDUCER FUNCTION !!!!!!!!!!!!!!

/*
    to make alot of cases by using it and to save data in local storage 

*/

// ========================== importing elements =====================

import React from "react";

// ----------------------- initalization value ----------------------

export const Initialzation = {
  // ---------------- intial user ----------------------
  User: null || { loginstat: true },

  User: null || { loginstat: false },

  // --------------- intial article ------------------
  Article: {
    id: 1,
    category: null,
    author: null,
    date: null,
    title: null,
    description: null,
    image: null,
  },

  // ------------ intial article comment -----------------
  Comments: [
    {
      image: "/assets/blogs/commint.webp",
      name: "eslam shaban",
      commint:
        "The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.",
      id: 1,
    },
  ],

  // ------------ intial product comment -----------------
  ProductComments: [
    {
      image: "/assets/blogs/commint.webp",
      name: "elsam shaban",
      rating: 5,
      commint:
        "The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions. There are few plugins and apps available for this purpose, many of them required a monthly subscription.",
      id: 1,
    },
  ],

  // --------------- intial product -------------
  Product: {
    id: 29,
    name: "Tasty Fresh Oranges",
    category: "Snacks",
    priceBeforeDiscount: 70,
    priceAfterDiscount: 40,
    src: "assets/storeimge/stor (56).jpeg",
    src2: "assets/storeimge/stor (57).jpeg",
    rating: 4.2,
    des1: `Delicious Non-Dairy cheese sauce`,
    des2: `Vegan & Allergy Friendly`,
    des3: `Smooth, velvety Dairy free cheese sauce`,
  },

  // --------------- cart products -------------
  CartProducts: [],

  // --------------- love products -------------
  LoveProducts: [],

  // --------------- delet produt ----------
  DleteProduct: null,
  // --------------- delet produt ----------
  Totalprice: {
    originalprice: 0,
    totalprice: 0,
  },

  //   to make card empity
  EmpityCard: [],
};

// ----------------- to Giting_data from local storage -------------

export const Giting_data = (newState) => {
  const data = localStorage.getItem("storagedata");
  return data ? JSON.parse(data) : Initialzation;
};

// -------------------------- to Storage data in local storage -------------

const Storage_data = (newState) => {
  localStorage.setItem("storagedata", JSON.stringify(newState));
};

const AppReducer = (state, action) => {
  switch (action.type) {
    // ---------------- to handel user --------------------

    case "USER_CASE":
      const newState = {
        ...state,
        User: action.iteam,
      };
      Storage_data(newState);
      return newState;

    // ------------------------- to handel article -------------
    case "TOTAL_PRICE":
      const newState10 = {
        ...state,
        Totalprice: action.iteam,
      };
      Storage_data(newState10);
      return newState10;

    // ------------------------- to handel article -------------
    case "ARTICLE_CASE":
      const newState1 = {
        ...state,
        Article: action.iteam,
      };
      Storage_data(newState1);
      return newState1;

    // ---------------------- to handel article comment -----------
    case "COMMINT_CASE":
      const newState2 = {
        ...state,
        Comments: Array.isArray(state.Comments)
          ? [...state.Comments, action.iteam]
          : [action.iteam],
      };

      Storage_data(newState2);
      return newState2;

    // ---------------------- to handel LOVE productS -----------
    case "PRODUCT_LOVE_CASE":
      const isItemInLove = state.LoveProducts.some(
        (product) => product.id === action.iteam.id
      );

      const updatedLoveProducts = isItemInLove
        ? state.LoveProducts.filter((product) => product.id !== action.iteam.id)
        : [...state.LoveProducts, action.iteam];

      const newState6 = {
        ...state,
        LoveProducts: updatedLoveProducts,
      };

      Storage_data(newState6);
      return newState6;

    // ---------------------- to handel CART productS -----------
    case "PRODUCT_CART_CASE":
      const newState5 = {
        ...state,
        CartProducts: Array.isArray(state.CartProducts)
          ? [...state.CartProducts, action.iteam]
          : [action.iteam],
      };

      Storage_data(newState5);
      return newState5;

    // ---------------------- to handel product comment -----------
    case "PRODUCT_COMMINT_CASE":
      const newState4 = {
        ...state,
        ProductComments: Array.isArray(state.ProductComments)
          ? [...state.ProductComments, action.iteam]
          : [action.iteam],
      };

      Storage_data(newState4);
      return newState4;

    // --------------------- to handel open produt -------------------
    case "OPEN_PRODUCT":
      const newState3 = {
        ...state,
        Product: action.iteam,
      };

      Storage_data(newState3);
      return newState3;

    // --------------------- to handel empity card -------------------
    case "EMPITY_CARD":
      const newState11 = {
        ...state,
        CartProducts: action.iteam,
      };

      Storage_data(newState11);
      return newState11;

    // ----------------- delet product ---------------------
    case "DELET_PRODUCT":
      var index = state.CartProducts.findIndex(
        (iteam2) => iteam2.id === action.iteam
      );
      var newBasket = [...state.CartProducts];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      newBasket.sort((a, b) => a.name.localeCompare(b.name));
      const newState7 = {
        ...state,
        CartProducts: newBasket,
      };
      Storage_data(newState7);
      return newState7;

    // ----------- DELET_Iteam i mean delet all product related -------------
    case "DELET_Iteam":
      const newBasket2 = state.CartProducts.filter(
        (iteam2) => iteam2.id !== action.iteam
      );
      newBasket2.sort((a, b) => a.name.localeCompare(b.name));
      const newState8 = {
        ...state,
        CartProducts: newBasket2,
      };
      Storage_data(newState8);
      return newState8;

    // ----------- DELET_Iteam i mean delet all product related -------------
    case "DELET_LOVE":
      const newBasket3 = state.LoveProducts.filter(
        (iteam2) => iteam2.id !== action.iteam
      );
      const newState9 = {
        ...state,
        LoveProducts: newBasket3,
      };
      Storage_data(newState9);
      return newState9;

    // ------------------------ defult case -----------------
    default:
      return state;
  }
};

export default AppReducer;
