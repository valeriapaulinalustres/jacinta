import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { store } from "./app/store";
import { Provider } from "react-redux";
import {configureStore} from '@reduxjs/toolkit';
import productsReducer, { productsFetch } from './features/products/productsSlice'
import {productsApi} from "./features/products/productsApi"


const store = configureStore({
  reducer:{
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
  
  
})

store.dispatch(productsFetch())

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
