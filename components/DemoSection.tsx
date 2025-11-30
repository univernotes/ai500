import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { ScoreGauge } from './ScoreGauge';
import { ScoringResult, CropType } from '../types';
import { Satellite, Activity, Sprout, AlertCircle } from 'lucide-react';

export const DemoSection: React.FC = () => {
  const [result, setResult] = useState<ScoringResult | null>(null);

  const demoInputs = {
    region: 'Ферганская область',
    crop: CropType.ORCHARD,
    size: 5,
    experience: 3
  };

  const demoResult: ScoringResult = {
    score: 650,
    riskLevel: 'Medium',
    maxLoanAmount: '20,000,000 UZS',
    ndviAnalysis: 'Частично облачно — используем исторические снимки и последние NDVI для оценки динамики.',
    recommendations: [
      'Обновите данные кадастра, чтобы повысить точность залога.',
      'Добавьте историю коммунальных платежей за последние 6 месяцев.',
      'Подтвердите производственный опыт через местное хозяйство.'
    ],
    yieldPrediction: 'Средняя ожидаемая урожайность по культуре на текущий сезон.'
  };

  useEffect(() => {
    setResult(demoResult);
  }, []);

  const formDisabled = true;

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden snap-start min-h-screen lg:flex lg:items-center scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-10 w-80 h-80 bg-agro-100/40 blur-[110px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100/30 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-agro-600 font-semibold mb-4">Simulated flow</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Как будет работать наша система</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы заблокировали ввод, чтобы показать чистый сценарий скоринга: спутниковые данные + альтернативные сигналы дают мгновенный результат.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 items-stretch w-full">
          {/* Input Form (locked) */}
          <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 shadow-[0_25px_60px_rgba(15,23,42,0.08)] overflow-hidden h-full flex flex-col lg:min-h-[640px]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-agro-100 text-agro-700 flex items-center justify-center shadow-sm">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-500 font-semibold">Config preview</p>
                  <h3 className="text-xl font-semibold text-gray-900">Параметры заемщика</h3>
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-600">
                Demo locked
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl border border-slate-200/70 bg-slate-50/60">
                <p className="text-xs uppercase text-slate-500 font-semibold">Фокус</p>
                <p className="text-sm text-slate-700 mt-1">Скоринг без ручного ввода</p>
              </div>
              <div className="p-4 rounded-2xl border border-slate-200/70 bg-slate-50/60">
                <p className="text-xs uppercase text-slate-500 font-semibold">Данные</p>
                <p className="text-sm text-slate-700 mt-1">Спутник, поведение, агроистория</p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Регион</label>
                <select
                  disabled={formDisabled}
                  className="w-full p-3 border border-gray-200 rounded-xl bg-slate-50 text-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
                  value={demoInputs.region}
                  onChange={() => {}}
                  aria-disabled
                >
                  <option>{demoInputs.region}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Тип культуры</label>
                <select
                  disabled={formDisabled}
                  className="w-full p-3 border border-gray-200 rounded-xl bg-slate-50 text-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
                  value={demoInputs.crop}
                  onChange={() => {}}
                  aria-disabled
                >
                  <option>{demoInputs.crop}</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Площадь (га)</label>
                  <input
                    type="number"
                    disabled={formDisabled}
                    className="w-full p-3 border border-gray-200 rounded-xl bg-slate-50 text-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
                    value={demoInputs.size}
                    readOnly
                    aria-disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Опыт (лет)</label>
                  <input
                    type="number"
                    disabled={formDisabled}
                    className="w-full p-3 border border-gray-200 rounded-xl bg-slate-50 text-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
                    value={demoInputs.experience}
                    readOnly
                    aria-disabled
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  disabled
                  className="w-full justify-center opacity-70 cursor-not-allowed"
                >
                  Скоро будет доступно
                </Button>
                <p className="text-xs text-gray-400 text-center mt-3">
                  Управляемый сценарий: форма заблокирована, чтобы показать результат на демо-данных.
                </p>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-[0_25px_60px_rgba(15,23,42,0.08)] overflow-hidden h-full flex flex-col lg:min-h-[640px]">
            <div className="absolute top-0 right-0 w-56 h-56 bg-agro-100/40 blur-[120px]" />
            <div className="p-8 relative flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs uppercase text-slate-500 font-semibold">Simulated decision</p>
                  <h3 className="text-2xl font-bold text-gray-900">Результат оценки</h3>
                </div>
                {result && (
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Одобренная сумма</p>
                    <p className="text-xl font-bold text-agro-600">{result.maxLoanAmount}</p>
                  </div>
                )}
              </div>

              {result && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        result.riskLevel === 'Low'
                          ? 'bg-green-100 text-green-700'
                          : result.riskLevel === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      Риск: {result.riskLevel === 'Low' ? 'Низкий' : result.riskLevel === 'Medium' ? 'Средний' : 'Высокий'}
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-600">Автосбор данных</span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-600">5 сек</span>
                  </div>

                  <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4">
                    <ScoreGauge score={result.score} />
                  </div>

                  <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <Satellite className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900">Спутниковый анализ (NDVI)</p>
                        <p className="text-sm text-blue-800 mt-1">{result.ndviAnalysis}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                      <Sprout className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-green-900">Прогноз урожайности</p>
                        <p className="text-sm text-green-800 mt-1">{result.yieldPrediction}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2 text-sm">
                      <AlertCircle className="w-4 h-4 text-gray-500" />
                      Рекомендации AI
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2 pl-1">
                      {result.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="w-1.5 h-1.5 mt-2 rounded-full bg-agro-500 flex-shrink-0" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
