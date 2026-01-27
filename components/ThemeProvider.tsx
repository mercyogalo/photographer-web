"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getThemePreference, setThemePreference } from "@/lib/utils";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Always set to dark (black background)
    setTheme("dark");
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add("dark");
    document.body.className = "dark";
  }, []);

  const toggleTheme = () => {
    // Theme toggle disabled - always dark mode
    // Keeping function for compatibility but no-op
  };

  // Always provide the context, even before mounting
  // This prevents the "useTheme must be used within a ThemeProvider" error
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

