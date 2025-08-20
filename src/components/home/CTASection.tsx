import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTASection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary-foreground/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-primary-foreground/10 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-accent rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-foreground/30 rounded-full animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Icon */}
          <div className="w-20 h-20 accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-8 fade-in">
            <Sparkles className="h-10 w-10 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 slide-in-up">
            {t.ctaTitle}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto slide-in-up">
            {t.ctaDescription}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-in-up">
            <Button 
              variant="hero" 
              size="xl"
              className="group shadow-accent"
              asChild
            >
              <Link to="/contact">
                {t.ctaButton}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Link>
            </Button>

            <Button 
              variant="outline_accent" 
              size="xl"
              className="group border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/programs">
                Ver Programas
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 slide-in-up">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Certificación Oficial</div>
                <div className="text-sm text-primary-foreground/80">Reconocida internacionalmente</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Excelencia Educativa</div>
                <div className="text-sm text-primary-foreground/80">Metodología probada</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Resultados Garantizados</div>
                <div className="text-sm text-primary-foreground/80">Crecimiento profesional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};