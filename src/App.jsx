import React from 'react';
import Home from './pages/Home';
import CustomCursor from './components/CustomCursor.jsx';
import ButtonComponent from './components/ButtonComponent';
import Projects from './pages/Projects.jsx';

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
    </div>
  );
}

export default App;
