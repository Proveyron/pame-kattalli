import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/5521982387639?text=Hola! Me gustaría agendar una cita", "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      initial={{ opacity: 0, scale: 0, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.907 15.907 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.6c-.39 1.1-1.932 2.014-3.17 2.28-.848.18-1.956.324-5.684-1.222-4.772-1.978-7.84-6.816-8.078-7.132-.23-.316-1.932-2.572-1.932-4.904 0-2.332 1.222-3.476 1.656-3.952.39-.43 1.028-.614 1.638-.614.198 0 .376.01.536.018.434.02.652.046.938.726.358.848 1.23 3.002 1.338 3.222.11.22.22.516.072.816-.14.308-.264.444-.484.698-.22.254-.428.448-.648.722-.198.238-.422.494-.174.928.248.43 1.102 1.816 2.366 2.944 1.626 1.452 2.994 1.902 3.42 2.112.324.16.712.136.968-.136.324-.346.724-.92 1.132-1.486.29-.404.656-.454 1.014-.308.362.14 2.296 1.082 2.69 1.28.394.198.656.296.752.46.094.164.094.948-.296 2.048z" />
      </svg>
    </motion.button>
  );
};

export default WhatsAppButton;
