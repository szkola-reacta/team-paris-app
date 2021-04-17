import React from 'react';
import { List, Text } from '@chakra-ui/react'

import CopyrightText from './CopyrightText';
import FooterLogos from './FooterLogos';
import { logoAgada, logoBooking, logoKayak, logoPriceline, logoOpentable, logoRentalcars }from './images/images';

function FooterBottom() {
    return(
        <>
        <CopyrightText/>
        <Text fontSize='0.8em' textAlign='center'>
        Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
        </Text>
        <List display='flex' justifyContent='space-around' py='20px'>
        <FooterLogos logos={[
            { path:logoAgada, alt:''},
            { path:logoBooking, alt:''},
            { path:logoKayak, alt:''},
            { path:logoOpentable, alt:''},
            { path:logoPriceline, alt:''},
            { path:logoRentalcars, alt:''}
        ]}/>
</List>
        </>
    );
}

export default FooterBottom;