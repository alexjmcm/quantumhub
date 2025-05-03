import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LearningSection from './components/LearningSection';
import CodeSection from './components/CodeSection';
import CommunitySection from './components/CommunitySection';
import ToolsSection from './components/ToolsSection';
import Footer from './components/Footer';
// Import your playground page component
import Playground from './playground/page';

function HomePage() {
  return (
    <>
      <Hero />
      <LearningSection />
      <CodeSection />
      <CommunitySection />
      <ToolsSection />
    </>
  );
}

// Layout component that includes Navbar and Footer
function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          } 
        />
        {/* Playground is rendered without the MainLayout */}
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;