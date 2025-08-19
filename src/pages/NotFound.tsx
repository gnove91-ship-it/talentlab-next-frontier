import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold text-gold mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4 text-primary">{t.pageNotFound}</h1>
        <p className="text-muted-foreground mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            {t.backToHome}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
