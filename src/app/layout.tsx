import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const OPEN_GRAPH_IMAGE_URL = `${BASE_URL}/brand/thumbnail.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Newayzi | Inicio",
  description:
    "Inicio - La solución más corta para las estancias largas | Newayzi",
  alternates: {
    canonical: "https://app.newayzi.vercel.app/es",
  },
  openGraph: {
    title: "Newayzi | Inicio",
    description:
      "Inicio - La solución más corta para las estancias largas | Newayzi",
    url: BASE_URL,
    siteName: "Newayzi | Inicio",
    images: [
      {
        url: OPEN_GRAPH_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Newayzi | Inicio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newayzi | Inicio",
    description:
      "Inicio - La solución más corta para las estancias largas | Newayzi",
    images: [OPEN_GRAPH_IMAGE_URL],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider
          messages={messages.default as AbstractIntlMessages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
