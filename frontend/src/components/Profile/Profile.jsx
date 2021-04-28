import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  Avatar,
  Button,
  Center,
  Divider,
  HStack,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import Header from '../Home/Header';

const Profile = () => {
  const [userObj, setUserObj] = useState(null);
  const [links, setLinks] = useState(null);
  const [initialised, setInitialised] = useState(false);

  const { userName } = useParams();

  // axios call for details of user
  useEffect(() => {
    if (!initialised) {
      axios({
        method: 'GET',
        url: `http://localhost:8080/api/users?userName=${userName}`,
      })
        .then((res) => {
          setUserObj(res.data[0]);
          axios({
            method: 'GET',
            url: `http://localhost:8080/api/users/${res.data[0].uid}/links`,
          })
            .then((resLinks) => {
              console.log(resLinks.data);
              setLinks(resLinks.data);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.error(error);
          window.location.assign(window.location.origin);
        });
      setInitialised(true);
    }
  }, [userName, initialised]);

  return userObj !== null ? (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `url(${userObj.backgroundImgUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Center>
          <Stack>
            <Avatar
              my="4"
              alignSelf="center"
              size="2xl"
              src={userObj.profilePicUrl}
            />
            <Text fontWeight="bold" fontSize="4xl" align="center">
              {userObj.userName}
            </Text>
            <HStack>
              <Text>Name: {userObj.name}</Text>
              <Text>Organisation: {userObj.org}</Text>
              <Text>Location: {userObj.location}</Text>
              <Text>Role: {userObj.role}</Text>
            </HStack>
            <Text align="center">Bio: {userObj.bio}</Text>
          </Stack>
        </Center>
        <Divider />
        <Center>
          <Stack w="50%" my="4">
            {links &&
              links.map((linkObj, i) => (
                <>
                  <Button
                    onClick={() => window.open(`${linkObj.url}`, '_blank')}
                    color={linkObj.fontColor}
                    colorScheme={linkObj.color}
                    key={i}
                  >
                    {linkObj.name}
                  </Button>
                  <Spacer />
                </>
              ))}
          </Stack>
        </Center>
      </div>
    </>
  ) : null;
};

export default Profile;
