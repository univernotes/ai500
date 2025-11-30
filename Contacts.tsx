import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Contacts: React.FC = () => {
  const contacts = [
    {
      label: 'GitHub',
      value: 'github.com/j1nx73',
      href: 'https://github.com/j1nx73',
      Icon: Github
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/xojambetov-islam',
      href: 'https://www.linkedin.com/in/xojambetov-islam/',
      Icon: Linkedin
    },
    {
      label: 'Email',
      value: 'solovisionai500@outlook.com',
      href: 'mailto:solovisionai500@outlook.com',
      Icon: Mail
    }
  ];

  return (
    <section
      id="contacts"
      className="py-16 bg-white border-t border-gray-100 snap-start min-h-screen lg:flex lg:items-center scroll-mt-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-12 top-0 w-80 h-80 bg-blue-100/40 blur-[120px]" />
        <div className="absolute right-[-80px] bottom-[-60px] w-80 h-80 bg-agro-100/40 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Наши контакты</h2>
          <p className="mt-4 text-gray-600">
            Свяжитесь с нами через удобный вам канал.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              className="group bg-gradient-to-br from-white/90 to-agro-50/20 hover:from-white hover:to-white p-6 rounded-2xl border border-agro-100 shadow-md hover:shadow-xl transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-agro-100 text-agro-800 border border-agro-200 flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6" />
                </span>
                <div>
                  <p className="text-sm text-gray-500">{label}</p>
                  <p className="text-base font-semibold text-gray-900 group-hover:text-agro-700 transition-colors">
                    {value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
