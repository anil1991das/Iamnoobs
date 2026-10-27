"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface ToolPreviewContextValue {
  activeToolSlug: string | null;
  setActiveToolSlug: Dispatch<SetStateAction<string | null>>;
}

const ToolPreviewContext = createContext<ToolPreviewContextValue | null>(null);

export function ToolPreviewProvider({ children }: { children: ReactNode }) {
  const [activeToolSlug, setActiveToolSlug] = useState<string | null>(null);

  return (
    <ToolPreviewContext.Provider value={{ activeToolSlug, setActiveToolSlug }}>
      {children}
    </ToolPreviewContext.Provider>
  );
}

export function useToolPreview(): ToolPreviewContextValue {
  const context = useContext(ToolPreviewContext);
  if (!context) {
    throw new Error("useToolPreview must be used within a ToolPreviewProvider.");
  }
  return context;
}
