import { createContext, useState } from "react";

// Create a context for Dark Mode
export const DarkMode = createContext();

const DarkModeContextProvider = ({ children }) => {
    // State to manage dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <DarkMode.Provider value={[isDarkMode, setIsDarkMode]}>
            {children}
        </DarkMode.Provider>
    );
};

export default DarkModeContextProvider;
