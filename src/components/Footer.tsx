import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Sobre mim', href: 'about' },
    { label: 'Projetos', href: 'projects' },
    { label: 'Habilidades', href: 'skills' },
    { label: 'Contato', href: 'contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-[#0077B5]'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter',
      color: 'hover:text-[#1DA1F2]'
    },
    {
      icon: Mail,
      href: 'mailto:joao@developer.com',
      label: 'Email',
      color: 'hover:text-[#FF6B6B]'
    }
  ];

  return (
    <footer className="bg-[#1E1E2E] border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-32 bg-gradient-to-b from-[#7159c1]/5 to-transparent rounded-full blur-3xl transform -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#7159c1] to-[#00D2D3] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">MM</span>
                </div>
                <span className="text-xl font-bold text-white">Matheus de Medeiros</span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Desenvolvedor full stack especializado em Angular e .NET, apaixonado por criar soluções digitais inovadoras. 
                Transformando ideias em realidade através de código limpo e arquitetura sólida.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => scrollToSection(href)}
                      className="text-gray-400 hover:text-[#00D2D3] transition-colors duration-300 text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <p>matheus@developer.com</p>
                <p>+55 (11) 99999-9999</p>
                <p>São Paulo, SP</p>
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#00D2D3] rounded-full animate-pulse"></div>
                    <span className="text-sm text-[#00D2D3]">Disponível para projetos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2025 Matheus de Medeiros. Feito com</span>
              <Heart className="w-4 h-4 text-[#FF6B6B] fill-current animate-pulse" />
              <span>em São Paulo</span>
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-[#00D2D3] hover:bg-white/5 transition-all duration-300 group"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] transition-transform duration-300" />
              Voltar ao topo
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}