import React from 'react';
import Home from './pages/Home';
import CustomCursor from './components/CustomCursor.jsx';
import ServicesProvided from './components/ServicesProvided.jsx';
import Projects from './pages/Projects.jsx';
import CaseStudyRailNav from './pages/CaseStudyRailNav.jsx';
import CaseStudyAha from './pages/CaseStudyAha.jsx';
import Socials from './components/Socials.jsx';
import Projects1 from './pages/Projects1.jsx';

function App() {
  return (
    <div>

      <div>

      </div>
      {/* <Header /> */}
      
      <Home />
      <CustomCursor />
      {/* Add other components like Home, About, Portfolio here */}
      <Projects />
      <Projects1 />
      <ServicesProvided />
      
      <Socials />
    </div>
  );
}

export default App;
