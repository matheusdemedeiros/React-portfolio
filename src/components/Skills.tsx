import { useState, useEffect, useRef } from 'react';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-[#7159c1] to-[#9575f7]',
      skills: [
        { name: 'Angular', level: 95, icon: '🅰️' },
        { name: 'TypeScript', level: 92, icon: '🔷' },
        { name: 'HTML5/CSS3', level: 90, icon: '🎨' },
        { name: 'Bootstrap', level: 85, icon: '🟣' },
        { name: 'RxJS', level: 88, icon: '🔄' }
      ]
    },
    {
      title: 'Backend',
      color: 'from-[#00D2D3] to-[#4fd1c7]',
      skills: [
        { name: '.NET Core', level: 92, icon: '🟦' },
        { name: 'C#', level: 90, icon: '🔷' },
        { name: 'ASP.NET', level: 88, icon: '🌐' },
        { name: 'Entity Framework', level: 85, icon: '📊' },
        { name: 'Web API', level: 87, icon: '🚀' }
      ]
    },
    {
      title: 'Database & Tools',
      color: 'from-[#FF6B6B] to-[#ff8e8e]',
      skills: [
        { name: 'SQL Server', level: 88, icon: '🗄️' },
        { name: 'PostgreSQL', level: 82, icon: '🐘' },
        { name: 'Git', level: 90, icon: '📝' },
        { name: 'Docker', level: 75, icon: '🐳' }
      ]
    }
  ];

  const tools = [
    'Visual Studio', 'VS Code', 'Git', 'GitHub', 'Postman', 'Swagger', 'SSMS', 'Azure',
    'IIS', 'Angular CLI', 'NuGet', 'xUnit', 'Serilog', 'AutoMapper', 'JWT', 'LINQ'
  ];

  const SkillBar = ({ skill, color, delay }: { skill: any; color: string; delay: number }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setAnimatedLevel(skill.level);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.level, delay]);

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg">{skill.icon}</span>
            <span className="text-white font-medium">{skill.name}</span>
          </div>
          <span className="text-gray-400 text-sm">{animatedLevel}%</span>
        </div>
        <div className="relative">
          <div className="w-full bg-white/10 rounded-full h-2">
            <div 
              className={`h-2 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out relative overflow-hidden`}
              style={{ width: `${animatedLevel}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-br from-[#7159c1]/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#00D2D3]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Minhas <span className="bg-gradient-to-r from-[#7159c1] to-[#00D2D3] bg-clip-text text-transparent">Habilidades</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="bg-white/5 rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
              >
                <div className="mb-6">
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                    {category.title}
                  </h3>
                  <div className={`w-12 h-1 bg-gradient-to-r ${category.color} rounded-full`}></div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name}
                      skill={skill}
                      color={category.color}
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-8">Ferramentas & Tecnologias</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <Badge 
                  key={tool}
                  className="bg-white/10 text-white border-white/20 hover:bg-gradient-to-r hover:from-[#7159c1]/20 hover:to-[#00D2D3]/20 hover:border-[#7159c1]/50 transition-all duration-300 hover:scale-110 px-4 py-2 text-base"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '3+', label: 'Anos de Experiência', color: 'text-[#7159c1]' },
              { number: '50+', label: 'Projetos Concluídos', color: 'text-[#00D2D3]' },
              { number: '15+', label: 'Tecnologias', color: 'text-[#FF6B6B]' },
              { number: '100%', label: 'Código Limpo', color: 'text-[#7159c1]' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}