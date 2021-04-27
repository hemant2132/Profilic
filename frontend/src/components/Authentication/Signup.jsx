import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signup } = useAuth();

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await signup(email, password);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <Heading>Signup</Heading>
      <form
        onSubmit={(e) => {
          handleSignUp(e);
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
            Sign up
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default SignUp;
