import React, { useContext, useEffect } from "react";
import  {RestaurantURL}  from "../apis/RestaurantFinder";
import { RestaurantContext } from "../context/RestaurantContext";
import DisplayRestaurant from '../components/DisplayRestaurant.js';
import { Flex, Box } from "@chakra-ui/layout";

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantURL.get("/");
        setRestaurants(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Flex justifyContent="center">
    <Box >
      {
        restaurants
            .map(rest => 
              <DisplayRestaurant 
                          className='container'
                          key={rest._id} 
                          name={rest.name} 
                          location={rest.location} 
                          price={rest.price}
              />)
      }
    </Box>
    </Flex>
  );
};

export default RestaurantList;
