import React from 'react';
import {Box} from "@chakra-ui/react";

import PropertyPreview from "./PropertyPreview";

function PropertyList({properties}) {

    const content = properties.map((el, i) => {
        return (<PropertyPreview key={`prop-${i}`} property={el}/>)
    });

    return (
        <Box w="750px">{content}</Box>
    )
}

export default PropertyList;