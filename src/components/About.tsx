import { motion } from "framer-motion";
import portraitImage from "@/assets/pamela-portrait.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-36">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <motion.p
              className="text-[11px] tracking-[0.3em] text-muted-foreground mb-6"
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              QUIÉN SOY
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-10 leading-[1.1]"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              Pamela Roa
            </motion.h2>
            <motion.div
              className="space-y-6 text-base text-muted-foreground leading-[1.8]"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <p>
                Pamela Roa es tatuadora especializada en fine line, reconocida por la precisión, delicadeza y
                sensibilidad artística que caracterizan cada una de sus piezas.
              </p>
              <p>
                Su trabajo se enfoca en líneas minimalistas y composiciones atemporales, creando diseños exclusivos que
                respetan la esencia y la historia de cada persona.
              </p>
              <p>
                Es fundadora de Alma Tattoo y desarrolla su carrera entre Europa y Sudamérica, consolidando una
                trayectoria internacional basada en la excelencia y el detalle.
              </p>
              <p>
                Cada tatuaje es concebido como una obra íntima y personalizada, pensada para transformar emociones en
                arte permanente.
              </p>
              <p
                className="text-foreground italic"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}
              >
                En su estudio encontrarás un espacio profesional, seguro y cuidadosamente diseñado, que cumple con todas
                las normativas sanitarias vigentes de la Seremi de Salud.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <img src={portraitImage} alt="Pamela Roa — Tattoo Artist" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
