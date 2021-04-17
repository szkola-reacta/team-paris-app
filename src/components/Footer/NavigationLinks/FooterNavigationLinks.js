import React from 'react';

import { Flex } from '@chakra-ui/react';
import NavigationLinks from './NavigationLinks';


function FooterNavigationLinks() {
    return(
        <Flex justify='space-around' py={5}>
            <Flex direction='column' >
                <NavigationLinks
                items={[
                    {content: 'Countries', to: ''  },
                    {content: 'Regions', to: ''  },
                    {content: 'Cities', to: ''  },
                    {content: 'Districts', to: ''  },
                    {content: 'Airports', to: ''  },
                    {content: 'Hotels', to: ''  },
                ]}
                />
            </Flex>
            <Flex direction='column'>
            <NavigationLinks
                items={[
                    {content: 'Homes', to: ''  },
                    {content: 'Apartments', to: ''  },
                    {content: 'Resorts', to: ''  },
                    {content: 'Villas', to: ''  },
                    {content: 'Hostels', to: ''  },
                    {content: 'Guest houses', to: ''  },
                ]}
                />
            </Flex>
            <Flex direction='column'> 
            <NavigationLinks
                items={[
                    {content: 'Unique place to stay', to: ''  },
                    {content: 'All destinations', to: ''  },
                    {content: 'Discover', to: ''  },
                    {content: 'Reviews', to: ''  },
                ]}
                />
            </Flex>
        </Flex>
    );
}

export default FooterNavigationLinks;