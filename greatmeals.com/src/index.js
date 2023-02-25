import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from "@auth0/auth0-react"
import Context from './context/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
  <Auth0Provider
  domain="dev-doh8up6e43bnm615.us.auth0.com"
  clientId="Of6OHOw0nGMeqhwgbze0nkveV1HVJrAT"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <BrowserRouter>
  <ChakraProvider >

    <App />
    
    </ChakraProvider>
    </BrowserRouter>
    </Auth0Provider>
    </Context>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
