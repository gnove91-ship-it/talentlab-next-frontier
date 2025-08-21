import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Eye, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Target,
      title: t.innovativeMethodology,
      description: t.innovativeMethodologyDesc,
    },
    {
      icon: Eye,
      title: t.futureVision,
      description: t.futureVisionDesc,
    },
    {
      icon: Heart,
      title: t.personalDevelopment,
      description: t.personalDevelopmentDesc,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="slide-in-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              {t.aboutTitle}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t.aboutDescription}
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 hover-scale">
                    <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button variant="primary" size="lg" asChild className="group">
              <Link to="/about">
                {t.learnMoreAboutUs}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Link>
            </Button>
          </div>

          {/* Right Content - Visual Element */}
          <div className="slide-in-right">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-2xl p-8 shadow-card hover-lift">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 gold-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{t.clearObjectives}</h4>
                    <p className="text-sm text-muted-foreground">{t.clearObjectivesDesc}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Eye className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{t.integralVision}</h4>
                    <p className="text-sm text-muted-foreground">{t.integralVisionDesc}</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-primary/5 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      {t.studentsTransformed}
                    </div>
                    <p className="text-muted-foreground">
                      {t.studentsTransformedDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 gold-gradient rounded-2xl opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 primary-gradient rounded-xl opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};