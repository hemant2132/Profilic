import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      axios({
        method: 'GET',
        url: `http://localhost:8080/api/users/${currentUser.uid}`,
      })
        .then((res) => {
          console.log(res.data);
          assignUser(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [currentUser]);

  const assignUser = (userObj) => {
    setUser(userObj);
  };

  const value = {
    user,
    assignUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
