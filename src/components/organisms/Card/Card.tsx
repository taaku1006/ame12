import React from 'react';
import {memo,FC} from "react";
import {Box, Stack,Image,Text } from '@chakra-ui/react'

type Props ={
    imageURL: string;
    dataname: string;
};

export const Card:FC<Props> = memo((props)=>{
    const {imageURL,dataname} = props;
    return(
        <Box w="260px" h="260px" bg="white" borderRadius="10px" box-shadow="md" p="4" _hover={{ cursor:"pointer",opacity:0.8}}>
            <Stack textAlign="center">
                <Image borderRadius="full" boxSize="160px" src={imageURL} alt={dataname} m="auto"></Image>
                <Text fontSize="25px" fontWeight="bold">{dataname}</Text>
            </Stack>
        </Box>
        
    )
}) 

