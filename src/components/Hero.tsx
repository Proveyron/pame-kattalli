import heroImage from "@/assets/pamela-hero-new.jpeg";

const Hero = () => {
  const handleBooking = () => {
    window.open("https://wa.me/5521982387639?text=Hola! Me gustaría agendar una cita", "_blank");
  };

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
        }}
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.3em] text-white/80 mb-4">
            TATTOO ARTIST
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[0.95] mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Pame<br />Kattalii
          </h1>
          <button
            onClick={handleBooking}
            className="text-[11px] tracking-[0.25em] border border-white text-white px-8 py-4 hover:bg-white hover:text-foreground transition-all duration-300"
          >
            SOLICITAR COTIZACIÓN
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
