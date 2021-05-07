import { Box, Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import './List.css';

interface ListProps {
  list: string[];
}

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <>
      <Flex h='100vh' color='white' className='background' direction='column'>
        <Heading as='h1' fontWeight='bold' fontSize={{base: '2rem', md: '3rem'}} mb='10' pt='35%' textAlign='center'>
          <Flex direction='column'>
            <Box as='span'>Join</Box>
            <Box as='span'>the</Box>
            <Box as='span'>team</Box>
          </Flex>
        </Heading>
        <Box textAlign='center'>
        <UnorderedList textAlign='left' display='inline-block'>
          {list.map((name, i) => (
            <ListItem key={`${name}${i}`} fontSize='1.2rem'>{name}</ListItem>
          ))}
        </UnorderedList>
        </Box>
      </Flex>
    </>
  );
};

export default List;
