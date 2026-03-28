import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/6017d455-7feb-49ba-8522-defde2645f78/files/de1245d0-0efe-40f2-a2a8-452fd0adeb61.jpg"
          alt="Nexus messenger"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-70">Мессенджер нового поколения</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          NEXUS
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Общайся быстро, безопасно и без границ. Сквозное шифрование, мгновенная доставка и мощные групповые чаты.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#download" className="bg-white text-black px-8 py-3 uppercase text-sm tracking-wide font-medium hover:bg-neutral-200 transition-colors duration-300">
            Скачать бесплатно
          </a>
          <a href="#features" className="border border-white text-white px-8 py-3 uppercase text-sm tracking-wide hover:bg-white/10 transition-colors duration-300">
            Узнать больше
          </a>
        </div>
      </div>
    </div>
  );
}