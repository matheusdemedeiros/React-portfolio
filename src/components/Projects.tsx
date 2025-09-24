import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Sistema ERP Empresarial',
      description: 'Sistema completo de gestão empresarial com módulos de vendas, estoque, financeiro e relatórios avançados.',
      image: 'https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRhc2hib2FyZCUyMG1vZGVybnxlbnwxfHx8fDE3NTg3MzI4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Entity Framework', 'Chart.js'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Plataforma de analytics com visualizações em tempo real e relatórios personalizáveis para tomada de decisões.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4NjQ0NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Angular', 'TypeScript', '.NET 8', 'PostgreSQL'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Sistema de CRM',
      description: 'Plataforma completa de gestão de relacionamento com clientes, vendas e pipeline comercial.',
      image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3NwYWNlJTIwY29kaW5nJTIwc2V0dXB8ZW58MXx8fHwxNzU4NzMyODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Angular', 'C#', 'ASP.NET Core', 'MySQL'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'API de E-commerce',
      description: 'API robusta para e-commerce com autenticação JWT, pagamentos e gestão completa de produtos.',
      image: 'https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRhc2hib2FyZCUyMG1vZGVybnxlbnwxfHx8fDE3NTg3MzI4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['.NET Core', 'Web API', 'SQL Server', 'Swagger'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Portal Administrativo',
      description: 'Sistema web para administração de usuários, perfis e permissões com interface moderna e responsiva.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4NjQ0NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Angular', 'RxJS', '.NET 8', 'Identity Server'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Sistema de Relatórios',
      description: 'Plataforma de geração de relatórios customizáveis com exportação para PDF e Excel.',
      image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3NwYWNlJTIwY29kaW5nJTIwc2V0dXB8ZW58MXx8fHwxNzU4NzMyODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Angular', 'TypeScript', '.NET Core', 'Crystal Reports'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#1E1E2E] to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-[#7159c1]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-[#00D2D3]/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Meus <span className="bg-gradient-to-r from-[#7159c1] to-[#00D2D3] bg-clip-text text-transparent">Projetos</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes e impactantes
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-[#7159c1]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#7159c1]/10 ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-[#7159c1] to-[#00D2D3] text-white border-0">
                      Destaque
                    </Badge>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                      project.featured ? 'h-64' : 'h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <Button 
                        size="sm" 
                        className="bg-[#7159c1] hover:bg-[#5a47a1] text-white border-0 shadow-lg"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-white/30 text-white hover:bg-white/10"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D2D3] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-white/10 text-white border-white/20 hover:bg-[#7159c1]/20 hover:border-[#7159c1]/50 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              Gostou do que viu? Vamos conversar sobre seu próximo projeto!
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-[#7159c1] to-[#00D2D3] hover:from-[#5a47a1] hover:to-[#00b8b9] text-white border-0 shadow-xl hover:shadow-[#7159c1]/25 transition-all duration-300 hover:scale-105 px-8 py-3"
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}