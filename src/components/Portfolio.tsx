import tattooSmoke from "@/assets/portfolio-tattoo-smoke.jpeg";
import flower from "@/assets/portfolio-flower.jpeg";
import heart from "@/assets/portfolio-heart.jpeg";
import lily from "@/assets/portfolio-lily.jpeg";
import eyebrows1 from "@/assets/portfolio-eyebrows-1.jpeg";
import eyebrows2 from "@/assets/portfolio-eyebrows-2.jpeg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const Portfolio = () => {
  const images = [
    { src: gallery1, alt: "Fine line floral tattoo", position: "center" },
    { src: gallery7, alt: "Delicate rose tattoo", position: "center" },
    { src: gallery4, alt: "Shoulder fine line tattoo", position: "center" },
    { src: gallery9, alt: "Anatomical heart with lily", position: "center" },
    { src: gallery10, alt: "Translucent flower tattoo", position: "center" },
    { src: gallery5, alt: "Fine line collarbone tattoo", position: "center" },
    { src: gallery8, alt: "Koi fish tattoo", position: "center" },
    { src: gallery6, alt: "Delicate side tattoo", position: "center 30%" },
    { src: gallery3, alt: "Pamela tattooing", position: "center 20%" },
    { src: gallery2, alt: "Client with vine tattoo", position: "center" },
    { src: tattooSmoke, alt: "Fine line abstract tattoo", position: "center" },
    { src: flower, alt: "Delicate floral tattoo", position: "center 30%" },
    { src: heart, alt: "Anatomical heart with flowers", position: "center 30%" },
    { src: lily, alt: "Elegant lily tattoo", position: "center" },
    { src: eyebrows1, alt: "Microblading before and after", position: "center" },
    { src: eyebrows2, alt: "Micropigmentation results", position: "center" },
  ];

  return (
    <section id="portfolio" className="py-28 md:py-36">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] tracking-[0.3em] text-muted-foreground mb-6">
            TRABAJOS SELECCIONADOS
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-16 leading-[1.1]">
            Portfólio
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ objectPosition: image.position }}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
