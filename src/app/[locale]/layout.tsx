// app/[locale]/layout.tsx
import { ClientProvider } from "@/modules/main/providers/ClientProvider";
import { ReactNode } from "react";

export default async function LocaleLayout({
  children,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return <ClientProvider>{children}</ClientProvider>;
}
