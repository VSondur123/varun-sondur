import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAOS } from './hooks/useAOS';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';

function AppContent() {
  // Initialize AOS (Animate On Scroll) once at app root
  useAOS();

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}
