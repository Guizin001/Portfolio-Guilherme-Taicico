import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, Menu, X, Code2, Terminal, Database, Globe2 } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { Project } from './types';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const fullText = " Desenvolvedor Full Stack | React | Node.js | TypeScript";

  useEffect(() => {
    setIsVisible(true);
  }, [fullText]);

  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'Pi Stock',
      description: 'Aplicação para monitoramento de ações em tempo real, com gráficos interativos e notificações personalizadas.',
      image: 'https://i.postimg.cc/MpFKfzns/F570-A1-BC-722-F-46-C3-8088-7-EF68-A784187.png',
      tags: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'SQL'],
      link: 'https://pistock.netlify.app'
    },

    /* Projeto 2
    {
      id: 2,
      title: 'Projeto Example 2',
      description: 'Projeto inovador com diversas funcionalidades avançadas, proporcionando uma experiência única ao usuário.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      tags: ['Next.js', 'Node.js', 'MongoDB'],
      link: 'https://github.com'
    }*/
  ]);

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Formação', href: '#formacao' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Cursos', href: '#cursos' },
    { label: 'Contato', href: '#contato' }
  ];

  const [typedText, setTypedText] = useState('');
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b dark:border-gray-800 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
              <span className="inline-block hover:rotate-12 transition-transform duration-300">&lt;</span>
              Guilherme Taicico
              <span className="inline-block hover:-rotate-12 transition-transform duration-300">/&gt;</span>
            </h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 hover:rotate-90 transform"
              >
                {isDark ? <Sun className="dark:text-white" /> : <Moon />}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 mr-2 transition-colors duration-300"
              >
                {isDark ? <Sun className="dark:text-white" /> : <Moon />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                {isMenuOpen ? 
                  <X className="h-6 w-6 dark:text-white" /> : 
                  <Menu className="h-6 w-6 dark:text-white" />
                }
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav 
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block mb-6">
            <img
              src="https://i.postimg.cc/m2mxXVNJ/20241015-191829.webp"
              alt="Seu perfil"
              className="w-32 h-32 rounded-full object-cover ring-4 ring-indigo-600 dark:ring-indigo-400 transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-2 -right-2 bg-indigo-600 dark:bg-indigo-400 p-2 rounded-full animate-bounce">
              <Code2 className="w-4 h-4 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Olá, eu sou{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Guilherme Taicico
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 h-8 border-r-2 border-indigo-600 dark:border-indigo-400">
            {typedText}
          </p>
          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/Guizin001' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/guitaicico/' },
              { icon: Mail, href: 'mailto:guilhermetaicico@gmail.com' }
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-all duration-300 hover:scale-110 transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="text-indigo-600 dark:text-indigo-400" />
              </a>
            ))}
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="mb-20 scroll-mt-20">
          <h3 className="text-2xl font-bold mb-6 dark:text-white flex items-center gap-2">
            <Terminal className="text-indigo-600 dark:text-indigo-400" />
            Sobre Mim
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <p className="text-gray-600 dark:text-gray-400">
            Atualmente, atuo como Analista Jr, mas estou em transição para a área de Tecnologia da Informação, com foco no desenvolvimento Front-End. Sou apaixonado por criar interfaces modernas, responsivas e performáticas, sempre priorizando a experiência do usuário (UX/UI) e as melhores práticas de desenvolvimento.
            </p>
          </div>
        </section>

        {/* Formação Section */}
        <section id="formacao" className="mb-20 scroll-mt-20">
          <h3 className="text-2xl font-bold mb-6 dark:text-white flex items-center gap-2">
            <Globe2 className="text-indigo-600 dark:text-indigo-400" />
            Formação Acadêmica
          </h3>
          <div className="space-y-4">
            {[
              {
                title: 'Tecnôlogo em Análise e Desenvolvimento de Sistemas',
                institution: 'Universidade Cidade de São Paulo',
                period: '2023 - 2025'
              },
                /* Adicionar mais faculdades 
              {
                title: 'Tecnôlogo em Análise e Desenvolvimento de Sistemas',
                institution: 'Universidade Cidade de São Paulo',
                period: '2023 - 2025'
              }*/
            ].map((education, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold mb-2 dark:text-white">{education.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{education.institution}</p>
                <p className="text-gray-500 dark:text-gray-500">{education.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Habilidades Section */}
        <section id="habilidades" className="mb-20 scroll-mt-20">
          <h3 className="text-2xl font-bold mb-6 dark:text-white flex items-center gap-2">
            <Code2 className="text-indigo-600 dark:text-indigo-400" />
            Habilidades
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                <Globe2 className="text-indigo-600 dark:text-indigo-400" />
                Frontend
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {['React', 'TypeScript', 'JavaScript', 'Sass', 'Next.js', 'TailwindCSS', 'HTML5', 'CSS3'].map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 transform hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="text-center font-medium dark:text-white">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                <Database className="text-indigo-600 dark:text-indigo-400" />
                Backend
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {['Node.js', 'Express', 'MongoDB', 'REST API'].map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 transform hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="text-center font-medium dark:text-white">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projetos Section */}
        <section id="projetos" className="mb-20 scroll-mt-20">
          <h3 className="text-2xl font-bold mb-6 dark:text-white flex items-center gap-2">
            <Terminal className="text-indigo-600 dark:text-indigo-400" />
            Projetos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="transform transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* Cursos Section */}
        <section id="cursos" className="mb-20 scroll-mt-20">
          <h3 className="text-2xl font-bold mb-6 dark:text-white flex items-center gap-2">
            <Code2 className="text-indigo-600 dark:text-indigo-400" />
            Cursos e Certificações
          </h3>
          <div className="space-y-4">
            {[
              {
                title: 'Introdução a POO',
                platform: 'Fundação Bradesco',
                year: '2024'
              },
              /* Adicionar mais cursos 
              {
                title: 'Advanced TypeScript Development',
                platform: 'Coursera',
                year: '2022'
              }*/
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold mb-2 dark:text-white">{course.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{course.platform}</p>
                <p className="text-gray-500 dark:text-gray-500">{course.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="mb-20 scroll-mt-20">
          <h3 className="text-2xl font-bold mb-6 dark:text-white flex items-center gap-2">
            <Mail className="text-indigo-600 dark:text-indigo-400" />
            Contato
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'guilhermetaicico@gmail.com', href: 'mailto:guilhermetaicico@gmail.com' },
                { icon: Linkedin, text: '/guitaicico', href: 'https://www.linkedin.com/in/guitaicico/' },
                { icon: Github, text: '/Guizin001', href: 'https://github.com/Guizin001' }
              ].map(({ icon: Icon, text, href }, index) => (
                <div
                  key={href}
                  className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t dark:border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Guilherme Taicico. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;