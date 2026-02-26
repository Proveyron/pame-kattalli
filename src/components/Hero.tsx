import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/pamela-hero-new.jpeg";

const Hero = () => {
  const handleBooking = () => {
    window.open("https://wa.me/5521999999999?text=Olá! Gostaria de agendar um horário", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 65%',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white pt-20">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
          Sua História na Pele
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto opacity-90">
          Desenhos exclusivos que contam histórias delicadas e elegantes
        </p>
        <Button 
          onClick={handleBooking}
          size="lg"
          className="bg-white text-foreground hover:bg-white/90 transition-all duration-300 text-lg px-8 py-6"
        >
          Agendar Consulta
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
