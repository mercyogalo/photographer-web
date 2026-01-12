import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getThemePreference(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function setThemePreference(theme: "light" | "dark") {
  if (typeof window === "undefined") return;
  localStorage.setItem("theme", theme);
}

