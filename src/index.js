import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, InMemoryCache } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// apollo client request 
const client = new ApolloClient({
  uri: 'https://api.graphql.jobs',
  cache: new InMemoryCache()
});

// apollo provider wrapped
ReactDOM.render(<ApolloProvider client={client}> <App /></ApolloProvider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();