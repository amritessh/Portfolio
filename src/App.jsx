import React from 'react';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/common/Footer';
import { useDarkMode } from './hooks/useDarkMode';
import { useScrollspy } from './hooks/useScrollspy';
import CalendlyBadge from './components/CalendlyBadge';

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const sections = ['home', 'about', 'resume', 'work', 'contact'];
  const activeSection = useScrollspy(sections);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
      />

      <main>
        <Home darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Resume darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
      <CalendlyBadge />
    </div>
  );
}

export default App;
