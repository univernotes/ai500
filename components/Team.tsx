import React from 'react';

const member1 = new URL('../img/member1.jpg', import.meta.url).href;
const member2 = new URL('../img/member2.jpg', import.meta.url).href;
const member = new URL('../img/member.jpg', import.meta.url).href;

export const Team: React.FC = () => {
  const members = [
    {
      name: "Ислам Хожамбетов",
      role: "ML Developer (TeamLead)",
      desc: "Отвечает за координацию команды и внедрение ML технологий.",
      stack: "Python, Tenserflow",
      img: member1
    },
    {
      name: "Бехруз Абдуллаев",
      role: "Backend Developer",
      desc: "Интеграции, API и за разработку архитектуру.",
      stack: "Python, FastAPI",
      img: member2
    },
    {
      name: "Амирхон Маликов",
      role: "Frontend Developer",
      desc: "Создает быстрый и чистый интерфейс для клиентов и кредитных инспекторов.",
      stack: "React.js, PostgreSQL, UI/UX",
      img: member
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 snap-start min-h-screen lg:flex lg:items-center scroll-mt-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-16 top-20 w-80 h-80 bg-agro-100/50 blur-[130px]" />
        <div className="absolute -left-12 bottom-10 w-72 h-72 bg-emerald-100/50 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Команда</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Мы объединяем глубокую техническую экспертизу с пониманием специфики рынка Узбекистана.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-white to-agro-50/25 p-8 rounded-2xl border border-agro-100 shadow-lg text-center hover:-translate-y-1.5 hover:shadow-xl transition-transform duration-300"
            >
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-agro-100 bg-white shadow-sm"
              />
              <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
              <p className="text-agro-600 font-medium text-sm mb-2">{member.role}</p>
              <p className="text-gray-500 text-sm mb-4 min-h-[40px]">{member.desc}</p>
              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">
                  {member.stack}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-agro-700 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Почему мы?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left mt-8">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="font-bold text-lg mb-2 text-agro-100">Опыт в ML и Хакатонах</h4>
              <p className="text-sm text-agro-50">Наши участники уже реализовывали проекты с использованием ML & AI и опыт участия в хакатонах.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="font-bold text-lg mb-2 text-agro-100">Фокус на результат</h4>
              <p className="text-sm text-agro-50">Мы понимаем, что банку важен не просто «код», а снижение рисков и рост кредитного портфеля.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="font-bold text-lg mb-2 text-agro-100">Гибкость</h4>
              <p className="text-sm text-agro-50">Умеем быстро строить MVP и адаптировать их под требования интеграции API Агробанка.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
