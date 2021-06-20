import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./routes/Home";
import RestaurantDetail from "./routes/RestaurantDetail";
import AddPage from "./routes/AddPage";
import './styles.css';
import { RestaurantContextProvider } from "./context/RestaurantContext";
import {ChakraProvider} from '@chakra-ui/react'
import OrderPage from "./components/OrderPage";

const App = () => {
  
  
  return (
    <ChakraProvider>
      <RestaurantContextProvider>
        <div >
          <Router>
              <Switch>
                <Router exact path='/orders'>
                  <OrderPage />
                </Router>
                <Route exact path='/restaurants/add'>
                  <AddPage />
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
