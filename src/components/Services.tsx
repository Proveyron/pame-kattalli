import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Eye } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Tatuagem",
      description: "Desenhos exclusivos e personalizados que transformam suas histórias em arte permanente. Cada traço é cuidadosamente planejado para criar uma obra única e significativa.",
      details: [
        "Consulta personalizada para entender sua história",
        "Desenhos exclusivos criados especialmente para você",
        "Técnicas fine line para traços delicados",
        "Acompanhamento pós-tatuagem completo"
      ]
    },
    {
      icon: Eye,
      title: "Micropigmentação",
      description: "Técnicas delicadas para realçar sua beleza natural. Resultados sutis e elegantes que harmonizam com suas características únicas.",
      details: [
        "Sobrancelhas fio a fio com efeito natural",
        "Design personalizado para seu rosto",
        "Pigmentos de alta qualidade",
        "Retoque incluído no procedimento"
      ]
    },
  ];

  return (
    <section id="servicos" className="py-24" style={{ backgroundColor: 'hsl(var(--warm-beige))' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformando arte em experiências memoráveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
              <CardContent className="p-8">
                <service.icon className="h-12 w-12 mb-6 text-foreground" />
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-foreground mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
