import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainNavbar from './components/Navbar/MainNavbar';
import LandingPage from './components/Landing/LandingPage';
import Services from './components/Services/service';
import Bio from './components/Bio/Bio';
// import ReviewsCarousel from './components/Reviews/reviews';
import ScheduleConsultation from './components/Calendly/schedule';
import HowItWorks from './components/HowWorks/HowWorks';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
      <MainNavbar />
      <div id="home">
        <LandingPage />
      </div>
      <div id="how-it-works">
        <HowItWorks/>
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="bio">
        <Bio/>
      </div>
      <div id="schedule">
        <ScheduleConsultation/>
      </div>      
      {/*<ReviewsCarousel />*/}
      <Footer />
    </Router>
  );
}

export default App;