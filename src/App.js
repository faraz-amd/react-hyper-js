import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Parallax from './components/Parallax';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Components from './pages/Components';
import ApiTest from './pages/ApiTest';
import { DarkModeProvider } from './hooks/useDarkMode';
import './App.css';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - navHeight - 20,
            behavior: 'smooth',
          });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function AppContent() {
  return (
    <div className="App">
      <Parallax />
      <Navigation />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/components" element={<Components />} />
        <Route path="/api-test" element={<ApiTest />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <AppContent />
      </Router>
    </DarkModeProvider>
  );
}

export default App;
