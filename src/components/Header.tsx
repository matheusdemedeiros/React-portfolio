import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Download, Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#1E1E2E]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-r from-[#7159c1] to-[#00D2D3] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold">MM</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#00D2D3] transition-colors duration-300 relative group"
            >
              Sobre mim
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D2D3] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-[#00D2D3] transition-colors duration-300 relative group"
            >
              Projetos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D2D3] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-[#00D2D3] transition-colors duration-300 relative group"
            >
              Habilidades
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D2D3] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-[#00D2D3] transition-colors duration-300 relative group"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D2D3] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-gradient-to-r from-[#7159c1] to-[#00D2D3] hover:from-[#5a47a1] hover:to-[#00b8b9] text-white border-0 shadow-lg hover:shadow-[#7159c1]/25 transition-all duration-300 hover:scale-105">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#00D2D3] transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1E1E2E]/95 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-white hover:text-[#00D2D3] transition-colors duration-300 w-full text-left"
              >
                Sobre mim
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block px-3 py-2 text-white hover:text-[#00D2D3] transition-colors duration-300 w-full text-left"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block px-3 py-2 text-white hover:text-[#00D2D3] transition-colors duration-300 w-full text-left"
              >
                Habilidades
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-white hover:text-[#00D2D3] transition-colors duration-300 w-full text-left"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                <Button className="bg-gradient-to-r from-[#7159c1] to-[#00D2D3] hover:from-[#5a47a1] hover:to-[#00b8b9] text-white border-0 w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}