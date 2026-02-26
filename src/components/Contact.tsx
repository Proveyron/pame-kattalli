import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-28 md:py-36 border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] tracking-[0.3em] text-muted-foreground mb-6">
            CONTACTO
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-16 leading-[1.1]">
            Encuéntranos
          </h2>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <MapPin className="h-4 w-4 mt-1.5 flex-shrink-0" />
                <div className="text-sm leading-[1.8] text-muted-foreground">
                  <p className="text-foreground font-normal mb-2">Estudios</p>
                  <p>
                    <span className="text-foreground">Rio de Janeiro</span><br />
                    Av. das Américas 3333, sala 907<br />
                    Barra da Tijuca — CEP 22631-003
                  </p>
                  <p className="mt-4">
                    <span className="text-foreground">Santiago, Chile</span><br />
                    Los Militares 5001, Las Condes<br />
                    Santiago 7560955
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Phone className="h-4 w-4 mt-1.5 flex-shrink-0" />
                <div className="text-sm leading-[1.8]">
                  <p className="text-foreground font-normal mb-1">WhatsApp</p>
                  <p className="text-muted-foreground">+55 (21) 98238-7639</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Mail className="h-4 w-4 mt-1.5 flex-shrink-0" />
                <div className="text-sm leading-[1.8]">
                  <p className="text-foreground font-normal mb-1">E-mail</p>
                  <p className="text-muted-foreground">pamelaphibrows@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Instagram className="h-4 w-4 mt-1.5 flex-shrink-0" />
                <div className="text-sm leading-[1.8]">
                  <p className="text-foreground font-normal mb-1">Instagram</p>
                  <div className="text-muted-foreground space-y-1">
                    <p><a href="https://www.instagram.com/pamekattalii/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">@pamekattalii</a></p>
                    <p><a href="https://www.instagram.com/pamelaroa.brows/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">@pamelaroa.brows</a></p>
                    <p className="mt-3 text-foreground font-normal">Estudios</p>
                    <p><a href="https://www.instagram.com/almatattoo.rio/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">@almatattoo.rio</a></p>
                    <p><a href="https://www.instagram.com/almatattoo_estudio/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">@almatattoo_estudio</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[500px]">
              <iframe
                title="Localización del Estudio"
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
      </div>
    </section>
  );
};

export default Contact;
