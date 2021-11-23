import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Splash from './pages/Splash'
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import WomenCatalog from './pages/WomenCatalog';
import Checkout from './pages/Checkout';
import ConfirmationPage from './pages/Confirmation';
import Payment from './pages/Payment';
import { StoreProvider } from "./utils/GlobalState.js";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const PORT = process.env.PORT || 4000;

const httpLink = createHttpLink({
  // uri: `/graphql`,
  uri: `http://localhost:${PORT}/graphql`,
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
          <div>
            <StoreProvider>
              <Nav />
              <Switch>
                <Route exact path="/" component={Splash} />
                <Route path="/home" component={Homepage} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route exact path="/catalog-women" component={WomenCatalog} />
                <Route path="/proceed-to-checkout" component={Checkout} />
                <Route path="/pay" component={Payment} />
                <Route path="/confirmation" component={ConfirmationPage} />
              </Switch>
              <Footer />
            </StoreProvider>
          </div>
        </Router>
      </ApolloProvider>
    </div>

  );
}

export default App;
