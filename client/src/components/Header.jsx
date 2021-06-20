import React from "react";
import { Box } from '@chakra-ui/react'
const Header = () => {
  return (
    <div className="header">
      <header>
        <Box fontSize="6xl" margin='auto' textAlign='center'>
          <h1>Restaurant Finder</h1>
        </Box>
      </header>
    </div>
  );
};

export default Header;
