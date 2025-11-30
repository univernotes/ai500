import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { DemoSection } from './components/DemoSection';
import { TechStack } from './components/TechStack';
import { Roadmap } from './components/Roadmap';
import { Team } from './components/Team';
import { Contacts } from './components/Contacts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main className="pt-16 h-screen overflow-y-auto snap-y snap-mandatory">
        <Hero />
        <ProblemSolution />
        <DemoSection />
        <TechStack />
        <Roadmap />
        <Team />
        <Contacts />
        <footer className="bg-gray-900 text-gray-400 py-12 snap-start min-h-[320px] flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-center w-full">
            <p className="mb-4 text-lg font-semibold text-white">AgroScore AI</p>
            <div className="mt-8 pt-8 border-t border-gray-800 text-xs">
              © 2025 AgroScore AI. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
