import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';
import founderImage1 from '@/assets/founder-1.jpg';
import founderImage2 from '@/assets/founder-2.jpg';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t.excellence,
      description: t.excellenceDesc
    },
    {
      icon: Eye,
      title: t.innovation,
      description: t.innovationDesc
    },
    {
      icon: Heart,
      title: t.commitment,
      description: t.commitmentDesc
    },
    {
      icon: Users,
      title: t.community,
      description: t.communityDesc
    },
    {
      icon: Award,
      title: t.quality,
      description: t.qualityDesc
    },
    {
      icon: Globe,
      title: t.globalImpact,
      description: t.globalImpactDesc
    }
  ];

  const teamMembers = [
    {
      name: 'Miguel Valenzuela',
      role: 'Co-fundador & CEO',
      image: founderImage1,
      bio: 'Con más de 15 años de experiencia en educación y desarrollo organizacional, Miguel ha liderado proyectos de transformación en empresas multinacionales. Su pasión por el desarrollo del talento humano la llevó a cofundar The Talent Lab con la visión de democratizar el acceso a una educación de calidad.',
      expertise: ['Desarrollo Organizacional', 'Liderazgo', 'Educación Corporativa']
    },
    {
      name: 'Fernando Novella',
      role: 'Co-fundador & CTO',
      image: founderImage2,
      bio: 'Fernando combina su background en tecnología con su experiencia en educación digital. Ha desarrollado plataformas educativas utilizadas por miles de estudiantes a nivel mundial. Su enfoque innovador en el aprendizaje digital ha sido clave para el éxito de The Talent Lab.',
      expertise: ['Tecnología Educativa', 'Innovación Digital', 'Product Management']
    }
  ];

  const collaborators = [
    { name: 'Dr. Ana Ruiz', role: 'Directora Académica', initials: 'AR' },
    { name: 'Miguel Torres', role: 'Director de Marketing', initials: 'MT' },
    { name: 'Sara López', role: 'Responsable de Estudiantes', initials: 'SL' },
    { name: 'Carlos Vega', role: 'Especialista en Finanzas', initials: 'CV' },
    { name: 'Laura Díaz', role: 'Coach de Carrera', initials: 'LD' },
    { name: 'Roberto Kim', role: 'Desarrollador Senior', initials: 'RK' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">
            {t.aboutThetalentlab}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto slide-in-up">
            {t.aboutSubtitle}
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Mission */}
            <Card className="text-center hover-lift shadow-card">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-primary">{t.mission}</h3>
                <p className="text-muted-foreground">
                  {t.missionDesc}
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center hover-lift shadow-card">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-primary">{t.vision}</h3>
                <p className="text-muted-foreground">
                  {t.visionDesc}
                </p>
              </CardContent>
            </Card>

            {/* Values Preview */}
            <Card className="text-center hover-lift shadow-card">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-primary">{t.values}</h3>
                <p className="text-muted-foreground">
                  {t.valuesDesc}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary fade-in">
              {t.ourValues}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 hover-scale slide-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary fade-in">
            {t.team}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover-lift shadow-card slide-in-up">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover shadow-accent"
                    />
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2 text-primary">{member.name}</h3>
                      <p className="text-accent font-semibold mb-4">{member.role}</p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {member.expertise.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default About;