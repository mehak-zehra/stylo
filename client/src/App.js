import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import WomenCatalog from './pages/WomenCatalog';
import Checkout from './pages/Checkout';
import ConfirmationPage from './pages/Confirmation';
import Payment from './pages/Payment';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (

    <div>
      <ApolloProvider client={client}>
        <Router>
          <Nav isLoggedIn={true} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/catalog-women" component={WomenCatalog} />
            <Route exact path="/proceed-to-checkout" component={Checkout} />
            <Route exact path="/pay" component={Payment} />
            <Route exact path="/confirmation" component={ConfirmationPage} />
          </Switch>
          <Footer />
        </Router>
      </ApolloProvider>
    </div>

  );
}

export default App;
