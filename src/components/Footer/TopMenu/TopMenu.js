import React from 'react';

import { Box, Flex } from '@chakra-ui/react';
import MenuButton from './MenuButton';
import MenuLinks from './MenuLinks';



function TopMenu() {
    return (
        <>
            <Box bg='blue.600'>
                <Flex justify='center' borderBottom='1px' borderBottomColor='blue.400'>
                    <MenuButton label="List your property" />
                </Flex>
                <Flex justify='center'>
                    <MenuLinks
                    items= {[
                        {content: 'Mobile version', to: ''  },
                        {content: 'Your account', to: ''  },
                        {content: 'Make changes to your booking online', to: ''  },
                        {content: 'Contact Customer Service', to: ''  },
                        {content: 'Become an affiliate', to: ''  },
                    ]}
                    />
                </Flex>
            </Box>
        </>
    )
}

export default TopMenu;