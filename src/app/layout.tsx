import type { Metadata } from "next";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./globals.css";
import Navbar from '@/ui/components/navBar';
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "Desbravador - Github Explorer",
  description: "Created by gustavo torregrosa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <Navbar />
          <Container className="pt-16 ">
            {children}
          </Container>
      </body>
    </html>
  );
}
