import { ReactNode } from "react";

export interface ThemeProviderProps {
    children: ReactNode;
}

export interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}
  