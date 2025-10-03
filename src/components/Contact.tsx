import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Mensagem enviada com sucesso! Retornarei em breve.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'matheusdemedeiros200599@gmail.com',
      href: 'mailto:matheusdemedeiros200599@gmail.com',
      color: 'text-[#FF6B6B]'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (49) 99974-9469',
      href: 'tel:+5549999749469',
      color: 'text-[#00D2D3]'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Lages, SC - Brasil',
      href: '#',
      color: 'text-[#7159c1]'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-[#0077B5]'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-[#1E1E2E] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#7159c1]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#00D2D3]/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Vamos trabalhar <span className="bg-gradient-to-r from-[#7159c1] to-[#00D2D3] bg-clip-text text-transparent">juntos?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tenho uma ideia incrível ou um projeto desafiador? Entre em contato e vamos transformar sua visão em realidade!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Envie uma mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#7159c1] focus:ring-[#7159c1]/20"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#7159c1] focus:ring-[#7159c1]/20"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#7159c1] focus:ring-[#7159c1]/20 resize-none"
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#7159c1] to-[#00D2D3] hover:from-[#5a47a1] hover:to-[#00b8b9] text-white border-0 shadow-xl hover:shadow-[#7159c1]/25 transition-all duration-300 hover:scale-105 py-6"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Informações de contato</h3>
                <div className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className={`p-3 rounded-full bg-gradient-to-r from-[#7159c1]/20 to-[#00D2D3]/20 ${color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{label}</div>
                        <div className="text-white font-medium">{value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`p-3 rounded-full bg-white/10 border border-white/20 text-gray-300 ${color} transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-lg`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-[#7159c1]/10 to-[#00D2D3]/10 rounded-xl border border-[#7159c1]/20 p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-[#00D2D3] rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Status</span>
                </div>
                <p className="text-gray-300">
                  🚀 <strong className="text-[#00D2D3]">Disponível</strong> para novos projetos freelance e oportunidades full-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}