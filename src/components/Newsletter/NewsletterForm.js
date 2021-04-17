import React, { useState } from 'react';
import { Input, Button, Container, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { useForm } from 'react-hook-form'

function NewsletterForm() {

    const onSubmit = (data) => { 
        setIsSubmitted(true)  
        console.log(data) 
    };

    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit } = useForm()
    return (
        <>
            {
                isSubmitted ? (
                        <div>Thank you!</div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Container display='flex' alignItems='center' my={3}>
                        <FormControl id='email'>
                            <Input
                                borderRadius='3'
                                width='100%'
                                color='gray.150'
                                bg="#fff"
                                {...register('email')}
                                type='email' />
                        </FormControl>
                        <Button
                            borderRadius="3"
                            bg='blue.500'
                            width='100'
                            fontWeight='400'
                            px={30} mx={1}
                            isLoading=''
                            type="submit">
                            Subscribe
            </Button>
                    </Container>
                    <FormErrorMessage>
                    </FormErrorMessage>
                </form>
                )
            }
           
        </>
    )
}

export default NewsletterForm;