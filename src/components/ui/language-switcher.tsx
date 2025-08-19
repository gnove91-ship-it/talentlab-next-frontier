import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-primary-foreground hover:bg-primary-light"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </Button>
  );
};