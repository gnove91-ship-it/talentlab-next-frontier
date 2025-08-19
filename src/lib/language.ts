export type Language = 'es' | 'en';

export interface Translations {
  // Navigation
  home: string;
  programs: string;
  about: string;
  faq: string;
  contact: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroButton: string;
  watchVideo: string;
  
  // About Section
  aboutTitle: string;
  aboutDescription: string;
  
  // Programs Section
  programsTitle: string;
  programsSubtitle: string;
  learnMore: string;
  duration: string;
  format: string;
  level: string;
  
  // CTA Section
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  
  // Testimonials
  testimonialsTitle: string;
  
  // Footer
  quickLinks: string;
  followUs: string;
  allRightsReserved: string;
  
  // About Page
  mission: string;
  vision: string;
  values: string;
  founders: string;
  collaborators: string;
  
  // Contact Page
  contactTitle: string;
  contactDescription: string;
  name: string;
  email: string;
  message: string;
  send: string;
  
  // FAQ
  frequentQuestions: string;
  
  // 404
  pageNotFound: string;
  backToHome: string;
  
  // Common
  loading: string;
  error: string;
  requestInfo: string;
}

export const translations: Record<Language, Translations> = {
  es: {
    // Navigation
    home: 'Inicio',
    programs: 'Formaciones',
    about: 'Nosotros',
    faq: 'FAQ',
    contact: 'Contacto',
    
    // Hero Section
    heroTitle: 'Descubre tu futuro con The Talent Lab',
    heroSubtitle: 'Preparamos a jóvenes y profesionales para su futuro académico, laboral y personal a través de programas de formación innovadores.',
    heroButton: 'Explorar Programas',
    watchVideo: 'Ver Video',
    
    // About Section
    aboutTitle: '¿Qué es The Talent Lab?',
    aboutDescription: 'Somos una organización dedicada a potenciar el talento humano mediante programas formativos de vanguardia, diseñados para preparar a la próxima generación de líderes.',
    
    // Programs Section
    programsTitle: 'Nuestras Formaciones',
    programsSubtitle: 'Programas diseñados para impulsar tu crecimiento personal y profesional',
    learnMore: 'Saber Más',
    duration: 'Duración',
    format: 'Formato',
    level: 'Nivel',
    
    // CTA Section
    ctaTitle: '¿Listo para transformar tu futuro?',
    ctaDescription: 'Únete a miles de estudiantes que ya han transformado sus vidas con nuestros programas.',
    ctaButton: 'Solicitar Información',
    
    // Testimonials
    testimonialsTitle: 'Lo que dicen nuestros estudiantes',
    
    // Footer
    quickLinks: 'Enlaces Rápidos',
    followUs: 'Síguenos',
    allRightsReserved: 'Todos los derechos reservados',
    
    // About Page
    mission: 'Misión',
    vision: 'Visión',
    values: 'Valores',
    founders: 'Fundadores',
    collaborators: 'Colaboradores',
    
    // Contact Page
    contactTitle: 'Contáctanos',
    contactDescription: 'Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.',
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    send: 'Enviar',
    
    // FAQ
    frequentQuestions: 'Preguntas Frecuentes',
    
    // 404
    pageNotFound: 'Página no encontrada',
    backToHome: 'Volver al inicio',
    
    // Common
    loading: 'Cargando...',
    error: 'Error',
    requestInfo: 'Solicitar Información',
  },
  en: {
    // Navigation
    home: 'Home',
    programs: 'Programs',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Discover your future with The Talent Lab',
    heroSubtitle: 'We prepare young people and professionals for their academic, professional and personal future through innovative training programs.',
    heroButton: 'Explore Programs',
    watchVideo: 'Watch Video',
    
    // About Section
    aboutTitle: 'What is The Talent Lab?',
    aboutDescription: 'We are an organization dedicated to enhancing human talent through cutting-edge training programs, designed to prepare the next generation of leaders.',
    
    // Programs Section
    programsTitle: 'Our Training Programs',
    programsSubtitle: 'Programs designed to boost your personal and professional growth',
    learnMore: 'Learn More',
    duration: 'Duration',
    format: 'Format',
    level: 'Level',
    
    // CTA Section
    ctaTitle: 'Ready to transform your future?',
    ctaDescription: 'Join thousands of students who have already transformed their lives with our programs.',
    ctaButton: 'Request Information',
    
    // Testimonials
    testimonialsTitle: 'What our students say',
    
    // Footer
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
    
    // About Page
    mission: 'Mission',
    vision: 'Vision',
    values: 'Values',
    founders: 'Founders',
    collaborators: 'Collaborators',
    
    // Contact Page
    contactTitle: 'Contact Us',
    contactDescription: 'We are here to help you. Send us a message and we will respond as soon as possible.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    
    // FAQ
    frequentQuestions: 'Frequently Asked Questions',
    
    // 404
    pageNotFound: 'Page not found',
    backToHome: 'Back to home',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    requestInfo: 'Request Information',
  }
};

export const useTranslation = (language: Language) => {
  return translations[language];
};