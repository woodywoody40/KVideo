import React from 'react';

interface CssLogoProps {
    className?: string;
    size?: number;
}

export function CssLogo({ className = '', size = 40 }: CssLogoProps) {
    // Creating a sleek, geometric "W" that doubles as a play button abstraction
    // Using pure CSS/Tailwind for sharpness and performance

    return (
        <div
            className={`relative flex items-center justify-center bg-[var(--accent-color)] rounded-[12px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_10px_rgba(0,0,0,0.2)] overflow-hidden ${className}`}
            style={{ width: size, height: size }}
        >
            {/* Gloss Effect - Top Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

            {/* The "W" / Play Icon Shape */}
            <div className="relative z-10 w-[60%] h-[60%] flex items-center justify-center">
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-[0_2px_3px_rgba(0,0,0,0.2)]"
                >
                    {/* Main Shape: Stylized W/Play combination */}
                    <path
                        d="M20 25 L35 75 L50 35 L65 75 L80 25"
                        stroke="var(--bg-color)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* Play Triangle Accent */}
                    <path
                        d="M45 45 L60 55 L45 65 Z"
                        fill="var(--bg-color)"
                        className="hidden" // Hiding explicit triangle to keep it abstract and cleaner as requested initially
                    />
                </svg>
            </div>

            {/* Shine/Gloss at bottom right */}
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/5 blur-md rounded-full pointer-events-none" />
        </div>
    );
}
