import React, { useContext, useEffect } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../context/RestaurantContext";

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext)
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data[0].name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      List all the restaurant
    </div>
  );
};

export default RestaurantList;
