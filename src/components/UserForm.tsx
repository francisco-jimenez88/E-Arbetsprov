import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

export interface UserFormProps {
  sendUserName(name: string): void;
}

interface initialFormValues {
  userName: string;
  email: string;
  terms: boolean;
}

const MotionButton = motion(Button);

const UserForm: React.FC<UserFormProps> = ({ sendUserName }: UserFormProps) => {
  const initialValues: initialFormValues = {
    userName: '',
    email: '',
    terms: false,
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Not a valid email')
      .required('Email is required'),
    terms: Yup.boolean().isTrue('Accepting the terms is required'),
  });

  return (
    <>
      <Box w={{base: '90%', md: '60%'}} h='50vh'>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            sendUserName(values.userName);
            resetForm();
          }}
        >
          {({ isValid }) => (
            <Form>
              <Box pb='2'>
                <Field name='userName'>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.userName && form.touched.userName}
                    >
                      <Input
                        {...field}
                        id='userName'
                        placeholder='Name'
                        _placeholder={{ color: 'gray.500' }}
                      />
                      <FormErrorMessage>
                        {form.errors.userName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Box>
              <Box pb='2'>
                <Field name='email'>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <Input
                        {...field}
                        id='email'
                        placeholder='Email'
                        _placeholder={{ color: 'gray.500' }}
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Box>
              <Box pt='2' mb='4'>
                <Field type='checkbox' name='terms'>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.terms && form.touched.terms}
                    >
                      <Checkbox
                        {...field}
                        id='terms'
                        placeholder='terms'
                        isChecked={field.value}
                      >
                        I agree to the terms
                      </Checkbox>
                      <FormErrorMessage>{form.errors.terms}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Box>
              <MotionButton
                bg='#357edd'
                _hover={{ bg: '#357edd' }}
                disabled={!isValid}
                color='white'
                type='submit'
                whileHover={{scale: 1.1}}
              >
                I'm in, sign me up!
              </MotionButton>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default UserForm;
