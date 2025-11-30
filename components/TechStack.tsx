import React from 'react';
import { Database, Server, Globe, Cpu, Layers } from 'lucide-react';

export const TechStack: React.FC = () => {
  return (
    <section
      id="tech"
      className="py-20 bg-white border-t border-gray-100 snap-start min-h-screen lg:flex lg:items-center scroll-mt-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-10 w-72 h-72 bg-agro-100/50 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-[-80px] w-96 h-96 bg-blue-100/40 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Реализация и Технологии</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Stack */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Layers className="text-agro-600" />
              Технический стек
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-agro-50 border border-agro-100 rounded-xl flex items-center justify-center flex-shrink-0 text-agro-700 shadow-sm">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Backend: Python (FastAPI)</h4>
                  <p className="text-sm text-gray-600">Для высокой скорости обработки запросов и интеграции ML моделей.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-agro-50 border border-agro-100 rounded-xl flex items-center justify-center flex-shrink-0 text-agro-700 shadow-sm">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Frontend: React + Tailwind</h4>
                  <p className="text-sm text-gray-600">Современный и быстрый кабинет пользователя, адаптированный под мобильные устройства.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-agro-50 border border-agro-100 rounded-xl flex items-center justify-center flex-shrink-0 text-agro-700 shadow-sm">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Database: PostgreSQL</h4>
                  <p className="text-sm text-gray-600">Надежное хранение профилей, транзакций и геоданных.</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Tech */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-[0_30px_80px_rgba(15,23,42,0.25)] border border-slate-800/60">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Cpu className="text-agro-400" />
              Применение AI
            </h3>
            <ul className="space-y-6">
              <li className="border-l-2 border-agro-500/80 pl-4 bg-white/5 rounded-lg py-2">
                <h4 className="font-bold text-agro-300">Computer Vision (ResNet/U-Net)</h4>
                <p className="text-sm text-gray-300 mt-1">Сегментация спутниковых снимков (Sentinel-2) и оценка NDVI. Подтверждает актив без выезда.</p>
              </li>
              <li className="border-l-2 border-agro-500/80 pl-4 bg-white/5 rounded-lg py-2">
                <h4 className="font-bold text-agro-300">Gradient Boosting (XGBoost)</h4>
                <p className="text-sm text-gray-300 mt-1">Скоринговая модель (PD) на основе 50+ параметров (коммуналка, геоданные).</p>
              </li>
              <li className="border-l-2 border-agro-500/80 pl-4 bg-white/5 rounded-lg py-2">
                <h4 className="font-bold text-agro-300">NLP</h4>
                <p className="text-sm text-gray-300 mt-1">Кросс-валидация на синтетических данных, гиперпараметрическая оптимизация, метрики: AUC-ROC, Precision, Recall.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
