import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-agro-50 to-white overflow-hidden relative snap-start min-h-screen lg:flex lg:items-center scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Кредит для фермера <br />
            <span className="gradient-text">за 5 минут</span> без справок
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AgroScore AI использует спутниковый анализ и искусственный интеллект для мгновенной оценки кредитоспособности.
          </p>
        </div>
      </div>
      
      {/* Decorative BG elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-agro-100 rounded-full opacity-30 blur-3xl"></div>
         <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-yellow-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
    </section>
  );
};
