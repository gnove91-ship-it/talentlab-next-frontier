import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, Users, BookOpen, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';

const ProgramDetail: React.FC = () => {
  const { programId } = useParams<{ programId: string }>();
  const { t } = useLanguage();

  const programs = {
    'orientacion': {
      id: 'orientacion',
      title: '🎓 Orientación preuniversitaria',
      description: 'Descubre tu camino académico y toma las mejores decisiones para tu futuro universitario.',
      fullDescription: 'Este programa está diseñado para ayudarte a tomar las decisiones más importantes de tu vida académica. Te guiaremos en el proceso de autoconocimiento, exploración de carreras y preparación para la universidad.',
      duration: '6 semanas',
      format: 'Híbrido',
      level: 'Intermedio',
      rating: 4.9,
      students: 150,
      price: '299€',
      modules: [
        'Autoconocimiento y habilidades',
        'Exploración de carreras universitarias',
        'Técnicas de estudio avanzadas',
        'Preparación para selectividad',
        'Orientación vocacional personalizada',
        'Planificación del futuro académico'
      ],
      benefits: [
        'Claridad sobre tu vocación profesional',
        'Mejores técnicas de estudio',
        'Preparación integral para selectividad',
        'Orientación personalizada',
        'Conexión con profesionales del sector'
      ]
    },
    'finanzas': {
      id: 'finanzas',
      title: '💰 Educación financiera',
      description: 'Domina tus finanzas desde joven y construye una base sólida para tu independencia económica.',
      fullDescription: 'Aprende los fundamentos de las finanzas personales desde una edad temprana. Este programa te dará las herramientas necesarias para tomar decisiones financieras inteligentes toda tu vida.',
      duration: '8 semanas',
      format: 'Online',
      level: 'Principiante',
      rating: 4.8,
      students: 200,
      price: '199€',
      modules: [
        'Fundamentos de educación financiera',
        'Presupuesto personal y familiar',
        'Ahorro e inversión para jóvenes',
        'Introducción a los mercados financieros',
        'Criptomonedas y finanzas digitales',
        'Planificación financiera a largo plazo'
      ],
      benefits: [
        'Control total de tus finanzas personales',
        'Capacidad de ahorro e inversión',
        'Comprensión de los mercados financieros',
        'Independencia económica temprana',
        'Herramientas para la vida adulta'
      ]
    },
    'vida-laboral': {
      id: 'vida-laboral',
      title: '💼 Vida laboral',
      description: 'Prepárate para tu primer empleo y destaca en el mundo profesional desde el primer día.',
      fullDescription: 'Tu transición al mundo laboral no tiene por qué ser difícil. Te preparamos con todas las herramientas y habilidades necesarias para destacar desde tu primer día de trabajo.',
      duration: '10 semanas',
      format: 'Presencial',
      level: 'Intermedio',
      rating: 4.9,
      students: 95,
      price: '349€',
      modules: [
        'Búsqueda de empleo estratégica',
        'Elaboración de CV y carta de presentación',
        'Optimización del perfil de LinkedIn',
        'Preparación para entrevistas de trabajo',
        'Networking profesional efectivo',
        'Adaptación al entorno laboral'
      ],
      benefits: [
        'Mayor empleabilidad',
        'Preparación completa para entrevistas',
        'Red de contactos profesionales',
        'Presencia digital profesional',
        'Confianza en el entorno laboral'
      ]
    },
    'liderazgo': {
      id: 'liderazgo',
      title: '🧭 Liderazgo & habilidades',
      description: 'Comunicación, colaboración y liderazgo aplicado para destacar en cualquier entorno.',
      fullDescription: 'Desarrolla las habilidades de liderazgo y comunicación que te diferenciarán en cualquier ámbito. Este programa te convertirá en un líder natural capaz de inspirar y guiar a otros.',
      duration: '12 semanas',
      format: 'Híbrido',
      level: 'Avanzado',
      rating: 4.7,
      students: 120,
      price: '449€',
      modules: [
        'Fundamentos del liderazgo moderno',
        'Comunicación asertiva y efectiva',
        'Trabajo en equipo y colaboración',
        'Gestión de conflictos',
        'Inteligencia emocional aplicada',
        'Liderazgo en entornos digitales'
      ],
      benefits: [
        'Habilidades de liderazgo comprobadas',
        'Comunicación efectiva en cualquier contexto',
        'Capacidad de inspirar y motivar',
        'Gestión exitosa de equipos',
        'Presencia y carisma personal'
      ]
    }
  };

  const program = programs[programId as keyof typeof programs];

  if (!program) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Programa no encontrado</h1>
          <Button asChild>
            <Link to="/programas">Volver a Programas</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Breadcrumb */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-smooth">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/programas" className="hover:text-primary transition-smooth">Programas</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">{program.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">
              {program.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 slide-in-up">
              {program.fullDescription}
            </p>
            
            {/* Program Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Clock className="h-8 w-8 text-gold mx-auto mb-2" />
                <div className="text-sm text-primary-foreground/80">Duración</div>
                <div className="text-lg font-semibold">{program.duration}</div>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-gold mx-auto mb-2" />
                <div className="text-sm text-primary-foreground/80">Formato</div>
                <div className="text-lg font-semibold">{program.format}</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-gold mx-auto mb-2" />
                <div className="text-sm text-primary-foreground/80">Nivel</div>
                <div className="text-lg font-semibold">{program.level}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gold" 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar información
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button variant="outline_gold" size="lg" asChild>
                <Link to="/programas">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Volver a Programas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Modules */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Módulos del Programa</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {program.modules.map((module, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{module}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">¿Qué conseguirás?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {program.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary fade-in">
            ¿Listo para transformar tu futuro?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            No esperes más para dar el paso que cambiará tu vida. Únete a nuestro programa y comienza tu transformación hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar información
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{program.price}</div>
              <div className="text-sm text-muted-foreground">Inversión total</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;