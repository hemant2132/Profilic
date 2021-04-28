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
import { useUser } from '../../contexts/UserContext';
import axios from 'axios';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();
  const { assignUser } = useUser();

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await login(email, password);
      const user = userCredential.user;
      axios({
        method: 'GET',
        url: `http://localhost:8080/api/users/${user.uid}`,
      })
        .then((res) => {
          assignUser(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      alert(error.message);
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
