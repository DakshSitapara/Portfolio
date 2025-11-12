'use client';

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function NotFound() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-5xl md:text-8xl font-bold dark:text-white text-center">
          404
        </div>
        <div className="font-extralight text-lg md:text-4xl dark:text-neutral-200 py-4">
          Page not found
        </div>
        <button
          onClick={() => window.location.href = '/'}
          aria-label="Go back to the homepage"
          className="bg-black dark:bg-white rounded-full text-white dark:text-black px-6 py-3 text-lg hover:opacity-80 transition duration-200"
        >
          Go Home
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
