import React from 'react';
import {HiStar} from 'react-icons/hi';
import {Flex, Link, Box, Heading} from "@chakra-ui/react";

function HotelInfo({property}) {

    const stars = [];
    for (let i = 0; i < property.stars; i++) {
        stars.push(<HiStar key={`star-${i}`} size="24px" color="#febd3c"/>)
    }

    return (
        <Box w="330px" h="100%" flexWrap="wrap">
            <Flex>
                <Heading isTruncated={true} color="steelblue" fontSize="2xl" marginRight="5px">
                    <Link>{property.name}</Link>
                </Heading>
                {stars}
            </Flex>
            <Box fontSize="sm">
                <Link>{property.address.district}, {property.address.city} - Show on map</Link>
            </Box>
        </Box>
    )
}

export default HotelInfo;