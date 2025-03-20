import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // Agregá los pesos que necesites
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Queen’s closet",
  description:
    "En Queen’s Closet, creamos ropa a medida para quienes buscan estilo, exclusividad y un ajuste perfecto. Diseñamos prendas personalizadas para eventos, fiestas, ropa casual y moda elegante, garantizando calidad y detalles únicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${raleway.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="px-4 md:px-6 lg:px-8">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
