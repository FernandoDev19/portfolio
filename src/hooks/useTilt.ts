import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface UseTiltOptions {
    max?: number;       // max tilt rotation (deg)
    speed?: number;     // transition speed (ms)
    glare?: boolean;    // enable glare effect
    maxGlare?: number;  // max glare opacity 0-1
    scale?: number;     // card scale on hover
    disabled?: boolean; // disable on mobile
}

/**
 * Attaches vanilla-tilt 3D effect to the returned ref element.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>(
    options: UseTiltOptions = {}
) {
    const {
        max = 8,
        speed = 400,
        glare = true,
        maxGlare = 0.12,
        scale = 1.03,
        disabled = false,
    } = options;

    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || disabled) return;

        VanillaTilt.init(el, {
            max,
            speed,
            glare,
            "max-glare": maxGlare,
            scale,
        });

        return () => {
            // vanilla-tilt attaches vanillaTilt to the element
            (el as HTMLElement & { vanillaTilt?: { destroy(): void } }).vanillaTilt?.destroy();
        };
    }, [max, speed, glare, maxGlare, scale, disabled]);

    return ref;
}
