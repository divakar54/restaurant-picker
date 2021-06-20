import React from "react";
import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";
import { Link, withRouter } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react"
const Home = () => {

  return (
    <div>
      <Header />
      <RestaurantList />
      <Link to='/restaurants/add' >
            <Button colorScheme='blue'>Add Restaurant</Button>
      </Link>
    </div>
  );
};

export default withRouter(Home);
