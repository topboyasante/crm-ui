"use client";
import * as React from "react";
import { ThemeProvider } from "next-themes";

// const client = new QueryClient();

type Props = {
  children?: React.ReactNode;
};

export function Provider({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* <QueryClientProvider client={client}>
        <SessionProvider>{children}</SessionProvider>
      </QueryClientProvider> */}
      {children}
    </ThemeProvider>
  );
}