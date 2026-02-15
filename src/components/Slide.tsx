'use client';

import { motion } from 'framer-motion';
import { SlideData } from '@/data/slides';

interface SlideProps {
    data: SlideData;
}

export default function Slide({ data }: SlideProps) {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center max-w-6xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`w-full ${data.type === 'split' ? 'grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left' : 'space-y-8'}`}
            >
                {/* Content Side */}
                <div className={`${data.type === 'split' ? 'space-y-6 order-2 md:order-1' : 'space-y-8'}`}>
                    {/* Title */}
                    {data.title && (
                        <h1 className={`${data.type === 'split' ? 'text-4xl md:text-6xl text-left' : 'text-5xl md:text-7xl'} font-bold tracking-tight text-white mb-6`}>
                            {data.title}
                        </h1>
                    )}

                    {/* Subtitle */}
                    {data.subtitle && (
                        <h2 className={`${data.type === 'split' ? 'text-xl md:text-2xl text-left' : 'text-2xl md:text-3xl'} text-gray-300 font-light mb-8`}>
                            {data.subtitle}
                        </h2>
                    )}

                    {/* Content */}
                    {data.content && (
                        <div className={`space-y-6 ${data.type === 'split' ? 'w-full' : 'inline-block w-full max-w-3xl text-left'}`}>
                            {data.content.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    whileHover={{ x: 10 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="flex items-start text-2xl md:text-3xl text-gray-200"
                                >
                                    <span className="mr-4 text-cyan-400 font-bold mt-[-4px]">&gt;</span>
                                    <span className="flex-1">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Image Side - Only shows if image exists */}
                {data.image && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 40 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.5
                        }}
                        className={`relative ${data.type === 'split' ? 'order-1 md:order-2 h-full flex items-center justify-center' : 'mt-8 mx-auto'}`}
                    >
                        <img
                            src={data.image}
                            alt={data.title || "Slide visualization"}
                            className={`rounded-xl shadow-2xl border border-gray-700/50 object-contain ${data.type === 'split' ? 'max-h-[70vh] w-auto' : 'max-h-[75vh] w-full max-w-5xl'}`}
                        />
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
