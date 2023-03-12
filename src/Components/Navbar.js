import '../css/Navbar.css';
import React, {Component} from 'react';
import placeholder from '.././images/person.crop.circle.svg'
import add from '.././images/plus.app.svg'
import { Stack, HStack } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
// import { Stack, HStack, VStack } from '@chakra-ui/react'

function Navbar(props, showPic = true) {

    return (
        <HStack className='container'>
            <h1>
                {props.header}
            </h1>
            <nav>
                <NavLink to="/addSong">
                    <img alt='' className='resize' src={add} />
                </NavLink>
                <NavLink to="/profile">
                    <img alt='' className='circle resize' src={placeholder} />
                </NavLink>
            </nav>
        </HStack>
    )
    
}

export default Navbar;