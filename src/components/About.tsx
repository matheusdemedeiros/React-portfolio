import { Code, Lightbulb, Palette, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const highlights = [
    {
      icon: Code,
      text: 'Código limpo',
      color: 'text-[#7159c1]'
    },
    {
      icon: Lightbulb,
      text: 'Inovação',
      color: 'text-[#00D2D3]'
    },
    {
      icon: Palette,
      text: 'Design',
      color: 'text-[#FF6B6B]'
    },
    {
      icon: Zap,
      text: 'Performance',
      color: 'text-[#7159c1]'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#1E1E2E] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#7159c1]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00D2D3]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Sobre <span className="bg-gradient-to-r from-[#7159c1] to-[#00D2D3] bg-clip-text text-transparent">Mim</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Desenvolvedor apaixonado por tecnologia e inovação
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#7159c1] to-[#00D2D3] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-[#1E1E2E] rounded-lg p-1">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3NwYWNlJTIwY29kaW5nJTIwc2V0dXB8ZW58MXx8fHwxNzU4NzMyODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Workspace de desenvolvimento"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-300 max-w-none">
                <p className="text-lg leading-relaxed">
                  Sou um desenvolvedor <span className="text-[#7159c1] font-semibold">full stack</span> com mais de 3 anos de experiência 
                  criando soluções digitais que fazem a diferença. Minha paixão por tecnologia começou cedo, 
                  e desde então venho me dedicando a transformar ideias complexas em produtos simples e elegantes.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Especializado em <span className="text-[#00D2D3] font-semibold">Angular, .NET e C#</span>, 
                  acredito que a melhor tecnologia é aquela que resolve problemas reais de forma eficiente. 
                  Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map(({ icon: Icon, text, color }) => (
                  <div 
                    key={text}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                    <span className="text-white font-medium">{text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#7159c1] mb-1">3+</div>
                  <div className="text-sm text-gray-400">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00D2D3] mb-1">50+</div>
                  <div className="text-sm text-gray-400">Projetos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF6B6B] mb-1">100%</div>
                  <div className="text-sm text-gray-400">Satisfação Cliente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}