import React from "react";
import AddRestaurant from "../components/AddRestaurant";
import { Link } from "react-router-dom";
import {Button, Box, Flex, Text} from '@chakra-ui/react';
const UpdatePage = () => {
  return (
        <div>
          <Box >
            <Flex direction='column'>
            <AddRestaurant />
            <Text>Restaurant Update Page</Text>
            {/* <button onClick={() => {
              history.push('/');
            }}>Go Back Home</button> */}
            <Link to='/'>
            <Button colorScheme='blue' mt={2} mb={2}>Go Back Home</Button>
            </Link>
            </Flex>
          </Box>
        </div>
  )
};

export default UpdatePage;
