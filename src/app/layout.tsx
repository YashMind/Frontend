import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import StoreProvider from "@/app/StoreProvider";
import ScrollToTop from "@/services/scroolToTop/scroolToTop";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import "./index.css";
import "react-phone-input-2/lib/style.css";
import { TimezoneProvider } from "@/context/TimeZoneContext";

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
  description: "YASHRAA is a powerful All-in-one AI Tools Platform offering subscription-based tools like Chatbots, Voice Agents, LLM APIs, and more — all in one place. Subscribe, and deploy AI solutions tailored to your business needs. Build your AI stack with YASHRAA today!"
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
          <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" href="/favicon-64x64.png" sizes="64x64" />
          <link rel="icon" href="/favicon-128x128.png" sizes="128x128" />
        </head>
        <body
          suppressHydrationWarning={true}
          className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        >
          <TimezoneProvider>
            <Toaster position="top-center" reverseOrder={false} />
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
