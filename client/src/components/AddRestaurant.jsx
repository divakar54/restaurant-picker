import React, {useState, useEffect} from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import {Box, Flex} from '@chakra-ui/react';
const AddRestaurant = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');

  const handleOnSubmit = async() => {
      const res = await RestaurantFinder.post('/', {
        name: name,
        location: location,
        price: price
      })
      setName('');
      setPrice('');
      setLocation('');
      console.log(res);
  }

  return (
   <div>
     <form onSubmit={e => {
       e.preventDefault();
       handleOnSubmit();
     }}>
       <Box>
       <label htmlFor="Restaurant Name">
         Restaurant Name
         <input 
              id="name"
              value={name}
              placeholder="Enter Restaurant Name"
              onChange={(e) => setName(e.target.value)}
         />
       </label>
       </Box>
       <Box>
       <label htmlFor="Restaurant price">
         Price for Two
         <input 
              id="name"
              value={price}
              placeholder="Enter Restaurant Price"
              onChange={(e) => setPrice(e.target.value)}
         />
       </label>
       </Box>
       <Box>
       <label htmlFor="Restaurant Location">
         Restaurant Location
         <input 
              id="name"
              value={location}
              placeholder="Enter Restaurant Location"
              onChange={(e) => setLocation(e.target.value)}
         />
       </label>
       </Box>
       <button style={{margin : '10px'}}>Submit</button>
     </form>
   </div>
  );
};

export default AddRestaurant;
