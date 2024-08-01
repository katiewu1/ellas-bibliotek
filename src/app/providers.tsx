"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
        <NextUIProvider>{children}</NextUIProvider>
      </>
    );
  }
  return (
    <ThemeProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
