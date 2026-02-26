import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleBooking = () => {
    window.open("https://wa.me/5521982387639?text=Hola! Me gustaría agendar una cita", "_blank");
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "sobre", label: "SOBRE" },
    { id: "portfolio", label: "PORTFÓLIO" },
    { id: "contato", label: "CONTACTO" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Monogram */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-center leading-none"
          >
            <span className={`text-3xl tracking-[0.2em] font-serif font-light transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              PK
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-[11px] tracking-[0.25em] font-normal hover:opacity-50 transition-opacity duration-300 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={handleBooking}
              className={`text-[11px] tracking-[0.25em] font-normal border px-6 py-3 transition-all duration-300 ${
                isScrolled
                  ? "border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground"
                  : "border-white text-white hover:bg-white hover:text-foreground"
              }`}
            >
              AGENDAR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-8 pb-6">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-foreground text-left text-[11px] tracking-[0.25em]"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={handleBooking}
                className="text-[11px] tracking-[0.25em] border border-foreground text-foreground px-6 py-3 hover:bg-foreground hover:text-primary-foreground transition-all duration-300 w-fit"
              >
                AGENDAR
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
