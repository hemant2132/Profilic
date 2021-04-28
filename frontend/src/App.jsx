import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import { AuthProvider } from './contexts/AuthContext';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/:userName" exact component={Profile} />
        </Router>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
