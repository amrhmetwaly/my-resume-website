"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps {
    text: string;
    speed?: number;
    highlightWords?: string[];
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ 
    text, 
    speed = 5, 
    highlightWords = [] 
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const indexRef = useRef(0);
    const characterDelay = Math.max(5, 40 - speed * 4); // Faster typing with higher speed value
    
    // Reset state when text changes
    useEffect(() => {
        setDisplayedText('');
        setIsComplete(false);
        indexRef.current = 0;
    }, [text]);

    useEffect(() => {
        if (isComplete) return;

        const safeText = text || ''; // Ensure text is defined

        const timer = setInterval(() => {
            if (indexRef.current < safeText.length) {
                setDisplayedText(safeText.substring(0, indexRef.current + 1));
                indexRef.current += 1;
            } else {
                clearInterval(timer);
                setIsComplete(true);
            }
        }, characterDelay);

        return () => clearInterval(timer);
    }, [text, characterDelay, isComplete]);

    const handleClick = () => {
        if (!isComplete && text) {
            setDisplayedText(text);
            setIsComplete(true);
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <motion.span 
            className="inline-block cursor-pointer relative"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{ 
                color: isHovered ? '#10b981' : 'inherit'
            }}
            transition={{ duration: 0.2 }}
        >
            {displayedText}
            {!isComplete && (
                <motion.span 
                    className="inline-block w-1.5 h-4 bg-green-400 ml-0.5"
                    animate={{ 
                        opacity: [1, 0.3, 1],
                    }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 0.8,
                    }}
                />
            )}
        </motion.span>
    );
};