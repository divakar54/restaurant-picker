import React from 'react'
import {Box,  Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
 const DisplayRestaurant = (props) => {
    
    return (
        <div>
            
            <Box 
                maxW="md" 
                fontSize="2xl" 
                backgroundColor="gray.200" 
                p="6" 
                borderRadius="base">
                
                    <Image src='https://bit.ly/2Z4KKcF' alt="butrger phoyo" borderRadius="base"/>
                
                <Box  
                    textTransform="uppercase"
                    fontFamily="system-ui"
                    fontWeight="normal"
                    p="2">

                    <Box fontWeight="semibold">
                    <Link to={
                        {
                            pathname :`/restaurants/${props.name}`, 
                            state : {name : props.name, rlocation : props.location, price : props.price}
                        }
                    }
                    >
                        <p>{props.name}</p>
                    </Link>
                    </Box>
                    <p>{props.location}</p>
                    <p>{props.price}</p>
                </Box>
            </Box>
        </div>
    )
}

export default DisplayRestaurant;
