import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-light mb-4">Pamela Roa</h3>
            <p className="text-sm opacity-80">
              Transformando histórias em arte delicada e elegante desde 2015.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contato</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>Rio de Janeiro - RJ</p>
              <p>Santiago, Chile</p>
              <p>Segunda a Sexta: 10:00 - 18:00</p>
              <p className="mt-2">pamelaphibrows@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/pamekattalii/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="mailto:pamelaphibrows@gmail.com"
                className="hover:opacity-70 transition-opacity"
                aria-label="E-mail"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Pamela Roa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
