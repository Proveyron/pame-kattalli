import portraitImage from "@/assets/pamela-portrait.jpeg";

const About = () => {
  return (
    <section id="sobre" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Pamela Roa</h2>
            <p className="text-xl text-foreground mb-6 font-light">Transformando Histórias em Arte Delicada</p>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Com anos de dedicação à arte da tatuagem e micropigmentação, minha missão é 
                <strong className="text-foreground"> registrar na pele a história pessoal de cada cliente</strong>, 
                criando trabalhos que vão além da estética.
              </p>
              <p>
                Cada desenho é pensado exclusivamente para você, respeitando sua essência e 
                transformando memórias e significados em arte delicada e elegante. Acredito que cada tatuagem 
                deve ser uma extensão da sua identidade, contando sua história de forma única e atemporal.
              </p>
              <p>
                Atuo em dois estúdios excepcionais: no coração da Barra da Tijuca, no Rio de Janeiro, 
                nosso espaço oferece <strong className="text-foreground">a melhor vista da cidade</strong>, 
                criando um ambiente inspirador para seu momento especial. Em Santiago, Chile, na região 
                nobre de Las Condes, proporcionamos a mesma excelência e dedicação.
              </p>
              <p>
                Especializada em fine line tattoo e técnicas delicadas de micropigmentação, 
                trabalho com os mais altos padrões de segurança, higiene e qualidade artística. 
                Cada projeto começa com uma consulta personalizada, onde juntos criamos algo verdadeiramente único.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src={portraitImage} 
                alt="Pamela Roa - Tatuadora e Micropigmentadora"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
