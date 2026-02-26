import { motion } from "framer-motion";
import logoHero from "@/assets/pk-logo-hero.svg";
import pamelaWorking from "@/assets/pamela-working.jpg";

const Hero = () => {
  const handleBooking = () => {
    window.open("https://wa.me/5521982387639?text=Hola! Me gustaría agendar una cita", "_blank");
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-background">
      {/* Mobile-only hero image */}
      <motion.div
        className="w-full md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={pamelaWorking}
          alt="Pamela Kattalii tatuando"
          className="w-full h-screen object-cover object-center"
        />
      </motion.div>

      {/* Logo + CTA */}
      <div className="flex flex-col items-center px-8 md:px-12 py-12 md:py-0 md:min-h-screen md:justify-center">
        <motion.img
          src={logoHero}
          alt="Pame Kattalii - Tattoo Artist"
          className="w-[85%] md:max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.button
          onClick={handleBooking}
          className="mt-10 text-[11px] tracking-[0.25em] border border-foreground text-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          SOLICITAR COTIZACIÓN
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
