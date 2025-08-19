import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, ChevronUp } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.home, href: '/' },
    { name: t.programs, href: '/programs' },
    { name: t.about, href: '/about' },
    { name: t.faq, href: '/faq' },
    { name: t.contact, href: '/contact' },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-md shadow-elegant' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">TL</span>
              </div>
              <span className="text-xl font-bold text-primary-foreground">
                The Talent Lab
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-smooth ${
                    isActive(item.href)
                      ? 'text-gold border-b-2 border-gold'
                      : 'text-primary-foreground hover:text-gold'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              
              {/* CTA Button - Desktop */}
              <Button 
                variant="hero" 
                size="sm" 
                className="hidden md:flex"
                asChild
              >
                <Link to="/contact">{t.requestInfo}</Link>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-primary-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-light">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-sm font-medium transition-smooth ${
                      isActive(item.href)
                        ? 'text-gold'
                        : 'text-primary-foreground hover:text-gold'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full mt-4"
                  asChild
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    {t.requestInfo}
                  </Link>
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <Button
          variant="gold"
          size="icon"
          className="fixed bottom-6 right-6 z-40 rounded-full shadow-gold bounce-up"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};