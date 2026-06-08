import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, duration = 0.5, y = 20, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
