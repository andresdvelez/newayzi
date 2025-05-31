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
  title: "Newayzi | Hospedaje flexible y premium por horas, días o meses",
  description:
    "Descubre una nueva forma de hospedarte en Colombia. Desde cápsulas inteligentes hasta suites de lujo. Reserva por horas, noches o meses.",
  keywords:
    "alojamiento por horas, hospedaje flexible Colombia, cápsulas para dormir Bogotá, suites por semanas, apartasuites premium Medellín, alojamientos modernos Colombia",
  alternates: {
    canonical: "https://app.newayzi.vercel.app/es",
  },
  openGraph: {
    title: "Newayzi | Hospedaje flexible y premium por horas, días o meses",
    description:
      "Inicio - La solución más corta para las estancias largas | Newayzi",
    url: BASE_URL,
    siteName: "Newayzi",
    images: [
      {
        url: OPEN_GRAPH_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Newayzi",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newayzi | Hospedaje flexible y premium por horas, días o meses",
    description:
      "Descubre una nueva forma de hospedarte en Colombia. Desde cápsulas inteligentes hasta suites de lujo. Reserva por horas, noches o meses.",
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
