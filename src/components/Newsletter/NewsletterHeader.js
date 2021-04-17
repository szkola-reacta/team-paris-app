import { Heading, Text } from '@chakra-ui/react';

function NewsletterHeader() {
    return (
        <>
            <Heading as='h2' fontSize='1.5em' fontWeight='400' lineHeight='1.5em' >
                Save time, save money!
            </Heading>
            <Text color='gray.100' lineHeight='1.25em'>
                Sign up and we'll send the best deals to you
            </Text>
        </>
    )
}

export default NewsletterHeader;