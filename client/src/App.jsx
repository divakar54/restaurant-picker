import { ChakraProvider } from '@chakra-ui/react';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddOrders from "./components/AddOrders";
import ShowOrders from "./components/ShowOrders";
import { RestaurantContextProvider } from "./context/RestaurantContext";
import AddRestaurant from "./routes/AddRestaurant";
import Home from "./routes/Home";
import RestaurantDetail from "./routes/RestaurantDetail";
import './styles.css';
import Header from './components/Header';
const App = () => {
  
  return (
    <ChakraProvider>
      <RestaurantContextProvider>
        <div >
          <Router>
            <Header />
              <Switch>
                <Route exact path='/order/add'>
                  <AddOrders />
                </Route>
                <Route exact path='/orders'>
                  <ShowOrders />
                </Route>
                <Route exact path='/restaurants/add'>
                  <AddRestaurant />
                </Route>
                <Route exact path='/restaurants/:id'>
                  <RestaurantDetail />
                </Route>
                <Route exact path='/'>
                  <Home />
                </Route>
              </Switch>
          </Router>
        </div>
      </RestaurantContextProvider>
    </ChakraProvider>
  );
};
export default App;
