import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, delay = 0, onClick, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, boxShadow: "0 16px 40px rgba(108, 99, 255, 0.2)" } : undefined}
      onClick={onClick}
      className={`glass-effect rounded-[20px] p-6 transition-colors duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
