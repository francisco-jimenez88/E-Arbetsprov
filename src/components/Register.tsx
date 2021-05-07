import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Register: React.FC = () => {
  return (
    <>
      <Box w={{base: '100%', md: '60%', xl: '60%'}} h={{base: '40vh', md: '50vh'}}>
        <Box pt='35%'>
        <Heading
          as='h2'
          color='blue.900'
          mb={{base: '8', md: '16'}}
          fontWeight='bold'
          fontSize='1.5rem'
        >
          Register
        </Heading>
        <Heading
          as='h3'
          color='blue.900'
          mb={{base: '4', md: '8'}}
          fontWeight='bold'
          fontSize='1.2rem'
        >
          Team player - Be positive - Beat yesterday
        </Heading>
        <Text fontSize='0.9rem' color='gray.700'>
          Together we re-define the experience of online gaming through
          gamification and novel technical solutions.
        </Text>
        </Box>
      </Box>
    </>
  );
};

export default Register;
