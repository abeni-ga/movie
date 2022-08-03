import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from "@apollo/client";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const token = localStorage.getItem('Token');
const link = new HttpLink({
    uri: "http://localhost:4000/API/V1",
    headers: {
        Authorization: token ? `Bearer ${token}` : "",
    },
});
const client = new ApolloClient({
  uri: 'https://abenimovie.herokuapp.com/api/v1',
  cache: new InMemoryCache()
});
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
