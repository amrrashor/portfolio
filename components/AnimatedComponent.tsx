import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { AnimatedComponentProps } from '@/types/types';

const AnimatedComponent = ({ 
    children, 
    delay = 0,
    customAnimation
}: AnimatedComponentProps) => {
    const defaultAnimation = {
        initial: { opacity: 0, y: 100 },
        whileInView: { opacity: 1, y: 0 },
        transition: {
            delay: delay * 0.5,
            duration: 0.3,
        },
        viewport: { once: true }
    }

    const animation = customAnimation || defaultAnimation;

    return (
        <motion.div
            initial={animation.initial}
            whileInView={animation.whileInView}
            transition={animation.transition}
            viewport={animation.viewport}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedComponent; 