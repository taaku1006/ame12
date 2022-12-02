import { Box,Heading,Flex, useDisclosure} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";
import {MenuIconButton} from "../../atoms/Button/menuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header = () => {
    const{isOpen,onOpen,onClose} = useDisclosure();
    
    return (
        <>
        <Flex as= "nav" bg="teal" color="white" align="center" justify="space-between" padding={{base: 4,md: 5}}>
            <Flex align="center" as="a" mr={3} _hover={{ cursor: "pointer"}}>
                <Link to="./">
                    <Heading as="h1" fontSize={{base:"md" ,md:"lg"}}>
                        Home
                    </Heading>
                </Link>    
            </Flex>
            <Flex align="center"  fontSize="sm" flexGrow={2} display={{base: "none",md: "flex"}}>
                <Box pr={4}>
                    <Link to ="./page1" >Rainfall</Link>
                </Box>
                    <Link to ="./page2">Temp</Link>
            </Flex>
            <MenuIconButton onOpen={onOpen} />
        </Flex>
        <MenuDrawer onClose={onClose} isOpen={isOpen}/>
        </>
    )
};

