import { motion } from 'motion/react';
import { AnimatedComponentProps } from '@/types/types';
import { defaultAnimationVariant } from '@/constants/animationsVariants';
const AnimatedComponent = ({ 
    children, 
    delay = 0,
    customAnimation
}: AnimatedComponentProps) => {
    

    const animation = customAnimation || {
        ...defaultAnimationVariant,
        transition: {
            ...defaultAnimationVariant.transition,
            delay: delay * 0.5,
        }
    };

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