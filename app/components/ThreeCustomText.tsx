"use client"

import React from 'react'
import { Text } from '@react-three/drei'

interface ThreeCustomTextProps {
  children: string;
  position: [number, number, number];
  fontSize?: number;
  color?: string;
  anchorX?: 'left' | 'center' | 'right';
  anchorY?: 'top' | 'top-baseline' | 'middle' | 'bottom-baseline' | 'bottom';
  maxWidth?: number;
  lineHeight?: number;
  bold?: boolean;
}

export default function ThreeCustomText({
  children,
  position,
  fontSize = 0.3,
  color = "white",
  anchorX = "center",
  anchorY = "middle",
  maxWidth,
  lineHeight,
  bold = false
}: ThreeCustomTextProps) {
  const defaultFontProps = {
    position,
    fontSize,
    color,
    anchorX,
    anchorY,
    maxWidth,
    lineHeight,
  }
  
  return (
    <Text
      {...defaultFontProps}
      // Use the system default font as a fallback
      font={undefined}
    >
      {children}
    </Text>
  )
} 