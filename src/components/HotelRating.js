import React from 'react';
import {Flex, Text, Square} from "@chakra-ui/react";

function HotelRating({property}) {

    let scoringText = "";

    let ratingSystem = {
        2: "Poor",
        4: "Average",
        6: "Fair",
        8: "Good",
        9: "Very Good",
        10: "Fabulous"
    };

    for (let el of Object.keys(ratingSystem)) {
        if (property.score < Number(el)) {
            scoringText = ratingSystem[el];
            break;
        }
    }

    return (
        <Flex justifyContent="flex-end" w="150px" h="100%">
            <Text paddingRight="5px">{scoringText}</Text>
            <Square borderRadius="5px 5px 5px 0"
                    size="36px"
                    bgColor="navy"
                    color="white">{property.score}</Square>
        </Flex>
    )
}

export default HotelRating;