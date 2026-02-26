import { motion } from "framer-motion";
import portraitImage from "@/assets/pamela-portrait.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] as const }
  })
};

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-36">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <motion.p
              className="text-[11px] tracking-[0.3em] text-muted-foreground mb-6"
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>QUIÉN SOY</motion.p>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-10 leading-[1.1]"
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>Pamela Roa
            </motion.h2>
            <motion.div
              className="space-y-6 text-base text-muted-foreground leading-[1.8]"
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>

              <p>
                Pamela Roa es una eminencia mundial en tatuajes de líneas finas, reconocida por su precisión, delicadeza y nivel artístico excepcional. Es dueña y fundadora de los estudios Alma Tattoo, con presencia en tres países, consolidando una trayectoria internacional en Europa y América.
              </p>
              <p>
                Cada uno de sus diseños es completamente personalizado, creado para plasmar la historia, esencia y emociones de cada cliente en su piel. Además, se formó como micropigmentadora a nivel mundial bajo la técnica de microblading, ampliando su dominio en el arte de la estética y el detalle.
              </p>
              <p>
                En su estudio encontrarás un trabajo basado en la confianza, el profesionalismo y la excelencia, cumpliendo rigurosamente con todas las normativas exigidas por la Seremi de Salud.
              </p>
              <p className="text-foreground italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
                Su trabajo no es solo un tatuaje: es una obra íntima y exclusiva que transforma historias en arte permanente.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}>

            <img
              src={portraitImage}
              alt="Pamela Roa — Tattoo Artist"
              className="w-full h-auto" />

          </motion.div>
        </div>
      </div>
    </section>);

};

export default About;