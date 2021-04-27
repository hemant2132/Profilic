import React, { useState } from 'react';
import { Button, Text, Flex, Stack, HStack } from '@chakra-ui/react';

import Header from './Header';
import Signup from '../Authentication/Signup';
import Signin from '../Authentication/Signin';
import { useAuth } from '../../contexts/AuthContext';

const Home = () => {
  const [showSignup, setShowSignup] = useState(null);

  const { currentUser } = useAuth();

  return (
    <>
      <Header />
      <Flex w="100%" h="92%">
        <Flex w="50%" flexDirection="column">
          <Stack spacing="24px" justify="center">
            <Text fontSize="7xl" color="gray.700" fontWeight="bolder">
              Profilic
            </Text>
            <Text color="gray.600" fontSize="2xl" fontWeight="bold">
              The one place for all your Prolific Profiles!
            </Text>
            {!currentUser && (
              <HStack>
                <Button
                  _hover={{}}
                  w="xs"
                  bg="blue.500"
                  color="white"
                  py="4"
                  onClick={() => setShowSignup(false)}
                >
                  Sign in
                </Button>
                <Button
                  _hover={{}}
                  w="xs"
                  bg="blue.500"
                  color="white"
                  py="4"
                  onClick={() => setShowSignup(true)}
                >
                  Sign up
                </Button>
              </HStack>
            )}
          </Stack>
        </Flex>
        {!currentUser ? (
          showSignup === null ? null : showSignup === true ? (
            <Signup />
          ) : (
            <Signin />
          )
        ) : null}
      </Flex>
    </>
  );
};

export default Home;
