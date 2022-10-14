import React,{useState,useEffect} from 'react'
import App from './App'
import store from './store'
import {Provider} from 'react-redux'
import { StrictMode} from "react";
import ReactDOM from "react-dom";
import {ApolloClient,ApolloProvider,InMemoryCache, createHttpLink} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
const rootElement = document.getElementById("root");

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


ReactDOM.render(
     <StrictMode>
        <Provider store={store}>
            <ApolloProvider client={client}>
              <App/>
            </ApolloProvider>
        </Provider>
     </StrictMode>,
  rootElement
);

