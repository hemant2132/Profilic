import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import { AuthProvider } from './contexts/AuthContext';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <Route path="/" exact component={Home} />
        </Router>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
