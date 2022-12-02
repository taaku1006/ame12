import React from "react";
import { Wrap,WrapItem} from '@chakra-ui/react' 
import {Card} from "../organisms/Card/Card";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <Wrap p={{ base: 4, md: 10 }}>
            <WrapItem >
                <Link to="./page1">
                    <Card imageURL="weather.png" dataname="Rainfall"/>
                </Link>
            </WrapItem>
            <WrapItem >
                <Link to="./page2">
                    <Card imageURL="kion.jpg" dataname="Temperature"/>
                </Link>
            </WrapItem>
        </Wrap>
    );
};

export default Home;