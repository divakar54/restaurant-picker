import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
const RestaurantDetail = () => {
  const location = useLocation();
  const {name, rlocation, price} = location.state;
  return(
    <div>
      <p>{name}</p>
      <p>{rlocation}</p>
      <p>{price}</p>
      <Link to='/' >
            <Button colorScheme='blue'>Home</Button>
      </Link>
    </div>
  )
};

export default RestaurantDetail;
