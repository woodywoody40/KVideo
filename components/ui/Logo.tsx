import React from 'react';

export function Logo({ className = '', size = 40 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Background with subtle gradient */}
            <rect width="100" height="100" rx="24" fill="var(--accent-color)" />

            {/* Abstract 'W' and Play Button combination */}
            <path
                d="M25 35L40 65L55 35L70 65L85 35"
                stroke="var(--bg-color)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-90"
            />

            {/* Play button triangle integrated or overlayed */}
            <path
                d="M45 40V60L60 50L45 40Z"
                fill="var(--bg-color)"
            />
        </svg>
    );
}
