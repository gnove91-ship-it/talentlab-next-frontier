import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, Users, BookOpen, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProgramsSection: React.FC = () => {
  const { t } = useLanguage();

  const programs = [
    {
      id: 'liderazgo',
      title: 'Liderazgo y Gestión',
      description: 'Desarrolla habilidades de liderazgo para dirigir equipos de alto rendimiento.',
      duration: '8 semanas',
      format: 'Híbrido',
      level: 'Intermedio',
      rating: 4.9,
      students: 150,
      featured: true,
    },
    {
      id: 'finanzas',
      title: 'Finanzas Personales',
      description: 'Aprende a gestionar tus finanzas personales y planificar tu futuro económico.',
      duration: '6 semanas',
      format: 'Online',
      level: 'Principiante',
      rating: 4.8,
      students: 200,
      featured: false,
    },
    {
      id: 'digital',
      title: 'Marketing Digital',
      description: 'Domina las estrategias de marketing digital más efectivas del mercado.',
      duration: '10 semanas',
      format: 'Presencial',
      level: 'Avanzado',
      rating: 4.9,
      students: 95,
      featured: true,
    },
    {
      id: 'emprendimiento',
      title: 'Emprendimiento',
      description: 'Convierte tu idea en un negocio exitoso con metodologías probadas.',
      duration: '12 semanas',
      format: 'Híbrido',
      level: 'Intermedio',
      rating: 4.7,
      students: 120,
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            {t.programsTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.programsSubtitle}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
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

                {/* Rating and Students */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-gold fill-current" />
                    <span className="text-sm font-medium text-primary">{program.rating}</span>
                    <span className="text-xs text-muted-foreground">({program.students} estudiantes)</span>
                  </div>
                </div>

                {/* CTA Button */}
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Programs Button */}
        <div className="text-center fade-in">
          <Button variant="outline_gold" size="lg" asChild className="group">
            <Link to="/programs">
              Ver Todos los Programas
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};