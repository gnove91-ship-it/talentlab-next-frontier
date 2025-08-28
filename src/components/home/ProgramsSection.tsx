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
      id: 'orientacion',
      title: '🎓 Orientación preuniversitaria',
      description: 'Descubre tu camino académico.',
      duration: '8 sesiones',
      format: 'Online',
      age: '16-18 años',
      featured: false,
      cta: 'Ver programa'
    },
    {
      id: 'finanzas',
      title: '💰 Educación financiera',
      description: 'Domina tus finanzas desde joven.',
      duration: '6 sesiones',
      format: 'Online + Presencial',
      age: '14-18 años',
      featured: true,
      cta: 'Ver programa'
    },
    {
      id: 'vida-laboral',
      title: '💼 Vida laboral',
      description: 'Prepárate para tu primer empleo.',
      duration: '10 sesiones',
      format: 'Online',
      age: '17-22 años',
      featured: false,
      cta: 'Ver programa'
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t.programsSubtitle}
          </p>
          
          {/* View All Programs Button - Moved Above Cards */}
          <div className="mb-8">
            <Button 
              variant="accent" 
              size="lg"
              asChild
              className="shadow-accent hover:shadow-elegant transition-all duration-300"
            >
              <Link to="/programas">
                Ver todos los programas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
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
                    <div className="text-xs text-muted-foreground">Sesiones</div>
                    <div className="text-sm font-medium text-primary">{program.format}</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-accent mx-auto mb-1" />
                    <div className="text-xs text-muted-foreground">Edad</div>
                    <div className="text-sm font-medium text-primary">{program.age}</div>
                  </div>
                </div>


                {/* CTA Button */}
                <Button 
                  variant={program.featured ? "accent" : "primary"} 
                  className="w-full group"
                  asChild={program.cta !== 'Solicitar información'}
                  onClick={program.cta === 'Solicitar información' ? () => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  } : undefined}
                >
                  {program.cta === 'Solicitar información' ? (
                    <>
                      {program.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                    </>
                  ) : (
                    <Link to={`/programas/${program.id}`}>
                      {program.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                    </Link>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};