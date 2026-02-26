import eyebrows1 from "@/assets/portfolio-eyebrows-1.jpeg";
import tattooSmoke from "@/assets/portfolio-tattoo-smoke.jpeg";
import lips from "@/assets/portfolio-lips.jpeg";
import flower from "@/assets/portfolio-flower.jpeg";
import heart from "@/assets/portfolio-heart.jpeg";
import lily from "@/assets/portfolio-lily.jpeg";
import eyebrows2 from "@/assets/portfolio-eyebrows-2.jpeg";
import eyebrows3 from "@/assets/portfolio-eyebrows-3.jpeg";
import eyebrows4 from "@/assets/portfolio-eyebrows-4.jpeg";

const Portfolio = () => {
  const images = [
    { src: tattooSmoke, alt: "Tatuagem fine line abstrata", position: "center" },
    { src: flower, alt: "Tatuagem floral delicada", position: "center 30%" },
    { src: heart, alt: "Tatuagem coração anatômico com flores", position: "center 30%" },
    { src: lily, alt: "Tatuagem lírio elegante", position: "center" },
    { src: eyebrows1, alt: "Micropigmentação de sobrancelhas antes e depois", position: "center" },
    { src: lips, alt: "Micropigmentação labial", position: "center" },
    { src: eyebrows2, alt: "Micropigmentação fio a fio", position: "center" },
    { src: eyebrows3, alt: "Resultados de micropigmentação", position: "center" },
    { src: eyebrows4, alt: "Micropigmentação natural", position: "center" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Portfólio</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Cada trabalho conta uma história única
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group aspect-square"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                style={{ objectPosition: image.position }}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
