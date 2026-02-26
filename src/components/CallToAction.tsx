import { motion } from "framer-motion";

const CallToAction = () => {
  const handleBooking = () => {
    window.open("https://wa.me/5521982387639?text=Hola! Me gustaría solicitar una cotización", "_blank");
  };

  return (
    <section className="py-16 md:py-36">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-[11px] tracking-[0.3em] text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            TU HISTORIA EN LA PIEL
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            ¿Lista para llevar tu historia en la piel?
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-muted-foreground leading-[1.8] mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            Solicita tu cotización hoy y agenda tu cita para crear un diseño exclusivo hecho solo para ti.
          </motion.p>
          <motion.button
            onClick={handleBooking}
            className="text-[11px] tracking-[0.25em] border border-foreground text-foreground px-10 py-5 hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            SOLICITAR COTIZACIÓN
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
