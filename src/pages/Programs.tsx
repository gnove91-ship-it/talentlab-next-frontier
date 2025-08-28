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
      id: 'orientacion',
      title: '🎓 Orientación preuniversitaria',
      description: 'Descubre tu camino académico y toma las mejores decisiones para tu futuro universitario.',
      duration: '6 semanas',
      format: 'Híbrido',
      level: 'Intermedio',
      rating: 4.9,
      students: 150,
      price: '299€',
      featured: true,
      highlights: [
        'Exploración de carreras',
        'Orientación vocacional',
        'Preparación para selectividad',
        'Técnicas de estudio avanzadas'
      ]
    },
    {
      id: 'finanzas',
      title: '💰 Educación financiera',
      description: 'Domina tus finanzas desde joven y construye una base sólida para tu independencia económica.',
      duration: '8 semanas',
      format: 'Online',
      level: 'Principiante',
      rating: 4.8,
      students: 200,
      price: '199€',
      featured: true,
      highlights: [
        'Presupuesto personal',
        'Ahorro e inversión',
        'Educación bursátil básica',
        'Planificación financiera'
      ]
    },
    {
      id: 'vida-laboral',
      title: '💼 Vida laboral',
      description: 'Prepárate para tu primer empleo y destaca en el mundo profesional desde el primer día.',
      duration: '10 semanas',
      format: 'Presencial',
      level: 'Intermedio',
      rating: 4.9,
      students: 95,
      price: '349€',
      featured: true,
      highlights: [
        'Búsqueda de empleo efectiva',
        'Elaboración de CV y LinkedIn',
        'Preparación para entrevistas',
        'Networking profesional'
      ]
    },
    {
      id: 'liderazgo',
      title: '🧭 Liderazgo & habilidades',
      description: 'Comunicación, colaboración y liderazgo aplicado para destacar en cualquier entorno.',
      duration: '12 semanas',
      format: 'Híbrido',
      level: 'Avanzado',
      rating: 4.7,
      students: 120,
      price: '449€',
      featured: false,
      highlights: [
        'Liderazgo transformacional',
        'Comunicación asertiva',
        'Trabajo en equipo',
        'Gestión de conflictos'
      ]
    },
    {
      id: 'inteligencia-artificial',
      title: '🤖 Introducción a la IA',
      description: 'Fundamentos de inteligencia artificial y sus aplicaciones prácticas.',
      duration: '8 semanas',
      format: 'Online',
      level: 'Intermedio',
      rating: 4.9,
      students: 85,
      price: '299€',
      featured: false,
      highlights: [
        'Machine Learning básico',
        'Herramientas de IA',
        'Ética en IA',
        'Aplicaciones prácticas'
      ]
    },
    {
      id: 'producto-digital',
      title: '📱 Creación de Producto Digital',
      description: 'Aprende a crear y lanzar productos digitales exitosos.',
      duration: '10 semanas',
      format: 'Híbrido',
      level: 'Avanzado',
      rating: 4.8,
      students: 65,
      price: '399€',
      featured: false,
      highlights: [
        'Diseño de producto',
        'Marketing digital',
        'Desarrollo ágil',
        'Estrategia de lanzamiento'
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
                  program.featured ? 'ring-2 ring-accent/20 shadow-accent' : ''
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
                      <div className="bg-accent text-primary px-2 py-1 rounded-full text-xs font-semibold">
                        Destacado
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  {/* Program Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="h-5 w-5 text-accent mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">{t.duration}</div>
                      <div className="text-sm font-medium text-primary">{program.duration}</div>
                    </div>
                    <div className="text-center">
                      <BookOpen className="h-5 w-5 text-accent mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">{t.format}</div>
                      <div className="text-sm font-medium text-primary">{program.format}</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-5 w-5 text-accent mx-auto mb-1" />
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
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Rating, Students, and Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-accent fill-current" />
                      <span className="text-sm font-medium text-primary">{program.rating}</span>
                      <span className="text-xs text-muted-foreground">({program.students})</span>
                    </div>
                    <div className="text-xl font-bold text-primary">{program.price}</div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2">
                    <Button 
                      variant={program.featured ? "accent" : "primary"} 
                      className="w-full group"
                      asChild
                    >
                      <Link to={`/programas/${program.id}`}>
                        Ver programa
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

    </div>
  );
};

export default Programs;