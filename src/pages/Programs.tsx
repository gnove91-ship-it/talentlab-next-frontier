import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, Users, BookOpen, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs: React.FC = () => {
  const { t } = useLanguage();

  const allPrograms = [
    {
      id: 'liderazgo',
      title: 'Liderazgo y Gestión',
      description: 'Desarrolla habilidades de liderazgo para dirigir equipos de alto rendimiento y crear un impacto positivo en tu organización.',
      duration: '8 semanas',
      format: 'Híbrido',
      level: 'Intermedio',
      rating: 4.9,
      students: 150,
      price: '299€',
      featured: true,
      highlights: [
        'Gestión de equipos',
        'Comunicación efectiva',
        'Toma de decisiones',
        'Inteligencia emocional'
      ]
    },
    {
      id: 'finanzas',
      title: 'Finanzas Personales',
      description: 'Aprende a gestionar tus finanzas personales, invertir inteligentemente y planificar tu futuro económico.',
      duration: '6 semanas',
      format: 'Online',
      level: 'Principiante',
      rating: 4.8,
      students: 200,
      price: '199€',
      featured: false,
      highlights: [
        'Presupuesto familiar',
        'Inversiones básicas',
        'Planificación financiera',
        'Gestión de deudas'
      ]
    },
    {
      id: 'digital',
      title: 'Marketing Digital',
      description: 'Domina las estrategias de marketing digital más efectivas y aprende a crear campañas exitosas.',
      duration: '10 semanas',
      format: 'Presencial',
      level: 'Avanzado',
      rating: 4.9,
      students: 95,
      price: '449€',
      featured: true,
      highlights: [
        'SEO y SEM',
        'Social Media Marketing',
        'Email Marketing',
        'Analytics y métricas'
      ]
    },
    {
      id: 'emprendimiento',
      title: 'Emprendimiento',
      description: 'Convierte tu idea en un negocio exitoso con metodologías probadas y herramientas prácticas.',
      duration: '12 semanas',
      format: 'Híbrido',
      level: 'Intermedio',
      rating: 4.7,
      students: 120,
      price: '399€',
      featured: false,
      highlights: [
        'Business Model Canvas',
        'Validación de ideas',
        'Financiación y inversión',
        'Estrategia de crecimiento'
      ]
    },
    {
      id: 'productividad',
      title: 'Productividad Personal',
      description: 'Optimiza tu tiempo y energía para alcanzar tus objetivos de manera más eficiente.',
      duration: '4 semanas',
      format: 'Online',
      level: 'Principiante',
      rating: 4.6,
      students: 180,
      price: '149€',
      featured: false,
      highlights: [
        'Gestión del tiempo',
        'Organización personal',
        'Hábitos productivos',
        'Técnicas de concentración'
      ]
    },
    {
      id: 'comunicacion',
      title: 'Comunicación Efectiva',
      description: 'Mejora tus habilidades de comunicación para destacar en tu carrera profesional.',
      duration: '6 semanas',
      format: 'Híbrido',
      level: 'Intermedio',
      rating: 4.8,
      students: 140,
      price: '249€',
      featured: false,
      highlights: [
        'Oratoria y presentaciones',
        'Comunicación asertiva',
        'Negociación',
        'Comunicación intercultural'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">
            {t.programsTitle}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto slide-in-up">
            {t.programsSubtitle}
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPrograms.map((program, index) => (
              <Card 
                key={program.id} 
                className={`hover-lift transition-smooth ${
                  program.featured ? 'ring-2 ring-gold/20 shadow-gold' : ''
                } slide-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 text-primary">
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {program.description}
                      </CardDescription>
                    </div>
                    {program.featured && (
                      <div className="bg-gold text-primary px-2 py-1 rounded-full text-xs font-semibold">
                        Destacado
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  {/* Program Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="h-5 w-5 text-gold mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">{t.duration}</div>
                      <div className="text-sm font-medium text-primary">{program.duration}</div>
                    </div>
                    <div className="text-center">
                      <BookOpen className="h-5 w-5 text-gold mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">{t.format}</div>
                      <div className="text-sm font-medium text-primary">{program.format}</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-5 w-5 text-gold mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">{t.level}</div>
                      <div className="text-sm font-medium text-primary">{program.level}</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">Contenido destacado:</h4>
                    <ul className="space-y-1">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-gold mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Rating, Students, and Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-gold fill-current" />
                      <span className="text-sm font-medium text-primary">{program.rating}</span>
                      <span className="text-xs text-muted-foreground">({program.students})</span>
                    </div>
                    <div className="text-xl font-bold text-primary">{program.price}</div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2">
                    <Button 
                      variant={program.featured ? "gold" : "primary"} 
                      className="w-full group"
                      asChild
                    >
                      <Link to={`/programs/${program.id}`}>
                        {t.learnMore}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      asChild
                    >
                      <Link to="/contact">
                        {t.requestInfo}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary fade-in">
            ¿No encuentras el programa que buscas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contáctanos y te ayudaremos a encontrar la formación perfecta para tus objetivos
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link to="/contact">
              Contáctanos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Programs;