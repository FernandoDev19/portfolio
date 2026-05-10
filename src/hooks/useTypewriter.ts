import { useState, useEffect } from "react";

/**
 * Typewriter hook — cycles through an array of strings with a blinking cursor.
 * @param words      Array of strings to cycle through
 * @param typeSpeed  ms per character when typing   (default 80)
 * @param deleteSpeed ms per character when deleting (default 45)
 * @param pauseMs    ms to wait after typing a word  (default 1800)
 */
export function useTypewriter(
    words: string[],
    typeSpeed = 80,
    deleteSpeed = 45,
    pauseMs = 1800
) {
    const [displayText, setDisplayText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!words.length) return;

        const current = words[wordIndex % words.length];

        if (isPaused) {
            const t = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseMs);
            return () => clearTimeout(t);
        }

        if (!isDeleting && displayText === current) {
            setIsPaused(true);
            return;
        }

        const speed = isDeleting ? deleteSpeed : typeSpeed;

        const t = setTimeout(() => {
            setDisplayText(
                isDeleting
                    ? current.slice(0, displayText.length - 1)
                    : current.slice(0, displayText.length + 1)
            );

            if (isDeleting && displayText.length === 1) {
                setIsDeleting(false);
                setWordIndex((i) => (i + 1) % words.length);
            }
        }, speed);

        return () => clearTimeout(t);
    }, [displayText, isDeleting, isPaused, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

    return displayText;
}
