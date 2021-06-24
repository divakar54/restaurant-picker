import React from "react";
import { Box, Flex } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import './headerStyle.css'
const Header = () => {
  return (
    <div className="header">
      <Box fontSize="2xl" margin='auto' textAlign='center'>
      <header>
        <Flex justifyContent="space-between">
          <Link to='/'>
            <h1 className="navbar-title">Restaurant Finder</h1>
          </Link> 
          <nav>
            <ul className="navbar">
              <Flex justifyContent="space-between" >
                <li>Log In</li>
                <li>Sign up</li>
              </Flex>
            </ul>
          </nav>
        </Flex>
      </header>
      </Box>
    </div>
  );
};

export default Header;
