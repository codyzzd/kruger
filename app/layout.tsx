import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });
const sourceserif = Source_Serif_4({ subsets: ["latin"] });

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
        <Script
          id="show-banner"
          dangerouslySetInnerHTML={{
            __html: `<script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '3544395189204350');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=3544395189204350&ev=PageView&noscript=1"
    /></noscript>`,
          }}
        />
      </head>

      <body className={sourceserif.className}>
        <SpeedInsights />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
