import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import usersReducer from "./features/Users";
import App from "./app";

//

//

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

//

//

//

const Redux = () => {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <App />
      </div>
    </Provider>
  );
};

export default Redux;
