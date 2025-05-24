import React from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sand-50">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-terracotta-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-sage-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-sand-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
      </div>

      {/* Subtle pattern background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>

      {/* Subtle dots */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-sage-300 rounded-full animate-subtle-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-terracotta-300 rounded-full animate-subtle-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-0.75 h-0.75 bg-sand-300 rounded-full animate-subtle-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-sage-300 rounded-full animate-subtle-pulse"></div>
      </div>

      {/* Subtle depth layer */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none"></div>

      <Nav />
      <main className="relative">
        <Landing />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App; 