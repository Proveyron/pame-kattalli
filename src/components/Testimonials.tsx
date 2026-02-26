import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      text: "Experiência incrível do início ao fim! A Pamela entendeu exatamente o que eu queria e transformou em uma arte linda e delicada na minha pele. O estúdio no Rio é maravilhoso, com uma vista incrível. Super recomendo!",
      rating: 5,
      service: "Tatuagem Fine Line"
    },
    {
      name: "Marina Costa",
      text: "A micropigmentação ficou perfeita! Natural e delicada, exatamente como eu queria. A Pamela é super atenciosa e profissional. Depois de 6 meses, ainda está impecável. Melhor investimento que já fiz!",
      rating: 5,
      service: "Micropigmentação de Sobrancelhas"
    },
    {
      name: "Carla Mendes",
      text: "Fiz minha primeira tatuagem com a Pamela e não poderia ter escolhido melhor! Ela me deixou super tranquila, explicou todo o processo e o resultado foi lindo. A arte é exclusiva e tem tudo a ver comigo.",
      rating: 5,
      service: "Primeira Tatuagem"
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: 'hsl(var(--soft-beige))' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Depoimentos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O que nossos clientes dizem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
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
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
