import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const sourceserif = Source_Serif_4({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krüger Advocacia",
  description:
    "Kruger Toledo Advocacia é um escritório especializado em Direito Bancário,  Atendimento personalizado, transparência, confiabilidade, eficiência e Resultados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceserif.className}>{children}</body>
    </html>
  );
}
