export type Language = 'es' | 'en';

export interface Translations {
  // Navigation
  home: string;
  programs: string;
  about: string;
  faq: string;
  contact: string;
  team: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroButton: string;
  watchVideo: string;
  studentsFormed: string;
  trainingPrograms: string;
  successRate: string;
  
  // About Section
  aboutTitle: string;
  aboutDescription: string;
  innovativeMethodology: string;
  innovativeMethodologyDesc: string;
  futureVision: string;
  futureVisionDesc: string;
  personalDevelopment: string;
  personalDevelopmentDesc: string;
  learnMoreAboutUs: string;
  clearObjectives: string;
  clearObjectivesDesc: string;
  integralVision: string;
  integralVisionDesc: string;
  studentsTransformed: string;
  studentsTransformedDesc: string;
  
  // Programs Section
  programsTitle: string;
  programsSubtitle: string;
  learnMore: string;
  duration: string;
  format: string;
  level: string;
  seeProgram: string;
  preUniversityOrientation: string;
  preUniversityOrientationDesc: string;
  financialEducation: string;
  financialEducationDesc: string;
  workLife: string;
  workLifeDesc: string;
  leadershipSkills: string;
  leadershipSkillsDesc: string;
  
  // Program Detail Page
  programOverview: string;
  whatYoullLearn: string;
  programModules: string;
  benefits: string;
  requirements: string;
  noRequirements: string;
  
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
  aboutThetalentlab: string;
  aboutSubtitle: string;
  missionDesc: string;
  visionDesc: string;
  valuesDesc: string;
  ourValues: string;
  excellence: string;
  excellenceDesc: string;
  innovation: string;
  innovationDesc: string;
  commitment: string;
  commitmentDesc: string;
  community: string;
  communityDesc: string;
  quality: string;
  qualityDesc: string;
  globalImpact: string;
  globalImpactDesc: string;
  yearsExperience: string;
  graduatedStudents: string;
  activePrograms: string;
  satisfaction: string;
  
  // Contact Page
  contactTitle: string;
  contactDescription: string;
  name: string;
  email: string;
  message: string;
  send: string;
  
  // FAQ
  frequentQuestions: string;
  faqSubtitle: string;
  notFoundQuestion: string;
  notFoundDesc: string;
  contactSupport: string;
  seePrograms: string;
  
  // 404
  pageNotFound: string;
  backToHome: string;
  
  // Common
  loading: string;
  error: string;
  requestInfo: string;
  viewMore: string;
  readMore: string;
  getStarted: string;
}

export const translations: Record<Language, Translations> = {
  es: {
    // Navigation
    home: 'Inicio',
    programs: 'Formaciones',
    about: 'Nosotros',
    faq: 'FAQ',
    contact: 'Contacto',
    team: 'Equipo',
    
    // Hero Section
    heroTitle: 'Descubre tu futuro con The Talent Lab',
    heroSubtitle: 'Preparamos a jóvenes y profesionales para su futuro académico, laboral y personal a través de programas de formación innovadores.',
    heroButton: 'Explorar Programas',
    watchVideo: 'Ver Video',
    studentsFormed: 'Estudiantes Formados',
    trainingPrograms: 'Programas Formativos', 
    successRate: 'Tasa de Éxito',
    
    // About Section
    aboutTitle: '¿Qué es The Talent Lab?',
    aboutDescription: 'Somos una organización dedicada a potenciar el talento humano mediante programas formativos de vanguardia, diseñados para preparar a la próxima generación de líderes.',
    innovativeMethodology: 'Metodología Innovadora',
    innovativeMethodologyDesc: 'Programas diseñados con las últimas tendencias educativas y tecnológicas.',
    futureVision: 'Visión de Futuro',
    futureVisionDesc: 'Preparamos a nuestros estudiantes para los desafíos del mañana.',
    personalDevelopment: 'Desarrollo Personal',
    personalDevelopmentDesc: 'Enfoque integral que combina habilidades técnicas y personales.',
    learnMoreAboutUs: 'Conoce Más Sobre Nosotros',
    clearObjectives: 'Objetivos Claros',
    clearObjectivesDesc: 'Metas definidas para cada programa',
    integralVision: 'Visión Integral',
    integralVisionDesc: 'Desarrollo completo del talento',
    studentsTransformed: '+1000 Estudiantes',
    studentsTransformedDesc: 'Han transformado su futuro con nosotros',
    
    // Programs Section
    programsTitle: 'Nuestras Formaciones',
    programsSubtitle: 'Programas diseñados para impulsar tu crecimiento personal y profesional',
    learnMore: 'Saber Más',
    duration: 'Duración',
    format: 'Formato',
    level: 'Nivel',
    seeProgram: 'Ver programa',
    preUniversityOrientation: 'Orientación preuniversitaria',
    preUniversityOrientationDesc: 'Descubre tu camino académico.',
    financialEducation: 'Educación financiera',
    financialEducationDesc: 'Domina tus finanzas desde joven.',
    workLife: 'Vida laboral',
    workLifeDesc: 'Prepárate para tu primer empleo.',
    leadershipSkills: 'Liderazgo & habilidades',
    leadershipSkillsDesc: 'Comunicación, colaboración y liderazgo aplicado.',
    
    // Program Detail Page
    programOverview: 'Descripción del Programa',
    whatYoullLearn: '¿Qué aprenderás?',
    programModules: 'Módulos del Programa',
    benefits: 'Beneficios',
    requirements: 'Requisitos',
    noRequirements: 'No se requiere experiencia previa',
    
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
    aboutThetalentlab: 'Sobre The Talent Lab',
    aboutSubtitle: 'Transformamos vidas a través de la educación, creando oportunidades para que cada persona alcance su máximo potencial',
    missionDesc: 'Empoderar a individuos y organizaciones a través de programas educativos innovadores que fomenten el crecimiento personal y profesional sostenible.',
    visionDesc: 'Ser la plataforma educativa líder que conecte el talento con las oportunidades del futuro, creando un impacto positivo a nivel global.',
    valuesDesc: 'Nuestros valores fundamentales guían cada decisión y acción, asegurando que mantengamos la excelencia y el compromiso con nuestros estudiantes.',
    ourValues: 'Nuestros Valores',
    excellence: 'Excelencia',
    excellenceDesc: 'Buscamos la excelencia en todo lo que hacemos, desde nuestros programas hasta el servicio al estudiante.',
    innovation: 'Innovación',
    innovationDesc: 'Utilizamos metodologías innovadoras y tecnología de vanguardia para crear experiencias de aprendizaje únicas.',
    commitment: 'Compromiso',
    commitmentDesc: 'Estamos comprometidos con el crecimiento personal y profesional de cada uno de nuestros estudiantes.',
    community: 'Comunidad',
    communityDesc: 'Creamos una comunidad de aprendizaje donde todos pueden crecer y desarrollarse juntos.',
    quality: 'Calidad',
    qualityDesc: 'Mantenemos los más altos estándares de calidad en todos nuestros programas formativos.',
    globalImpact: 'Impacto Global',
    globalImpactDesc: 'Trabajamos para crear un impacto positivo que trascienda fronteras y transforme vidas.',
    yearsExperience: 'Años de Experiencia',
    graduatedStudents: 'Estudiantes Graduados',
    activePrograms: 'Programas Activos',
    satisfaction: 'Satisfacción',
    
    // Contact Page
    contactTitle: 'Contáctanos',
    contactDescription: 'Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.',
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    send: 'Enviar',
    
    // FAQ
    frequentQuestions: 'Preguntas Frecuentes',
    faqSubtitle: 'Encuentra respuestas a las preguntas más comunes sobre nuestros programas formativos',
    notFoundQuestion: '¿No encontraste lo que buscabas?',
    notFoundDesc: 'Nuestro equipo está aquí para ayudarte. Contáctanos y resolveremos todas tus dudas personalmente.',
    contactSupport: 'Contactar Soporte',
    seePrograms: 'Ver Programas',
    
    // 404
    pageNotFound: 'Página no encontrada',
    backToHome: 'Volver al inicio',
    
    // Common
    loading: 'Cargando...',
    error: 'Error',
    requestInfo: 'Solicitar Información',
    viewMore: 'Ver Más',
    readMore: 'Leer Más',
    getStarted: 'Comenzar',
  },
  en: {
    // Navigation
    home: 'Home',
    programs: 'Programs',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
    team: 'Team',
    
    // Hero Section
    heroTitle: 'Discover your future with The Talent Lab',
    heroSubtitle: 'We prepare young people and professionals for their academic, professional and personal future through innovative training programs.',
    heroButton: 'Explore Programs',
    watchVideo: 'Watch Video',
    studentsFormed: 'Students Trained',
    trainingPrograms: 'Training Programs',
    successRate: 'Success Rate',
    
    // About Section
    aboutTitle: 'What is The Talent Lab?',
    aboutDescription: 'We are an organization dedicated to enhancing human talent through cutting-edge training programs, designed to prepare the next generation of leaders.',
    innovativeMethodology: 'Innovative Methodology',
    innovativeMethodologyDesc: 'Programs designed with the latest educational and technological trends.',
    futureVision: 'Future Vision',
    futureVisionDesc: 'We prepare our students for tomorrow\'s challenges.',
    personalDevelopment: 'Personal Development',
    personalDevelopmentDesc: 'Comprehensive approach that combines technical and personal skills.',
    learnMoreAboutUs: 'Learn More About Us',
    clearObjectives: 'Clear Objectives',
    clearObjectivesDesc: 'Defined goals for each program',
    integralVision: 'Integral Vision',
    integralVisionDesc: 'Complete talent development',
    studentsTransformed: '+1000 Students',
    studentsTransformedDesc: 'Have transformed their future with us',
    
    // Programs Section
    programsTitle: 'Our Training Programs',
    programsSubtitle: 'Programs designed to boost your personal and professional growth',
    learnMore: 'Learn More',
    duration: 'Duration',
    format: 'Format',
    level: 'Level',
    seeProgram: 'See program',
    preUniversityOrientation: 'Pre-university orientation',
    preUniversityOrientationDesc: 'Discover your academic path.',
    financialEducation: 'Financial education',
    financialEducationDesc: 'Master your finances from a young age.',
    workLife: 'Work life',
    workLifeDesc: 'Get ready for your first job.',
    leadershipSkills: 'Leadership & skills',
    leadershipSkillsDesc: 'Communication, collaboration and applied leadership.',
    
    // Program Detail Page
    programOverview: 'Program Overview',
    whatYoullLearn: 'What you\'ll learn',
    programModules: 'Program Modules',
    benefits: 'Benefits',
    requirements: 'Requirements',
    noRequirements: 'No previous experience required',
    
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
    aboutThetalentlab: 'About The Talent Lab',
    aboutSubtitle: 'We transform lives through education, creating opportunities for everyone to reach their full potential',
    missionDesc: 'Empower individuals and organizations through innovative educational programs that foster sustainable personal and professional growth.',
    visionDesc: 'To be the leading educational platform that connects talent with future opportunities, creating a positive global impact.',
    valuesDesc: 'Our core values guide every decision and action, ensuring we maintain excellence and commitment to our students.',
    ourValues: 'Our Values',
    excellence: 'Excellence',
    excellenceDesc: 'We seek excellence in everything we do, from our programs to student service.',
    innovation: 'Innovation',
    innovationDesc: 'We use innovative methodologies and cutting-edge technology to create unique learning experiences.',
    commitment: 'Commitment',
    commitmentDesc: 'We are committed to the personal and professional growth of each of our students.',
    community: 'Community',
    communityDesc: 'We create a learning community where everyone can grow and develop together.',
    quality: 'Quality',
    qualityDesc: 'We maintain the highest quality standards in all our training programs.',
    globalImpact: 'Global Impact',
    globalImpactDesc: 'We work to create positive impact that transcends borders and transforms lives.',
    yearsExperience: 'Years of Experience',
    graduatedStudents: 'Graduated Students',
    activePrograms: 'Active Programs',
    satisfaction: 'Satisfaction',
    
    // Contact Page
    contactTitle: 'Contact Us',
    contactDescription: 'We are here to help you. Send us a message and we will respond as soon as possible.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    
    // FAQ
    frequentQuestions: 'Frequently Asked Questions',
    faqSubtitle: 'Find answers to the most common questions about our training programs',
    notFoundQuestion: 'Didn\'t find what you were looking for?',
    notFoundDesc: 'Our team is here to help you. Contact us and we will resolve all your questions personally.',
    contactSupport: 'Contact Support',
    seePrograms: 'See Programs',
    
    // 404
    pageNotFound: 'Page not found',
    backToHome: 'Back to home',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    requestInfo: 'Request Information',
    viewMore: 'View More',
    readMore: 'Read More',
    getStarted: 'Get Started',
  }
};

export const useTranslation = (language: Language) => {
  return translations[language];
};