import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import ClientPortalPage from './pages/ClientPortalPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="legal" element={<LegalPage />} />
            <Route path="portal" element={<ClientPortalPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;