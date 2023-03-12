import React from 'react';
import placeholder from './images/placeholder.jpg'
import { Stack, HStack } from '@chakra-ui/react'

// import { Stack, HStack, VStack } from '@chakra-ui/react'

function Navbar() {
    return (
        <HStack className='container'>
            <h1>
                Today's Recommendations
            </h1>
            <a href="./Profile.js">
                <img className='circle resize' src={placeholder} />
            </a>
        </HStack>
    )
    
}

export default Navbar;