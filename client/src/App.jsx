import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import RestaurantDetail from "./routes/RestaurantDetail";
import UpdatePage from "./routes/UpdatePage";
import { RestaurantContextProvider } from "./context/RestaurantContext";
const App = () => {
  return (
    <RestaurantContextProvider>
      <div className="container">
        <Router>
            <Switch>
              <Route exact path='/restaurants/:id/update'>
                <UpdatePage />
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
  );
};
export default App;
