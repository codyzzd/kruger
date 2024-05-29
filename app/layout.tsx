import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Montserrat, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceserif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--ss4-font",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--montserrat-font",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Krüger Advocacia",
    default: "Krüger Advocacia",
  },
  description:
    "Kruger Toledo Advocacia é um escritório especializado em Direito Bancário,  Atendimento personalizado, transparência, confiabilidade, eficiência e Resultados.",
  verification: {
    other: {
      "facebook-domain-verification": ["w7i321flcno2hzffbat92yfgbqngb3"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MX3KQ9G')
        `}} />
      </head>
      <body className={`${sourceserif.variable} ${montserrat.variable}`}>
        <SpeedInsights />
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MX3KQ9G"
          height="0" width="0"></iframe></noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
