import { Sparkles, Globe, ShieldCheck } from "lucide-react";

const Highlights = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: "Especialista em Fine Line",
      description: "Especialista reconhecida em tatuagens Fine Line, criando obras de arte detalhadas e sofisticadas na pele."
    },
    {
      icon: Globe,
      title: "Presença Internacional",
      description: "Líder com presença internacional, com 3 estúdios estrategicamente localizados para atender clientes globalmente."
    },
    {
      icon: ShieldCheck,
      title: "Biossegurança Certificada",
      description: "Nosso trabalho é pautado pelos mais rigorosos padrões de biossegurança e higiene, em conformidade com as exigências sanitárias da SEREMI, garantindo sua segurança e bem-estar."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background mb-6">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
