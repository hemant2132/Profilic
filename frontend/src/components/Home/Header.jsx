import { React } from 'react';
import { Box, Flex, Button, HStack } from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext';
import { useUser } from '../../contexts/UserContext';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const { user } = useUser();

  const handleLogout = async () => {
    try {
      await logout();
      window.location.assign(window.location.origin);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Box my={2} px={4} h="8%">
      <Flex h="100%" alignItems={'center'} justifyContent={'space-between'}>
        <Button onClick={() => window.location.assign(window.location.origin)}>
          Profilic
        </Button>
        {currentUser ? (
          <HStack>
            <Button
              onClick={() => {
                if (user)
                  window.location.assign(
                    window.location.origin + '/' + user.userName
                  );
              }}
            >
              {user && user.name}
            </Button>
            <Button onClick={handleLogout}>Logout</Button>
          </HStack>
        ) : null}
      </Flex>
    </Box>
  );
};

export default Header;
