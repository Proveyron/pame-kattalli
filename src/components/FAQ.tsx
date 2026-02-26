import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o processo de agendamento?",
      answer: "Entre em contato via WhatsApp (+55 21 98238-7639) para agendar uma consulta personalizada. Nesta primeira conversa, discutiremos sua ideia, referências e expectativas. É necessário um sinal de R$ 100,00 para confirmar o agendamento. Após a aprovação do desenho exclusivo, faremos o orçamento detalhado e marcaremos a sessão no estúdio de sua preferência (Rio ou Santiago).",
    },
    {
      question: "Quanto tempo leva para fazer uma tatuagem?",
      answer: "O tempo varia conforme o tamanho e complexidade do desenho. Tatuagens delicadas fine line geralmente levam de 1 a 4 horas. Projetos maiores podem requerer múltiplas sessões. Durante a consulta inicial, forneço uma estimativa precisa baseada no seu projeto específico.",
    },
    {
      question: "A micropigmentação dói?",
      answer: "Utilizo anestésico tópico de alta qualidade para minimizar qualquer desconforto durante o procedimento. A maioria das clientes relata apenas uma leve sensação, muito tolerável. O processo é significativamente menos desconfortável do que muitas pessoas imaginam.",
    },
    {
      question: "Quanto tempo dura a micropigmentação?",
      answer: "A micropigmentação de sobrancelhas geralmente dura de 1 a 3 anos, dependendo do tipo de pele, exposição solar e cuidados pós-procedimento. Recomendo um retoque anual para manter o resultado sempre impecável. O primeiro retoque está incluso no procedimento inicial.",
    },
    {
      question: "Como é o processo de cicatrização?",
      answer: "Forneço instruções detalhadas de cuidados pós-procedimento. Para tatuagens, a cicatrização leva de 2 a 4 semanas. Para micropigmentação, cerca de 7 a 14 dias. Durante este período, é essencial seguir as orientações para garantir o melhor resultado. Estou sempre disponível para tirar dúvidas durante o processo.",
    },
    {
      question: "Qual o valor dos serviços?",
      answer: "Os valores variam conforme o tamanho, complexidade e localização do estúdio (Rio ou Santiago). Para tatuagens, o orçamento é personalizado após a consulta e aprovação do desenho. Para micropigmentação, os valores incluem o procedimento inicial e o primeiro retoque. Entre em contato via WhatsApp para receber um orçamento detalhado sem compromisso.",
    },
    {
      question: "Qual a política de cancelamento?",
      answer: "Cancelamentos devem ser feitos com no mínimo 48 horas de antecedência. Cancelamentos com menos de 48h resultam na perda do sinal de agendamento. Compreendo que imprevistos acontecem, então entre em contato o quanto antes caso precise remarcar.",
    },
    {
      question: "Vocês atendem em quais cidades?",
      answer: "Atendemos em dois locais: Rio de Janeiro (Barra da Tijuca - Av. das Américas 3333, sala 907) e Santiago, Chile (Los Militares 5001, Las Condes). Ambos os estúdios oferecem a mesma qualidade e excelência de atendimento, com ambientes acolhedores e vistas incríveis. Entre em contato para verificar disponibilidade em cada localização.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
