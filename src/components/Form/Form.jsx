import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, Flex, Box } from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FormHeader, CustomInput, SelectInput, TextareaInput, CustomButton } from '../index.js';

import ConfirmationPage from '../../pages/ConfirmationPage/ConfirmationPage.jsx';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'First name must be at least 3 characters long.')
    .max(20, 'First name must be up to 20 characters long.')
    .required('Required.'),
  lastName: yup.string().required('Required.'),
  email: yup.string().email('Invalid email address.').required('Required.'),
  selectSubject: yup.string().oneOf(['general', 'booking-a-room', 'payments', 'technical-issues'], 'Please select subject.').required(),
  textareaDescription: yup.string().required('You need to describe your problem.'),
});

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  selectSubject: '',
  textareaDescription: '',
};

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isSubmitting } = formState;

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsSubmitted(true);
        reset({ ...defaultValues });
        resolve(alert(JSON.stringify(data, null, 2)));
      }, 3000);
    });
  };

  return (
    <Router>
      {isSubmitted ? <Redirect to='/contact-form/confirmation-page' /> : <Redirect to='/contact-form' />}
      <Box height='100%' boxSizing='border-box' my={!isSubmitted ? '1em' : '0'}>
        <Switch>
          <Route path='/contact-form' exact>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Container border='1px solid #c6c6c6' borderRadius='lg' height='auto'>
                <FormHeader />
                <Flex flexDirection='column'>
                  <CustomInput
                    label='firstName'
                    register={register}
                    formState={formState}
                    inputTitle='First Name'
                    inputType='text'
                    disabled={isSubmitting}
                  />
                  <CustomInput
                    label='lastName'
                    register={register}
                    formState={formState}
                    inputTitle='Last Name'
                    inputType='text'
                    disabled={isSubmitting}
                  />
                  <CustomInput label='email' register={register} formState={formState} inputTitle='Email' inputType='email' disabled={isSubmitting} />
                  <SelectInput label='selectSubject' register={register} formState={formState} placeholder='Select option' disabled={isSubmitting}>
                    <option value='general'>General</option>
                    <option value='booking-a-room'>Booking a room</option>
                    <option value='payments'>Payments</option>
                    <option value='technical-issues'>Technical Issues</option>
                  </SelectInput>
                  <TextareaInput
                    label='textareaDescription'
                    register={register}
                    formState={formState}
                    placeholder='Write your message here...'
                    disabled={isSubmitting}
                  />
                  <CustomButton type='submit' colorScheme='blue' alignSelf='flex-start' my={4} isLoading={isSubmitting} loadingText='Sending'>
                    Send
                  </CustomButton>
                </Flex>
              </Container>
            </form>
          </Route>
          <Route path='/contact-form/confirmation-page' exact>
            <ConfirmationPage
              mainText='Thank you! Our team will answer as soon as possible.'
              buttonLabel='Go back'
              onClick={() => setIsSubmitted(false)}
            />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
};

export default Form;
