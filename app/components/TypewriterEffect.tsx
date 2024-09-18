"use client"

import React, { useState, useEffect, useRef } from 'react';

interface TypewriterEffectProps {
    text: string;
    speed?: number;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, speed = 20 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const indexRef = useRef(0);

    useEffect(() => {
        if (isComplete) return;

        const timer = setInterval(() => {
            if (indexRef.current < text.length) {
                setDisplayedText((prev) => prev + text[indexRef.current]);
                indexRef.current += 1;
            } else {
                clearInterval(timer);
                setIsComplete(true);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed, isComplete]);

    const handleClick = () => {
        if (!isComplete) {
            setDisplayedText(text);
            setIsComplete(true);
        }
    };

    return <span onClick={handleClick}>{displayedText}</span>;
};