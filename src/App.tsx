import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LearningSection from './components/LearningSection';
import CodeSection from './components/CodeSection';
import CommunitySection from './components/CommunitySection';
import ToolsSection from './components/ToolsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <LearningSection />
      <CodeSection />
      <CommunitySection />
      <ToolsSection />
      <Footer />
    </div>
  );
}

export default App;