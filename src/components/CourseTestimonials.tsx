import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const CourseTestimonials = () => {
  const testimonials = [
    {
      name: "Beatriz Almeida",
      text: "O curso da Pamela foi transformador para minha carreira! Ela ensina com uma dedicação incrível, mostrando cada detalhe das técnicas que aprendeu em suas viagens internacionais. Saí do curso segura e preparada para atender minhas clientes com excelência. O investimento retornou em poucos meses!",
      rating: 5,
      profession: "Micropigmentadora - Santiago, Chile"
    },
    {
      name: "Fernanda Rocha",
      text: "Fiz vários cursos antes, mas o da Pamela é diferenciado. A experiência internacional dela faz toda a diferença no conteúdo. Aprendi técnicas europeias que poucos profissionais no Brasil dominam. Minha carteira de clientes triplicou depois do curso!",
      rating: 5,
      profession: "Esteticista - Rio de Janeiro"
    }
  ];

  return (
    <section className="py-24" style={{ backgroundColor: 'hsl(var(--soft-beige))' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Depoimentos dos Cursos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O que alunas dizem sobre a experiência de aprender com a Pamela
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.profession}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseTestimonials;
