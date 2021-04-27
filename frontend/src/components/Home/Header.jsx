import { React } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
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
        {currentUser ? <Button onClick={handleLogout}>Logout</Button> : null}
      </Flex>
    </Box>
  );
};

export default Header;
