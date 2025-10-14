import { useState, useEffect } from 'react';
import { Menu, X, Zap, Home, Shield, Lightbulb, Smartphone, Wind, Camera, Lock, TrendingDown, Clock, Users, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-2 rounded-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                BSmart
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['Inicio', 'Servicios', 'Características', 'Nosotros', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              {['Inicio', 'Servicios', 'Características', 'Nosotros', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-cyan-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            <p className="text-cyan-400 text-sm font-semibold">Tecnología Inteligente para tu Hogar</p>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Creamos Experiencias
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Inteligentes
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformamos hogares y negocios en espacios inteligentes con soluciones de automatización que mejoran tu calidad de vida
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contacto')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Contáctanos</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Ver Servicios
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Home, label: 'Hogares Inteligentes' },
              { icon: Shield, label: 'Seguridad Total' },
              { icon: TrendingDown, label: 'Ahorro Energético' },
              { icon: Smartphone, label: 'Control Remoto' }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-block p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl mb-3 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <p className="text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Nuestros Servicios
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Soluciones integrales de automatización para tu hogar o negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: 'Iluminación Inteligente',
                description: 'Control total de la iluminación de tu hogar desde tu smartphone. Crea ambientes personalizados y ahorra energía.',
                gradient: 'from-yellow-500/10 to-orange-500/10',
                iconColor: 'text-yellow-400'
              },
              {
                icon: Wind,
                title: 'Control de Clima',
                description: 'Automatiza tu sistema de climatización para mantener la temperatura perfecta y optimizar el consumo energético.',
                gradient: 'from-cyan-500/10 to-blue-500/10',
                iconColor: 'text-cyan-400'
              },
              {
                icon: Camera,
                title: 'Seguridad Avanzada',
                description: 'Cámaras de vigilancia, alarmas inteligentes y monitoreo en tiempo real para proteger lo que más importa.',
                gradient: 'from-red-500/10 to-pink-500/10',
                iconColor: 'text-red-400'
              },
              {
                icon: Lock,
                title: 'Cerraduras Inteligentes',
                description: 'Control de acceso remoto, cerraduras digitales y gestión de permisos desde cualquier lugar.',
                gradient: 'from-purple-500/10 to-indigo-500/10',
                iconColor: 'text-purple-400'
              },
              {
                icon: Smartphone,
                title: 'Control Centralizado',
                description: 'Panel de control unificado para gestionar todos tus dispositivos inteligentes desde una sola aplicación.',
                gradient: 'from-green-500/10 to-emerald-500/10',
                iconColor: 'text-green-400'
              },
              {
                icon: Zap,
                title: 'Automatización Total',
                description: 'Crea escenas y rutinas automáticas que se adaptan a tu estilo de vida y optimizan tu día a día.',
                gradient: 'from-cyan-500/10 to-teal-500/10',
                iconColor: 'text-cyan-400'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative">
                  <div className="inline-block p-4 bg-slate-900/50 rounded-xl mb-6">
                    <service.icon className={`w-10 h-10 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="características" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ¿Por Qué BSmart?
              </span>
            </h2>
            <p className="text-xl text-gray-400">Las ventajas de elegir tecnología inteligente</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              {[
                {
                  icon: TrendingDown,
                  title: 'Ahorro Energético',
                  description: 'Reduce hasta un 30% tu consumo eléctrico con automatización inteligente que optimiza el uso de energía.'
                },
                {
                  icon: Shield,
                  title: 'Seguridad Mejorada',
                  description: 'Monitoreo 24/7, alertas en tiempo real y control total sobre la seguridad de tu hogar o negocio.'
                },
                {
                  icon: Clock,
                  title: 'Ahorra Tiempo',
                  description: 'Automatiza tareas rutinarias y controla todo desde tu smartphone, donde sea que estés.'
                },
                {
                  icon: Users,
                  title: 'Confort Familiar',
                  description: 'Crea el ambiente perfecto para cada momento del día con escenas personalizadas.'
                }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 border border-white/10">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      +50
                    </div>
                    <p className="text-gray-400">Proyectos Completados</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      5+
                    </div>
                    <p className="text-gray-400">Años Experiencia</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      30%
                    </div>
                    <p className="text-gray-400">Ahorro Energético</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      24/7
                    </div>
                    <p className="text-gray-400">Soporte Técnico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Sobre BSmart
                </span>
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Somos expertos en transformar espacios convencionales en entornos inteligentes que mejoran tu calidad de vida.
                </p>
                <p>
                  Con más de 5 años de experiencia en Guatemala, hemos ayudado a decenas de familias y empresas a disfrutar de los beneficios de la domótica y automatización.
                </p>
                <p>
                  Nuestro enfoque se centra en crear soluciones personalizadas que realmente se adapten a tus necesidades, combinando tecnología de vanguardia con diseño elegante y funcional.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {['Instalación Profesional', 'Soporte 24/7', 'Garantía Extendida', 'Asesoría Personalizada'].map((item, idx) => (
                  <div key={idx} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-white/10">
                <div className="flex items-center justify-center mb-8">
                  <div className="p-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl">
                    <Zap className="w-20 h-20 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Nuestra Misión</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Hacer que la tecnología inteligente sea accesible para todos, mejorando la vida de las personas a través de la innovación y el servicio de excelencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Contáctanos
              </span>
            </h2>
            <p className="text-xl text-gray-400">Estamos listos para hacer tu hogar más inteligente</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Teléfono</p>
                      <p className="text-lg font-semibold">+502 5414-9222</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <p className="text-lg font-semibold">info@bsmartgt.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Ubicación</p>
                      <p className="text-lg font-semibold">Guatemala</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-400 mb-4">Síguenos en redes sociales</p>
                  <p className="text-cyan-400 font-semibold">@bsmartgt</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-white/5">
              <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="+502 1234-5678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                BSmart Guatemala
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; 2024 BSmart. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
