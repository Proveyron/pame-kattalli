import logoHero from "@/assets/pk-logo-hero.png";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-background">
      <img
        src={logoHero}
        alt="Pame Kattalii - Tattoo Artist"
        className="w-full max-w-2xl px-8"
      />
    </section>
  );
};

export default Hero;
