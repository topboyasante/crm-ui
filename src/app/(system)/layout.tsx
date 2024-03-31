import { Navbar } from "@/components/root/navigation/navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Navbar>{children}</Navbar>;
}
