import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion'
import { useAnimation } from 'framer-motion';

function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({threshold: 0.5});
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, opacity: 1, scale: 1,
        transition: { when:"beforeChildren", staggerChildren: 0.2, duration: 1 } },
          hidden: { opacity: 0, opacity: 0, scale: 0.9 }
        }}
      >
        {children}
      </motion.div>
    );
  }

export default FadeInWhenVisible