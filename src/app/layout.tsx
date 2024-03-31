import { Provider } from "@/components/providers/app-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
