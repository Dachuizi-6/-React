import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import { StoreContext } from "./utils/context" // 自己的
import store from "./store"

import { Provider } from "react-redux" // 官方的

ReactDOM.render(
  // <StoreContext.Provider value={store}>
  //   <App />
  // </StoreContext.Provider>
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

