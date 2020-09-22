import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import Applloclient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new Applloclient({
  uri: "http://localhost:4444/graphql"
})

ReactDOM.render(
<ApolloProvider client={ client }>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

