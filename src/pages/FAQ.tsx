import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: '¿Qué incluyen los programas de The Talent Lab?',
      answer: 'Nuestros programas incluyen contenido teórico y práctico, materiales de estudio, acceso a plataforma online, sesiones en vivo con instructores, proyectos prácticos, certificación oficial y acceso a nuestra comunidad de estudiantes.'
    },
    {
      question: '¿Cuál es la modalidad de las clases?',
      answer: 'Ofrecemos tres modalidades: Online (100% virtual), Presencial (en nuestras instalaciones) e Híbrido (combinación de ambas). La modalidad varía según el programa específico que elijas.'
    },
    {
      question: '¿Necesito experiencia previa para inscribirme?',
      answer: 'No, tenemos programas para todos los niveles. Cada programa especifica si es para principiantes, intermedio o avanzado. Nuestros programas para principiantes están diseñados para personas sin experiencia previa en el tema.'
    },
    {
      question: '¿Qué tipo de certificación obtendré?',
      answer: 'Al completar satisfactoriamente un programa, recibirás un certificado oficial de The Talent Lab reconocido internacionalmente. Algunos programas también incluyen certificaciones de terceros (Google, Microsoft, etc.).'
    },
    {
      question: '¿Cuánto tiempo tengo para completar un programa?',
      answer: 'El tiempo varía según el programa, desde 4 hasta 12 semanas. Una vez inscrito, tienes acceso al contenido durante 6 meses adicionales para repasar y completar a tu ritmo.'
    },
    {
      question: '¿Ofrecen ayuda financiera o planes de pago?',
      answer: 'Sí, ofrecemos planes de pago fraccionado sin intereses y becas parciales para estudiantes destacados. También tenemos descuentos para empresas que inscriban a múltiples empleados.'
    },
    {
      question: '¿Puedo obtener un reembolso si no estoy satisfecho?',
      answer: 'Ofrecemos una garantía de satisfacción de 14 días. Si no estás completamente satisfecho con el programa, puedes solicitar un reembolso completo dentro de los primeros 14 días.'
    },
    {
      question: '¿Los programas incluyen oportunidades de networking?',
      answer: 'Absolutamente. Todos nuestros estudiantes tienen acceso a nuestra comunidad exclusiva, eventos de networking mensuales, y sesiones de mentoring con profesionales de la industria.'
    },
    {
      question: '¿Qué tecnología necesito para los programas online?',
      answer: 'Solo necesitas una computadora con conexión a internet estable. Proporcionamos acceso a todas las herramientas y software necesarios. También ofrecemos soporte técnico gratuito.'
    },
    {
      question: '¿Cómo puedo hacer seguimiento de mi progreso?',
      answer: 'Nuestra plataforma incluye un dashboard personalizado donde puedes ver tu progreso, calificaciones, tareas pendientes y logros. También recibes feedback regular de tus instructores.'
    },
    {
      question: '¿Ofrecen servicios de colocación laboral?',
      answer: 'Sí, tenemos un departamento de Career Services que incluye revisión de CV, preparación para entrevistas, y una bolsa de trabajo exclusiva con empresas partner que buscan talento formado en The Talent Lab.'
    },
    {
      question: '¿Puedo cambiar de programa una vez inscrito?',
      answer: 'Sí, puedes cambiar a otro programa de igual o mayor valor dentro de los primeros 7 días de inicio. Si el nuevo programa tiene menor costo, te reembolsamos la diferencia.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <HelpCircle className="h-10 w-10 text-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">
            {t.frequentQuestions}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto slide-in-up">
            Encuentra respuestas a las preguntas más comunes sobre nuestros programas formativos
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 hover:shadow-card transition-smooth slide-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <AccordionTrigger className="text-left text-primary font-semibold hover:text-gold py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <MessageCircle className="h-16 w-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary fade-in">
              ¿No encontraste lo que buscabas?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nuestro equipo está aquí para ayudarte. Contáctanos y resolveremos todas tus dudas personalmente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild>
                <Link to="/contact">
                  Contactar Soporte
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/programs">
                  Ver Programas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;