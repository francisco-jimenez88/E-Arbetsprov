import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Flex } from '@chakra-ui/react';
import Register from './components/Register';
import List from './components/List/List';
import UserForm from './components/UserForm';

function App() {
  const [list, setList] = useState(['']);
  console.log(list);

  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6')
      .then((response) => setList(response.data.team));
  }, []);

  function sendUserName(userName: string) {
    setList([...list, userName])
  }

  return (
    <>
      <Flex>
          <Box h='100vh' w='30%'>
            <List list={list} />
          </Box>
          <Box h='100vh' w='70%' pl={{base: '10', md: '14'}}>
            <Register />
            <UserForm sendUserName={sendUserName} />
          </Box>
      </Flex>
    </>
  );
}

export default App;
