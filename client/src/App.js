import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainNavbar from './components/Navbar/MainNavbar';
import LandingPage from './components/Landing/LandingPage';
import Services from './components/Services/service';
// Import other components as needed

function App() {
  return (
    <Router>
      <MainNavbar />
      <LandingPage />
      <Services />
    </Router>
  );
}

export default App;