"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { HeroUIProvider } from "@heroui/react";
import { useLocale } from "next-intl";
import React, { ReactNode } from "react";
import { enUS, esES } from "@clerk/localizations";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  const locale = useLocale();

  return (
    <HeroUIProvider>
      <ClerkProvider
        localization={locale === "en" ? enUS : esES}
        afterSignOutUrl={"/auth/sign-in"}
        signInFallbackRedirectUrl={"/"}
        waitlistUrl="/auth/waitlist"
      >
        <FloatingWhatsApp
          phoneNumber={process.env.NEXT_PUBLIC_WPP_NUMBER || ""}
          accountName="Newayzi"
          avatar="/brand/logo.png"
          chatMessage="Hola! 🤝 
Cómo puedo ayudarte?"
        />
        {children}
      </ClerkProvider>
    </HeroUIProvider>
  );
};
