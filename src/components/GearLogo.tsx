'use client';

import { motion } from 'framer-motion';

interface GearLogoProps {
    currentSlide: number;
}

export default function GearLogo({ currentSlide }: GearLogoProps) {
    // Calculate rotation and position based on current slide
    // We want it to move along the bottom or side, rotating as it goes.
    // Let's make it move across the bottom of the screen.

    // Total slides is about 11, so we can map progress 0-100%.
    // Or just move it by a fixed amount per slide.

    return (
        <motion.div
            className="fixed bottom-[-100px] left-0 z-10 opacity-20 pointer-events-none"
            initial={{ x: 0, rotate: 0 }}
            animate={{
                x: currentSlide * 150, // Move 150px per slide
                rotate: currentSlide * 120, // Rotate 120deg per slide
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20
            }}
        >
            <img
                src="/scrap_logo.jpg"
                alt="Scrap Logo"
                width={500}
                height={500}
                className="rounded-full" // Make it round if it's square
            />
        </motion.div>
    );
}
