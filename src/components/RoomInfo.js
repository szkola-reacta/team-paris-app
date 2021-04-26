import React from 'react';
import {Flex, Text, Box} from "@chakra-ui/react";
import {FaUserAlt} from 'react-icons/fa';

function RoomInfo({property}) {

    const guests = [];

    for (let i = 0; i < property.rooms[0].guests; i++) {
        guests.push(<FaUserAlt key={`guest-${i}`} size="14px"/>)
    }
    return (
        <Box w="330px" h="100%">
            <Flex>
                <Text fontSize="sm" fontWeight="semibold" marginRight="5px"> {property.rooms[0].type}</Text>
                {guests}
            </Flex>
            <Text fontSize="sm">{property.rooms[0].bathroom ? "with bathroom" : null}</Text>
            <Text fontSize="sm" fontWeight="semibold"
                  color="green">{property.rooms[0].breakfast ? "Breakfast included" : null}</Text>
            <Text fontSize="sm" fontWeight="semibold"
                  color="darkred">{property.rooms[0].available === 1 ? "Only 1 left at our site" : null}</Text>
        </Box>
    )
}

export default RoomInfo;