import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ];

  const quickLinks = [
    { name: t.home, href: '/' },
    { name: t.programs, href: '/programas' },
    { name: t.about, href: '/about' },
    { name: t.faq, href: '/faq' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 accent-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">TL</span>
              </div>
              <span className="text-xl font-bold">The Talent Lab</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              {t.aboutDescription}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-gold" />
                <span>info@thetalentlab.es</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-gold" />
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-gold" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">
              {t.followUs}
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-smooth"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 The Talent Lab. {t.allRightsReserved}.
          </p>
        </div>
      </div>
    </footer>
  );
};