import React from 'react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import Navbar from './src/Components/Navbar';


function Profile() {
    return (
        <VStack>
            <HStack>
                <Navbar header="Profile" />
            </HStack>
        </VStack>
    )
}
