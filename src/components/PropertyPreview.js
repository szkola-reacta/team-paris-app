import React from 'react';
import {Flex, Image} from "@chakra-ui/react";
import {HotelInfo, HotelRating, RoomInfo, RoomCost} from "../components";

function PropertyPreview({property}) {

    return (
        <Flex padding="16px" margin="10px" border="1px solid gray" borderRadius="10px">
            <Image
                boxSize="200px"
                objectFit="cover"
                src={property.image}
                alt="hotel photo"
                fallbackSrc="https://via.placeholder.com/200"
            />
            <Flex textAlign="left" bgColor="white" h="200px" paddingLeft="16px" flexWrap="wrap">
                <Flex w="100%" h="100px">
                    <HotelInfo property={property}/>
                    <HotelRating property={property}/>
                </Flex>
                <Flex w="100%" h="100px">
                    <RoomInfo property={property}/>
                    <RoomCost property={property}/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default PropertyPreview;
