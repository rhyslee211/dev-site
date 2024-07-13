import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  const HomeRef = React.useRef(null);
  const AboutRef = React.useRef(null);
  const ProjectsRef = React.useRef(null);
  const ContactRef = React.useRef(null);

  return (
    <div className="App">
      <header
        id="Navbar"
        className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-center border-b-2"
      >
        <Navbar HomeRef={HomeRef} AboutRef={AboutRef} ProjectsRef={ProjectsRef} ContactRef={ContactRef} />
      </header>
      <div ref={HomeRef}>
        <Home />
      </div>
      <div ref={AboutRef}>
        <About />
      </div>
      <div ref={ProjectsRef}>
        <Projects />
      </div>
      <div ref={ContactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
