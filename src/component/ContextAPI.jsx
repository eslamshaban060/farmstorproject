// !!!!!!!!!!!!!!!!!!!!!!!!!!! Context API !!!!!!!!!!!!!!!!!!!!!!!
/*
    this for provide all project with data 
*/

// ======================= importing elements ====================

import React, { Children, createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { Giting_data } from "./AppReducer";

// -------------- variravles --------------------------
export const ContextProvider = createContext();

// ============== Main funtion to provide the app with data =========

const ContextAPI = ({ children }) => {
  // -------------------- creating state with reduce ---------------
  const [state, dispatch] = useReducer(AppReducer, Giting_data());

  return (
    <ContextProvider.Provider
      value={{
        dispatch: dispatch,
        User: state.User,
        Article: state.Article,
        Comments: state.Comments,
        Product: state.Product,
        ProductComments: state.ProductComments,
        CartProducts: state.CartProducts,
        LoveProducts: state.LoveProducts,
        DleteProduct: state.DleteProduct,
        Totalprice: state.Totalprice,
        EmpityCard: state.EmpityCard,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextAPI;

export const Usedata = () => {
  return useContext(ContextProvider);
};
