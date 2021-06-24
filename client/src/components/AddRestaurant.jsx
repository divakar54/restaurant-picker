import React, {useState, useEffect} from "react";
import {RestaurantURL} from "../apis/RestaurantFinder";
import {Box, Flex, Button, Text} from '@chakra-ui/react';

const AddRestaurant = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleOnSubmit = async() => {
    
      const res = await RestaurantURL.post('/', {
        name: name,
        location: location,
        price: price,
        image: imageURL
      })
      console.log("hey")
      setName('');
      setPrice('');
      setLocation('');
      setImageURL('');
      console.log(res);
  }
  
  return (
   <div>
     <form onSubmit={e => {
       e.preventDefault();
       
       handleOnSubmit();
     }}>
       <Box mb="2">
       <label htmlFor="Restaurant Name">
         <Text>Restaurant Name</Text>
         <input 
              id="name"
              value={name}
              placeholder="Enter Restaurant Name"
              onChange={(e) => setName(e.target.value)}
         />
       </label>
       </Box>
       <Box mb="2">
        <label htmlFor="Restaurant price">
         <Text>Price for Two</Text>
         <input 
              id="name"
              value={price}
              placeholder="Enter Restaurant Price"
              onChange={(e) => setPrice(e.target.value)}
         />
       </label>
       </Box>
       <Box mb="2">
       <label htmlFor="Restaurant Location">
       <Text>Restaurant Location</Text>
         <input 
              id="name"
              value={location}
              placeholder="Enter Restaurant Location"
              onChange={(e) => setLocation(e.target.value)}
         />
       </label>
       </Box>
       <Box mb="2">
       <label htmlFor="Restaurant Image">
       <Text>Restaurant Image</Text>
         <input 
              id="image"
              value={imageURL}
              placeholder="Enter Restaurant Image URL"
              onChange={(e) => setImageURL(e.target.value)}
         />
       </label>
       </Box>
       <Button colorScheme='blue' type="submit">Submit</Button>
     </form>
   </div>
  );
};

export default AddRestaurant;
