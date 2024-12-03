import { createContext, useContext, useState, ReactNode } from 'react';

interface FontSizeContextProps {
  fontSize: number;
  increaseFont: () => void;
  decreaseFont: () => void;
}

const FontSizeContext = createContext<FontSizeContextProps | undefined>(
  undefined,
);

export const FontSizeProvider = ({ children }: { children: ReactNode }) => {
  const [fontSize, setFontSize] = useState(16); // Base size in pixels
  const maxFontSize = 24; // Maximum font size
  const minFontSize = 12; // Minimum font size

  const increaseFont = () => {
    setFontSize((prev) => Math.min(prev + 2, maxFontSize));
  };

  const decreaseFont = () => {
    setFontSize((prev) => Math.max(prev - 2, minFontSize));
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFont, decreaseFont }}>
      <div style={{ fontSize: `${fontSize}px` }}>{children}</div>
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
};
