import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'María González',
      role: 'Marketing Manager',
      company: 'Tech Solutions',
      content: 'The Talent Lab transformó completamente mi perspectiva profesional. Los programas son prácticos y aplicables inmediatamente.',
      rating: 5,
      avatar: 'MG',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Emprendedor',
      company: 'StartUp Innovadora',
      content: 'Gracias al programa de emprendimiento pude estructurar mi idea de negocio y conseguir la financiación necesaria.',
      rating: 5,
      avatar: 'CR',
    },
    {
      name: 'Ana Martín',
      role: 'Directora Financiera',
      company: 'Consulting Group',
      content: 'El programa de liderazgo me dio las herramientas necesarias para gestionar equipos de alto rendimiento.',
      rating: 5,
      avatar: 'AM',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            {t.testimonialsTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo nuestros programas han transformado la vida profesional de miles de estudiantes
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover-lift shadow-card slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-gold mb-4" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-gold">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfacción del Cliente</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
            <div className="text-muted-foreground">Graduados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Programas Activos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Valoración Media</div>
          </div>
        </div>
      </div>
    </section>
  );
};