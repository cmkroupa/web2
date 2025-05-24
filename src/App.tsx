import React from 'react';
import GlobalBackground from './components/GlobalBackground';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';
import EducationContent from './components/EducationContent';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="relative">
      <GlobalBackground />
      <Navbar />
      <main>
        <Landing />
        <About />
        <Experience />
        <EducationContent />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App; 