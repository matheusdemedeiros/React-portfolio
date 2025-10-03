import { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profile from "./../assets/profile.png";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(113, 89, 193, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-[#0077B5]' },
    { icon: Mail, href: '#', label: 'Email', color: 'hover:text-[#FF6B6B]' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7159c1] via-[#1E1E2E] to-black"></div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full p-1 bg-gradient-to-r from-[#7159c1] to-[#00D2D3] shadow-2xl hover:scale-105 transition-transform duration-300">
                <ImageWithFallback
                  src={profile}
                  alt="Matheus de Medeiros"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00D2D3] rounded-full animate-pulse shadow-lg shadow-[#00D2D3]/50"></div>
            </div>
          </div>

          {/* Main Text */}
          <div className="mb-8 space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Olá, eu sou{' '}
              <span className="bg-gradient-to-r from-[#7159c1] to-[#00D2D3] bg-clip-text text-transparent">
                Matheus de Medeiros
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium">
              Desenvolvedor Full Stack
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Apaixonado por criar soluções digitais inovadoras que transformam ideias em experiências extraordinárias
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-[#7159c1] to-[#00D2D3] hover:from-[#5a47a1] hover:to-[#00b8b9] text-white border-0 shadow-xl hover:shadow-[#7159c1]/25 transition-all duration-300 hover:scale-105 px-8 py-3 text-lg"
            >
              Ver Projetos
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-[#00D2D3] transition-all duration-300 hover:scale-105 px-8 py-3 text-lg"
            >
              Entrar em Contato
            </Button>
          </div>

          {/* Social Links */}
          <div className="mb-16 flex justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 ${color} transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-lg`}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/60 hover:text-[#00D2D3] transition-colors duration-300"
              aria-label="Scroll para próxima seção"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}