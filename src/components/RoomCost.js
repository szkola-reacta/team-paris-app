import React from 'react';
import {Text, Link, Box} from "@chakra-ui/react";

function RoomCost({property}) {

    return (
        <Box textAlign="right" w="150px" h="100%" bgColor="white">
            <Text fontSize="lg"> {property.rooms[0].price} PLN</Text>
            <Text fontSize="sm" paddingBottom="16px">includes taxes</Text>
            <Box h="32px"
                 w="100%"
                 borderRadius="5px"
                 lineHeight="32px"
                 bgColor="steelblue"
                 color="white"
                 textAlign="center"
                 _hover={{bgColor: "navy", textDecoration: "none"}}>
                <Link _hover={{textDecoration: "none"}}>See availability ></Link>
            </Box>
        </Box>
    )
}

export default RoomCost;