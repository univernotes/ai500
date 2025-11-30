import React from 'react';

export const Roadmap: React.FC = () => {
  const steps = [
    {
      title: 'Прототип (Prototype)',
      desc: 'Разработана концепция. Собраны дата-сеты (Ташкентская область). Описана логика модели.',
      status: 'current'
    },
    {
      title: 'MVP Модели',
      desc: 'Обучение нейросети распознавать 3 типа культур (хлопок, пшеница, сады). Этап 2 хакатона.',
      status: 'upcoming'
    },
    {
      title: 'Демо-интерфейс',
      desc: 'Интерфейс для кредитного инспектора и мобильная форма для клиента.',
      status: 'upcoming'
    },
    {
      title: 'Интеграция API',
      desc: 'Подключение открытых API (погода, кадастр) для обогащения данных.',
      status: 'upcoming'
    },
    {
      title: 'Пилотный запуск',
      desc: 'Тестирование на исторических данных банка для проверки точности модели.',
      status: 'upcoming'
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-white snap-start min-h-screen lg:flex lg:items-center scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Дорожная карта</h2>
        
        <div className="relative border-l-4 border-agro-100 ml-4 space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Dot */}
              <div className={`absolute -left-[10px] top-1 w-5 h-5 rounded-full border-4 border-white ${
                step.status === 'current' ? 'bg-agro-600 scale-125' : 'bg-gray-300'
              }`} />
              
              <h3
                className={`text-xl font-bold mb-1 ${
                  step.status === 'current' ? 'text-agro-600' : 'text-gray-900'
                }`}
              >
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
