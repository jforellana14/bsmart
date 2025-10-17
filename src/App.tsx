import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Zap, Shield, Lightbulb, Wind, Wifi, TrendingDown, Users, Clock, Award } from 'lucide-react';

const slides = [
  {
    id: 1,
    type: 'cover',
    title: 'BSmart',
    subtitle: 'Residencias Inteligentes – Armonía Conectada',
    description: 'Propuesta de Integración de Espacios Inteligentes',
    gradient: 'from-blue-600 via-cyan-500 to-teal-400'
  },
  {
    id: 2,
    type: 'vision',
    title: 'Nuestra Visión',
    subtitle: 'Transformando Espacios en Experiencias',
    content: 'Convertir el proyecto residencial en un ecosistema donde la tecnología sea invisible pero omnipresente, promoviendo un equilibrio perfecto entre comodidad diaria y sostenibilidad.',
    points: [
      'Automatización que reduce el estrés diario',
      'Tecnología que potencia la tranquilidad',
      'Un hogar atemporal que aprende de ti'
    ],
    gradient: 'from-slate-900 via-blue-900 to-slate-900'
  },
  {
    id: 3,
    type: 'benefits',
    title: 'Beneficios Clave',
    subtitle: 'Elevando la Experiencia Residencial',
    benefits: [
      {
        icon: Home,
        title: 'Tranquilidad',
        description: 'Automatización que reduce estrés. Luces que simulan atardeceres para mejorar el sueño.',
        color: 'text-blue-400'
      },
      {
        icon: Shield,
        title: 'Seguridad',
        description: 'Monitoreo proactivo sin invasión de privacidad. Tu hogar siempre protegido.',
        color: 'text-cyan-400'
      },
      {
        icon: Users,
        title: 'Convivencia',
        description: 'Espacios comunes que fomentan interacciones naturales mediante controles intuitivos.',
        color: 'text-teal-400'
      },
      {
        icon: TrendingDown,
        title: 'Sostenibilidad',
        description: 'Reducción de hasta 30% en consumo energético, alineado con diseños ecológicos.',
        color: 'text-green-400'
      }
    ],
    gradient: 'from-slate-900 to-blue-950'
  },
  {
    id: 4,
    type: 'solutions',
    title: 'Soluciones Tecnológicas',
    subtitle: 'Componentes del Ecosistema Inteligente',
    solutions: [
      {
        icon: Lightbulb,
        title: 'Iluminación Inteligente',
        description: 'Control automático que se adapta a tu ritmo circadiano'
      },
      {
        icon: Wind,
        title: 'Clima Automatizado',
        description: 'Temperatura perfecta en cada espacio, optimizando energía'
      },
      {
        icon: Wifi,
        title: 'Cortinas Motorizadas',
        description: 'Privacidad y luz natural controladas desde tu smartphone'
      },
      {
        icon: Zap,
        title: 'Panel Centralizado',
        description: 'Control total de todos los aparatos desde una sola interfaz'
      }
    ],
    gradient: 'from-blue-950 via-slate-900 to-cyan-950'
  },
  {
    id: 5,
    type: 'implementation',
    title: 'Implementación',
    subtitle: 'Proceso Profesional y Sin Complicaciones',
    phases: [
      {
        number: '01',
        title: 'Diseño y Pruebas',
        duration: '1-2 meses',
        description: 'Auditoría del edificio e integración durante la fase de obra. Prototipo en apartamento piloto.'
      },
      {
        number: '02',
        title: 'Instalación',
        duration: '2-3 meses',
        description: 'Por fases, minimizando disrupciones. Costo: $5,000-15,000 USD por unidad.'
      },
      {
        number: '03',
        title: 'Soporte Continuo',
        duration: 'Permanente',
        description: 'Tutoriales, mantenimiento 24/7 y garantía de 5 años.'
      }
    ],
    gradient: 'from-slate-900 to-blue-900'
  },
  {
    id: 6,
    type: 'why-bsmart',
    title: '¿Por Qué BSmart?',
    subtitle: 'Tu Socio Ideal en Automatización',
    features: [
      {
        icon: Award,
        stat: '+50',
        label: 'Proyectos Residenciales'
      },
      {
        icon: Clock,
        stat: '5 años',
        label: 'Garantía Completa'
      },
      {
        icon: TrendingDown,
        stat: '30%',
        label: 'Ahorro Energético'
      },
      {
        icon: Zap,
        stat: '24/7',
        label: 'Soporte Técnico'
      }
    ],
    description: 'Creamos espacios que no solo son inteligentes, sino empáticos – aprendiendo de los residentes para anticipar necesidades.',
    gradient: 'from-blue-950 via-cyan-950 to-teal-950'
  },
  {
    id: 7,
    type: 'closing',
    title: 'Hagamos Realidad tu Visión',
    subtitle: 'El Futuro de la Vida Residencial',
    cta: 'Contáctanos para una reunión virtual',
    points: [
      'Presupuesto detallado personalizado',
      'Mockup 3D de apartamento inteligente',
      'Consultoría especializada en seguridad',
      'Demo interactiva de nuestras soluciones'
    ],
    gradient: 'from-cyan-600 via-blue-600 to-indigo-600'
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className={`min-h-screen bg-gradient-to-br ${slide.gradient} transition-all duration-700`}>
        <div className="min-h-screen flex flex-col">
          {/* Slide Content */}
          <div className="flex-1 flex items-center justify-center p-8 md:p-16">
            <div className="max-w-6xl w-full">
              {slide.type === 'cover' && (
                <div className="text-center space-y-8 animate-fade-in">
                  <div className="inline-block">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <Zap className="w-16 h-16 text-white animate-pulse" />
                      <h1 className="text-7xl md:text-9xl font-bold tracking-tight">{slide.title}</h1>
                    </div>
                    <div className="h-1 bg-white/30 rounded-full"></div>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-light text-white/90">{slide.subtitle}</h2>
                  <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">{slide.description}</p>
                  <div className="pt-8">
                    <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                      <p className="text-sm text-white/80">Presiona → o Espacio para continuar</p>
                    </div>
                  </div>
                </div>
              )}

              {slide.type === 'vision' && (
                <div className="space-y-12 animate-fade-in">
                  <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold">{slide.title}</h1>
                    <p className="text-2xl text-white/70">{slide.subtitle}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
                    <p className="text-2xl md:text-3xl leading-relaxed text-white/90 mb-8">{slide.content}</p>
                    <div className="grid md:grid-cols-3 gap-6">
                      {slide.points.map((point, idx) => (
                        <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10 transform transition-transform hover:scale-105">
                          <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                          </div>
                          <p className="text-lg text-white/90">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {slide.type === 'benefits' && (
                <div className="space-y-12 animate-fade-in">
                  <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold">{slide.title}</h1>
                    <p className="text-2xl text-white/70">{slide.subtitle}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {slide.benefits.map((benefit, idx) => (
                      <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transform transition-all hover:scale-105 hover:bg-white/10">
                        <benefit.icon className={`w-16 h-16 mb-6 ${benefit.color}`} />
                        <h3 className="text-3xl font-bold mb-4">{benefit.title}</h3>
                        <p className="text-lg text-white/70 leading-relaxed">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === 'solutions' && (
                <div className="space-y-12 animate-fade-in">
                  <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold">{slide.title}</h1>
                    <p className="text-2xl text-white/70">{slide.subtitle}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {slide.solutions.map((solution, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transform transition-all hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className="bg-cyan-500/20 p-4 rounded-xl">
                            <solution.icon className="w-8 h-8 text-cyan-300" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                            <p className="text-white/70 text-lg">{solution.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === 'implementation' && (
                <div className="space-y-12 animate-fade-in">
                  <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold">{slide.title}</h1>
                    <p className="text-2xl text-white/70">{slide.subtitle}</p>
                  </div>
                  <div className="space-y-6">
                    {slide.phases.map((phase, idx) => (
                      <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transform transition-all hover:bg-white/10">
                        <div className="flex items-start space-x-6">
                          <div className="text-6xl font-bold text-cyan-400/30">{phase.number}</div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-3xl font-bold">{phase.title}</h3>
                              <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300 text-sm font-semibold">
                                {phase.duration}
                              </span>
                            </div>
                            <p className="text-lg text-white/70">{phase.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.type === 'why-bsmart' && (
                <div className="space-y-12 animate-fade-in">
                  <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold">{slide.title}</h1>
                    <p className="text-2xl text-white/70">{slide.subtitle}</p>
                  </div>
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center transform transition-all hover:scale-110">
                        <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-cyan-300 mb-2">{feature.stat}</div>
                        <p className="text-white/70">{feature.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
                    <p className="text-2xl text-white/90 leading-relaxed text-center">{slide.description}</p>
                  </div>
                </div>
              )}

              {slide.type === 'closing' && (
                <div className="text-center space-y-12 animate-fade-in">
                  <div className="space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold">{slide.title}</h1>
                    <p className="text-3xl text-white/80">{slide.subtitle}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 max-w-3xl mx-auto">
                    <div className="text-4xl font-bold mb-8">{slide.cta}</div>
                    <div className="space-y-4">
                      {slide.points.map((point, idx) => (
                        <div key={idx} className="flex items-center space-x-4 text-left bg-white/5 rounded-xl p-4">
                          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                          <p className="text-xl text-white/90">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-8">
                    <Zap className="w-24 h-24 text-white/50 mx-auto animate-pulse" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="p-8">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all border border-white/20 disabled:opacity-30"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex items-center space-x-3">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentSlide ? 1 : -1);
                      setCurrentSlide(idx);
                    }}
                    className={`transition-all rounded-full ${
                      idx === currentSlide
                        ? 'w-12 h-3 bg-white'
                        : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all border border-white/20 disabled:opacity-30"
                disabled={currentSlide === slides.length - 1}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
