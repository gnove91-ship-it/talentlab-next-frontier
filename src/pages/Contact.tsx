import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  HeadphonesIcon
} from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulating form submission to Formspree
      // Replace 'YOUR_FORM_ID' with actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Mensaje enviado",
          description: "Gracias por contactarnos. Te responderemos pronto.",
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error('Error al enviar');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'info@thetalentlab.es',
      action: 'Enviar Email',
      href: 'mailto:info@thetalentlab.es'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      description: '+34 123 456 789',
      action: 'Llamar Ahora',
      href: 'tel:+34123456789'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: '+34 123 456 789',
      action: 'Abrir Chat',
      href: 'https://wa.me/34123456789'
    }
  ];

  const officeHours = [
    { day: 'Lunes - Viernes', hours: '09:00 - 18:00' },
    { day: 'Sábados', hours: '09:00 - 14:00' },
    { day: 'Domingos', hours: 'Cerrado' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">
            {t.contactTitle}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto slide-in-up">
            {t.contactDescription}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-in-left">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Send className="mr-3 h-6 w-6 text-gold" />
                    Envíanos un Mensaje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                          {t.name} *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="transition-smooth focus:ring-gold focus:border-gold"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                          {t.email} *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="transition-smooth focus:ring-gold focus:border-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                          Teléfono
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="transition-smooth focus:ring-gold focus:border-gold"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                          Asunto *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="transition-smooth focus:ring-gold focus:border-gold"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                        {t.message} *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="transition-smooth focus:ring-gold focus:border-gold"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          {t.send}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="slide-in-right space-y-8">
              {/* Contact Methods */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Otros Métodos de Contacto</h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <Card key={index} className="hover-lift shadow-card">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-primary">{method.title}</h3>
                              <p className="text-muted-foreground">{method.description}</p>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                              <a href={method.href} target="_blank" rel="noopener noreferrer">
                                {method.action}
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Office Hours */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <Clock className="mr-3 h-5 w-5 text-gold" />
                    Horario de Atención
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-primary font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Office Location */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <MapPin className="mr-3 h-5 w-5 text-gold" />
                    Nuestra Oficina
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Calle Gran Vía, 123<br />
                    28013 Madrid, España
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <MapPin className="h-8 w-8 text-gold mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Mapa interactivo próximamente
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Support Team */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <HeadphonesIcon className="mr-3 h-5 w-5 text-gold" />
                    Equipo de Soporte
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Soporte Técnico</div>
                        <div className="text-sm text-muted-foreground">Disponible 24/7</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Asesoramiento Académico</div>
                        <div className="text-sm text-muted-foreground">Lun - Vie, 9:00 - 18:00</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;