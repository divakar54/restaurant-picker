import React from "react";
// import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";
import { Link, withRouter } from "react-router-dom";
import { Button, Box, Flex } from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons";
const Home = () => {

  return (
    <div> 
      <RestaurantList />
      <Box m="2">
        <Flex justifyContent="center">
          <Link to='/restaurants/add' >
                <Button m="2" colorScheme='blue'>Add Restaurant</Button>
          </Link>
          <Link to='/order/add'>
            <Button rightIcon={<ArrowForwardIcon />} m="2" colorScheme='blue'>Order Food</Button>
          </Link>
        </Flex>
      </Box>
    </div>
  );
};

export default withRouter(Home);
