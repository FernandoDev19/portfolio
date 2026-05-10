import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
    threshold?: number;   // 0-1, fraction of element visible to trigger
    rootMargin?: string;  // e.g. "0px 0px -60px 0px"
    once?: boolean;       // if true, won't re-animate on scroll-out
}

/**
 * Returns a ref to attach to any element, and an `isVisible` boolean.
 * When the element enters the viewport the class list change triggers your CSS animation.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
    options: UseScrollRevealOptions = {}
) {
    const { threshold = 0.12, rootMargin = "0px 0px -50px 0px", once = true } = options;
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(el);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return { ref, isVisible };
}
