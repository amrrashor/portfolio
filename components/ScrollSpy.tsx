"use client";
import React from 'react';
import { useScroll, useSpring, motion } from 'motion/react';

const ScrollSpy = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    
    return (
        <motion.div className="fixed top-0 left-0 right-0 h-3 bg-tomato-1 z-50 origin-top-left" style={{ scaleX }} />
    )
}

export default ScrollSpy