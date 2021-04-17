import React from 'react';

import { Button } from '@chakra-ui/react'

function MenuButton({ label }) {
    return (
        <Button
            _hover={{ backgroundColor: 'blue.500' }}
            my={5}
            py={3}
            px={3}
            bg='transparent'
            fontSize='0.8em'
            size='xs'
            color="#fff"
            fontWeight='400'
            border='1px'
            borderColor="#fff"
            borderRadius='3px'
        >
            {label}
        </Button>
    )
}

export default MenuButton;