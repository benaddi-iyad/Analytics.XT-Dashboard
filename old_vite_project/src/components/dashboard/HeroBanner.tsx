import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dashboard.jpg";

export const HeroBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl overflow-hidden mb-6 glow-effect"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent z-10" />
      <img
        src={heroImage}
        alt="Analytics Dashboard"
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 z-20 flex items-center px-8">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold mb-2"
          >
            Welcome back, <span className="gradient-text">John</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground max-w-md"
          >
            Your analytics are looking great today. Revenue is up 12% compared to last week.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};
