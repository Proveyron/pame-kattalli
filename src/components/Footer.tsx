import pkMonogram from "@/assets/pk-monogram.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={pkMonogram} alt="PK" className="h-8 w-auto" />
          <p className="text-[11px] tracking-[0.15em] text-muted-foreground">
            &copy; {new Date().getFullYear()} PAME KATTALII — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
