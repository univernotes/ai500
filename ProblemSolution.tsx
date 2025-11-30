import React from 'react';
import { XCircle, CheckCircle, BarChart3, ScanEye } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 snap-start min-h-screen lg:flex lg:items-center scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Problem */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Проблема</h2>
            <p className="mt-4 text-lg text-gray-600">Почему фермерам сложно получить кредит?</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 flex flex-col md:flex-row gap-8 items-center">
             <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-red-50 rounded-full flex items-center justify-center">
                  <XCircle className="w-24 h-24 text-red-400" />
                </div>
             </div>
             <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-gray-900 mb-4">В Узбекистане тысячи дехкан не могут получить кредит</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">1</span>
                    <p className="text-gray-600"><strong>Причина:</strong> Нет официальной зарплаты и неопределенные риски.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">2</span>
                    <p className="text-gray-600"><strong>Боль:</strong> Банк считает их «рискованными». Оценка залога требует выезда сотрудника и занимает недели.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">3</span>
                    <p className="text-gray-600"><strong>Итог:</strong> Агросектор недополучает финансирование, банк теряет клиентов.</p>
                  </li>
                </ul>
             </div>
          </div>
        </div>

        {/* Solution */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Решение: AgroScore AI</h2>
            <p className="mt-4 text-lg text-gray-600">Автоматическая оценка кредитоспособности без бумаг за 5 минут</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-agro-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Управленческий Анализ</h3>
              <p className="text-gray-700 text-sm">
                Агрегируем альтернативные данные (спутник + открытые API/кадастр) и управленческие метрики: мгновенно проверяем землю и активы без выезда, выдаем предварительный скоринг и рекомендации по улучшению залога за 5 минут.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-agro-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-agro-100 rounded-lg flex items-center justify-center mb-4 text-agro-600">
                <ScanEye className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Спутниковый анализ</h3>
              <p className="text-gray-600 text-sm">
                Наша система анализирует земельные участки со спутниковых снимков, определяя контуры полей, классифицируя культуры и прогнозируя ожидаемый урожай и доход фермеров.
                </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
