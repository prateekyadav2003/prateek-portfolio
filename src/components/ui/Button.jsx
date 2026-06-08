import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', ...props }) => {
  const baseStyles = 'inline-flex items-center gap-2 justify-center font-bold text-[13px] py-3 px-7 rounded-[30px] transition-all duration-200 focus:outline-none cursor-pointer';
  
  const variants = {
    primary: 'bg-grad text-white shadow-shadow hover:shadow-[0_12px_36px_rgba(108,99,255,0.35)] border-none',
    outline: 'bg-glass2 text-textCol border-[1.5px] border-borderCol2 hover:bg-accent hover:text-white hover:border-accent',
  };

  return (
    <motion.button
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
