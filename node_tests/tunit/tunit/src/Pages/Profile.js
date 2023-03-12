import React from 'react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import '../css/Navbar.css'
import '../css/fuzz.css'
import '../css/Profile.css'
import { NavLink } from 'react-router-dom';
import useFetch from "react-fetch-hook";



// will add ability to add photos if time allows
const firstName ="John"
const lastName ="Doe"
const emailAddr ="johndoe@email.com"
const authFormat = "Apple Music"
function Profile() {

    const { isLoading, error, rawData } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
        );
        if (isLoading) return "Loading...";
        if (error) return "Error";
    
    
       const rawDataStringify = JSON.stringify(rawData, null, 2);
       let name = rawDataStringify['name'];

    //stopping for the night; pickup at: https://www.w3schools.com/js/js_json_stringify.asp

    return (
        <>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <nav>
                <NavLink to="/">
                    <h2>
                        ← Home
                    </h2>
                </NavLink>
            </nav>
            <VStack>
                <p></p>
                <h3>Name</h3>
                <p>{name[0]}</p>
                <br></br>
                <h3>Email</h3>
                <p> {emailAddr}</p>
                <br></br>
                <h3>Privacy</h3>
                <p>
                    Signed in with {authFormat}
                </p>
                <br>
                </br>
                <button>
                    Deauth {authFormat}
                </button>
                <br>
                </br>
                <button>
                    Delete Account
                </button>
            </VStack>
        </>
    )
}

export default Profile;