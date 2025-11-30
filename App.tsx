import React, { Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

const ProblemSolution = lazy(() => import('./components/ProblemSolution').then(m => ({ default: m.ProblemSolution })));
const DemoSection = lazy(() => import('./components/DemoSection').then(m => ({ default: m.DemoSection })));
const TechStack = lazy(() => import('./components/TechStack').then(m => ({ default: m.TechStack })));
const Roadmap = lazy(() => import('./components/Roadmap').then(m => ({ default: m.Roadmap })));
const Team = lazy(() => import('./components/Team').then(m => ({ default: m.Team })));
const Contacts = lazy(() => import('./components/Contacts').then(m => ({ default: m.Contacts })));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main className="pt-16 h-screen overflow-y-auto snap-y snap-mandatory">
        <Hero />
        <Suspense fallback={<div className="py-20 text-center text-gray-400">Загрузка...</div>}>
          <ProblemSolution />
        </Suspense>
        <Suspense fallback={<div className="py-20 text-center text-gray-400">Загрузка...</div>}>
          <DemoSection />
        </Suspense>
        <Suspense fallback={<div className="py-20 text-center text-gray-400">Загрузка...</div>}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<div className="py-20 text-center text-gray-400">Загрузка...</div>}>
          <Roadmap />
        </Suspense>
        <Suspense fallback={<div className="py-20 text-center text-gray-400">Загрузка...</div>}>
          <Team />
        </Suspense>
        <Suspense fallback={<div className="py-20 text-center text-gray-400">Загрузка...</div>}>
          <Contacts />
        </Suspense>
        <footer className="bg-gray-900 text-gray-400 py-6 snap-start min-h-[140px] flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-center w-full">
            <p className="text-lg font-semibold text-white">AgroScore AI</p>
            <div className="mt-3 pt-3 border-t border-gray-800 text-xs">
              © 2025 AgroScore AI. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
