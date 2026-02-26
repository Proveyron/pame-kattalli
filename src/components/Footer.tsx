const Footer = () => {
  return (
    <footer className="py-8 border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-2xl tracking-[0.2em] font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            PK
          </span>
          <p className="text-[11px] tracking-[0.15em] text-muted-foreground">
            &copy; {new Date().getFullYear()} PAME KATTALII — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
