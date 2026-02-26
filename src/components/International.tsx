import { Plane, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const International = () => {
  const travels = [
    {
      city: "Paris, França",
      description: "Participação em workshop avançado de fine line tattoo e técnicas europeias de micropigmentação"
    },
    {
      city: "Berlim, Alemanha",
      description: "Curso de especialização em técnicas de sombreamento e aperfeiçoamento artístico"
    },
    {
      city: "Amsterdam, Holanda",
      description: "Convenção internacional de tatuagem e troca de experiências com artistas renomados"
    }
  ];

  return (
    <section id="experiencia" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">Experiência Internacional</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aperfeiçoamento constante nas principais capitais da arte corporal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {travels.map((travel, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <Plane className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-medium mb-3">{travel.city}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {travel.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-foreground text-background rounded-lg p-12 md:p-16">
            <div className="flex items-center justify-center mb-8">
              <GraduationCap className="h-12 w-12 text-background" />
            </div>
            <h3 className="text-3xl md:text-4xl font-light text-center mb-6">
              Cursos de Micropigmentação
            </h3>
            <p className="text-lg text-center opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Compartilho todo meu conhecimento e experiência internacional em cursos exclusivos de micropigmentação. 
              Técnicas atualizadas, prática supervisionada e certificação profissional para elevar sua carreira no mercado de estética.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-background/10 rounded-lg p-6">
                <h4 className="font-medium mb-2">Técnicas Avançadas</h4>
                <p className="text-sm opacity-80">Fio a fio, sombreado, efeito powder brows</p>
              </div>
              <div className="bg-background/10 rounded-lg p-6">
                <h4 className="font-medium mb-2">Prática Supervisionada</h4>
                <p className="text-sm opacity-80">Acompanhamento individual durante todo o curso</p>
              </div>
              <div className="bg-background/10 rounded-lg p-6">
                <h4 className="font-medium mb-2">Material Incluso</h4>
                <p className="text-sm opacity-80">Kit completo para iniciar sua carreira</p>
              </div>
              <div className="bg-background/10 rounded-lg p-6">
                <h4 className="font-medium mb-2">Certificação</h4>
                <p className="text-sm opacity-80">Certificado reconhecido no mercado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default International;
