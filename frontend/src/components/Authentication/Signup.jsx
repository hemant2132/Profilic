import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useUser } from '../../contexts/UserContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');

  const { signup } = useAuth();
  const { assignUser } = useUser();

  const handleSignUp = async (event) => {
    event.preventDefault();

    // check for unique user name
    let userNameEntry = null;
    try {
      userNameEntry = await axios({
        method: 'GET',
        url: `http://localhost:8080/api/users?userName=${userName}`,
      });
    } catch (error) {
      console.error(error);
    }

    if (userNameEntry === null || userNameEntry.data.length !== 0) {
      alert('The specified user name has already been taken.');
      return;
    }

    try {
      const userCredential = await signup(email, password);
      const user = userCredential.user;
      const userObj = {
        uid: user.uid,
        name,
        userName,
      };

      // pushing user to database
      axios({
        method: 'POST',
        url: 'http://localhost:8080/api/users',
        data: userObj,
      })
        .then((res) => {
          if (res.status === 200) {
            assignUser(userObj);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      alert(error.message);
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
          <FormLabel>Name</FormLabel>
          <Input
            size="md"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel>User Name</FormLabel>
          <Input
            size="md"
            placeholder="Enter user name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormControl>
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
