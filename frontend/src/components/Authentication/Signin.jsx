import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
} from '@chakra-ui/react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <Heading>Signin</Heading>
      <form
        onSubmit={(e) => {
          handleSignIn(e);
        }}
      >
        <FormControl mt={4} isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            size="md"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel htmlFor="Password">Password</FormLabel>
          <Input
            size="md"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <br />
        <Stack>
          <Button type="submit" colorScheme="blue">
            Sign in
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Signin;
