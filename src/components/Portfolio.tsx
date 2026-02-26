import { motion } from "framer-motion";
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
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";
import gallery21 from "@/assets/gallery-21.jpg";

const Portfolio = () => {
  const images = [
    { src: gallery21, alt: "X-ray poppy leg tattoo", position: "center" },
    { src: gallery1, alt: "Fine line floral tattoo", position: "center" },
    { src: gallery7, alt: "Delicate rose tattoo", position: "center" },
    { src: gallery13, alt: "Smoke effect rib tattoo", position: "center" },
    { src: gallery4, alt: "Shoulder fine line tattoo", position: "center" },
    { src: gallery11, alt: "Brain heart sentipensante tattoo", position: "center" },
    { src: gallery10, alt: "Translucent flower tattoo", position: "center" },
    { src: gallery16, alt: "Delicate lily forearm tattoo", position: "center" },
    { src: gallery5, alt: "Fine line collarbone tattoo", position: "center" },
    { src: gallery20, alt: "Bird and tree of life tattoo", position: "center" },
    { src: gallery8, alt: "Koi fish tattoo", position: "center" },
    { src: gallery15, alt: "Ankle vine tattoo", position: "center" },
    { src: gallery9, alt: "Anatomical heart with lily", position: "center" },
    { src: gallery18, alt: "Bouquet hip tattoo", position: "center" },
    { src: gallery17, alt: "Fine line side body tattoo", position: "center" },
    { src: gallery14, alt: "Shoulder vine tattoo", position: "center" },
    { src: gallery19, alt: "Anatomical heart forearm tattoo", position: "center" },
    { src: gallery12, alt: "Sentipensante tattoo angle", position: "center" },
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
    <section id="portfolio" className="py-16 md:py-36">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-[11px] tracking-[0.3em] text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            TRABAJOS SELECCIONADOS
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-16 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            Portfólio
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="aspect-square overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ objectPosition: image.position }}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
