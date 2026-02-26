import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5521982387639?text=Olá! Gostaria de agendar um horário", "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vamos criar algo único juntos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-6">Informações</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-1 text-background flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Endereços</p>
                    <p className="opacity-80">
                      <strong>Rio de Janeiro:</strong><br />
                      Av. das Américas 3333, sala 907<br />
                      Barra da Tijuca, Rio de Janeiro - RJ<br />
                      CEP: 22631-003<br /><br />
                      <strong>Santiago, Chile:</strong><br />
                      Los Militares 5001, Las Condes<br />
                      Santiago, Chile 7560955
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 mt-1 text-background flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Horário de Atendimento</p>
                    <p className="opacity-80">
                      Segunda a Sexta: 10:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-1 text-background flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Telefone / WhatsApp</p>
                    <p className="opacity-80">
                      +55 (21) 98238-7639
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-1 text-background flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">E-mail</p>
                    <p className="opacity-80">
                      pamelaphibrows@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="h-5 w-5 mt-1 text-background flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Instagram</p>
                    <div className="opacity-80 space-y-1">
                      <p><a href="https://www.instagram.com/pamekattalii/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">@pamekattalii</a></p>
                      <p><a href="https://www.instagram.com/pamelaroa.brows/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">@pamelaroa.brows</a></p>
                      <p className="mt-2 pt-2 border-t border-background/20"><strong>Estúdios:</strong></p>
                      <p><a href="https://www.instagram.com/almatattoo.rio/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">@almatattoo.rio</a> (Rio)</p>
                      <p><a href="https://www.instagram.com/almatattoo_estudio/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">@almatattoo_estudio</a> (Chile)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleWhatsApp}
              size="lg"
              className="w-full bg-background text-foreground hover:bg-background/90"
            >
              Agendar via WhatsApp
            </Button>
          </div>

          <div className="bg-muted rounded-lg overflow-hidden h-[500px]">
            <iframe
              title="Localização do Estúdio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1168726738756!2d-43.36526908506937!3d-22.999133184964594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd0436e0f2341%3A0x8c8b5d4c0c8b5d4c!2sAv.%20das%20Am%C3%A9ricas%2C%203333%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022631-003!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
