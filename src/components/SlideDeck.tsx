'use client';

import { useState, useEffect, TouchEvent } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { slides } from '@/data/slides';
import Slide from './Slide';
import GearLogo from './GearLogo';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function SlideDeck() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);


    const nextSlide = () => {
        if (currentSlideIndex < slides.length - 1) {
            setCurrentSlideIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(prev => prev - 1);
        }
    };

    // Touch navigation
    const minSwipeDistance = 50;

    const onTouchStart = (e: TouchEvent) => {
        setTouchEnd(null); // Reset
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };


    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlideIndex]);

    // Progress bar width
    const progress = ((currentSlideIndex + 1) / slides.length) * 100;

    return (
        <div
            className="relative min-h-screen w-full overflow-hidden bg-[var(--color-navy)] flex flex-col touch-none"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Background/Gear Animation */}
            <GearLogo currentSlide={currentSlideIndex} />

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center z-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlideIndex}
                        className="w-full h-full"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Slide data={slides[currentSlideIndex]} />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-between px-12 items-center">
                <button
                    onClick={prevSlide}
                    disabled={currentSlideIndex === 0}
                    className={`p-2 rounded-full hover:bg-white/10 transition-colors ${currentSlideIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <ChevronLeft className="w-8 h-8 text-white" />
                </button>

                <div className="text-gray-400 text-sm">
                    {currentSlideIndex + 1} / {slides.length}
                </div>

                <button
                    onClick={nextSlide}
                    disabled={currentSlideIndex === slides.length - 1}
                    className={`p-2 rounded-full hover:bg-white/10 transition-colors ${currentSlideIndex === slides.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <ChevronRight className="w-8 h-8 text-white" />
                </button>
            </div>

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
                <motion.div
                    className="h-full bg-white/50"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </div>
    );
}
