import logoHero from "@/assets/pk-logo-hero.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-0 md:px-12">
      <img
        src={logoHero}
        alt="Pame Kattalii - Tattoo Artist"
        className="w-full md:max-w-lg lg:max-w-xl"
      />
    </section>
  );
};

export default Hero;
