import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import StoreProvider from "@/app/StoreProvider";
import ScrollToTop from "@/services/scroolToTop/scroolToTop";
import "./globals.css";
import "./index.css";
import "react-phone-input-2/lib/style.css";
import { TimezoneProvider } from "@/context/TimeZoneContext";
import NextTopLoader from 'nextjs-toploader';
import ToastProvider from "./ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YASHRAA",
  description: "YASHRAA is a powerful All-in-one AI Tools Platform offering subscription-based tools like Chatbots, Voice Agents, LLM APIs, and more — all in one place. Subscribe, and deploy AI solutions tailored to your business needs. Build your AI stack with YASHRAA today!",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <html className="scroll-smooth" lang="en" suppressHydrationWarning={true}>
        <head>
          <meta property="og:image" content="https://yashraa.ai/images/yashraa_header.svg"></meta>

          <link rel="icon" href="./favicon.ico" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-FMTKQ1Z2FB"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FMTKQ1Z2FB');
          `
          }} />
        </head>
        <body
          suppressHydrationWarning={true}
          className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        >
          <NextTopLoader />
          <TimezoneProvider>
            <ToastProvider />
            <StoreProvider>
              {children}
              <ScrollToTop />
            </StoreProvider>
          </TimezoneProvider>
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
