import { useEffect, useState } from "react";

export const useTheme = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved) setIsDark(saved === 'dark');
    }, []);

    useEffect(() => {
        document.body.classList.toggle('light-mode', !isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return { isDark, toggleTheme: () => setIsDark(d => !d) };
};