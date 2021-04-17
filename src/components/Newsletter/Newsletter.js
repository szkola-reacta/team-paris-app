import React from 'react';
import { Box  } from '@chakra-ui/react'

import NewsletterHeader from './NewsletterHeader';
import NewsletterForm from './NewsletterForm';


function Newsletter() {
 
    return (
        <>
            <Box boxSizing='border-box' display='flex' flexDirection='column' alignItems='center' bg='blue.700' color='#fff' py={50}>
              <NewsletterHeader/>
               <NewsletterForm/>
            </Box>
        </>
    )
}

export default Newsletter;