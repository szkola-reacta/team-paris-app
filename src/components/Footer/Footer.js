import React from 'react';
import { Box } from '@chakra-ui/react';

import Newsletter from '../Newsletter/Newsletter';
import TopMenu from './TopMenu/TopMenu';
import FooterNavigationLinks from './NavigationLinks/FooterNavigationLinks';
import FooterBottom from './FooterBottom/FooterBottom'

function Footer() {
    return (
        <>
            <Box >
                <Newsletter />
                <TopMenu/>
                <FooterNavigationLinks/>
                <FooterBottom/>
            </Box>
        </>
    )
}

export default Footer;