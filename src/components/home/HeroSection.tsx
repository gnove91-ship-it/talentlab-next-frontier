import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Play, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import heroImage from '@/assets/hero-education.jpg';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="The Talent Lab Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in">
            <span className="text-gradient-accent">{t.heroTitle.split(' ')[0]}</span>{' '}
            {t.heroTitle.split(' ').slice(1).join(' ')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto slide-in-up">
            {t.heroSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-in-up">
            <Button 
              variant="hero" 
              size="xl"
              className="group"
            >
              {t.heroButton}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>

            {/* Video Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline_accent" 
                  size="xl"
                  className="group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-smooth" />
                  {t.watchVideo}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="aspect-video bg-primary/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-primary mb-4 mx-auto" />
                    <p className="text-lg font-medium text-primary">
                      Video promocional próximamente
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 slide-in-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-primary-foreground/80">{t.studentsFormed}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-primary-foreground/80">{t.trainingPrograms}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-primary-foreground/80">{t.successRate}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};