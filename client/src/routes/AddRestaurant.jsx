import React from "react";
import AddRestaurant from "../components/AddRestaurant";
import { Link } from "react-router-dom";
import {Button, Box, Flex, Text} from '@chakra-ui/react';
const UpdatePage = () => {
  return (
        <div>
          <Box m="11em" >
            <Flex direction='column' flexWrap= 'wrap' alignContent= 'space-around'>
            <AddRestaurant />
              {/* <button onClick={() => {
              history.push('/');
            }}>Go Back Home</button> */}
            <Link to='/'>
            <Button ml="6" colorScheme='blue' mt={2} mb={2}>Go Back Home</Button>
            </Link>
            </Flex>
          </Box>
        </div>
  )
};

export default UpdatePage;
